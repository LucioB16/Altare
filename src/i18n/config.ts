import type { WeddingData } from "../data/weddingData";

type LocaleDictionary = {
    contentDefaults?: {
        locale?: {
            language?: string;
        };
    };
};

const localeModules = import.meta.glob<{ default: LocaleDictionary }>(
    "./locales/*.json",
    { eager: true },
);

function getLocaleCodeFromPath(filePath: string): string | undefined {
    const match = filePath.match(/\/([a-z0-9-]+)\.json$/i);
    return match?.[1]?.toLowerCase();
}

const discoveredLocales = Object.keys(localeModules)
    .map((filePath) => getLocaleCodeFromPath(filePath))
    .filter((value): value is string => Boolean(value));

const uniqueLocales = Array.from(new Set(discoveredLocales)).sort((a, b) =>
    a.localeCompare(b),
);

export type SupportedLocale = string;
export const DEFAULT_LOCALE: SupportedLocale = "en";
export const SUPPORTED_LOCALES: SupportedLocale[] = uniqueLocales.includes(
    DEFAULT_LOCALE,
)
    ? [
          DEFAULT_LOCALE,
          ...uniqueLocales.filter((locale) => locale !== DEFAULT_LOCALE),
      ]
    : [DEFAULT_LOCALE, ...uniqueLocales];

const supportedLocaleSet = new Set<string>(SUPPORTED_LOCALES);

const LOCALE_ALIAS: Record<string, string> = {
    "en-us": "en",
    "en-gb": "en",
    "en-ca": "en",
};

function fallbackLanguageTag(locale: string): string {
    const [language, region] = locale.split("-");
    if (!language) return "en-US";

    if (region) {
        return `${language.toLowerCase()}-${region.toUpperCase()}`;
    }

    if (language.length === 2) {
        return `${language.toLowerCase()}-${language.toUpperCase()}`;
    }

    return `${language.toLowerCase()}-US`;
}

const localeLanguageTagSeed: Record<string, string> = {};
Object.entries(localeModules).forEach(([filePath, module]) => {
    const localeCode = getLocaleCodeFromPath(filePath);
    if (!localeCode) return;

    const localeTag = module.default?.contentDefaults?.locale?.language;
    if (typeof localeTag !== "string" || !localeTag.trim()) return;

    localeLanguageTagSeed[localeCode] = localeTag.trim();
});

export const LOCALE_LANGUAGE_TAG: Record<string, string> = SUPPORTED_LOCALES.reduce(
    (acc, locale) => {
        acc[locale] = localeLanguageTagSeed[locale] ?? fallbackLanguageTag(locale);
        return acc;
    },
    {} as Record<string, string>,
);

export function tryNormalizeLocale(input?: string): SupportedLocale | undefined {
    const candidate = input?.trim().toLowerCase().replace(/_/g, "-");
    if (!candidate) return undefined;

    if (supportedLocaleSet.has(candidate)) {
        return candidate;
    }

    const candidateAlias = LOCALE_ALIAS[candidate];
    if (candidateAlias && supportedLocaleSet.has(candidateAlias)) {
        return candidateAlias;
    }

    const languageOnly = candidate.split("-")[0];
    if (supportedLocaleSet.has(languageOnly)) {
        return languageOnly;
    }

    const languageAlias = LOCALE_ALIAS[languageOnly];
    if (languageAlias && supportedLocaleSet.has(languageAlias)) {
        return languageAlias;
    }

    return undefined;
}

export function normalizeLocale(input?: string): SupportedLocale {
    return tryNormalizeLocale(input) ?? DEFAULT_LOCALE;
}

export function getLocaleLanguageTag(locale?: string): string {
    const normalized = tryNormalizeLocale(locale) ?? DEFAULT_LOCALE;
    return (
        LOCALE_LANGUAGE_TAG[normalized] ??
        LOCALE_LANGUAGE_TAG[DEFAULT_LOCALE] ??
        "en-US"
    );
}

export function getLocaleFromPathname(
    pathname: string,
    basePath = import.meta.env.BASE_URL || "/",
): SupportedLocale | undefined {
    const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
    const baseWithoutTrailingSlash = normalizedBase.replace(/\/$/, "");

    let cleanPath = pathname;

    if (
        baseWithoutTrailingSlash !== "" &&
        baseWithoutTrailingSlash !== "/" &&
        cleanPath.toLowerCase().startsWith(baseWithoutTrailingSlash.toLowerCase())
    ) {
        cleanPath = cleanPath.slice(baseWithoutTrailingSlash.length) || "/";
    }

    const firstSegment = cleanPath.split("/").filter(Boolean)[0];
    return tryNormalizeLocale(firstSegment);
}

export function resolveSiteLocale(
    data: Pick<WeddingData, "site" | "locale">,
    override?: string,
): SupportedLocale {
    return (
        tryNormalizeLocale(override) ??
        tryNormalizeLocale(data.site.language) ??
        tryNormalizeLocale(data.locale.language) ??
        DEFAULT_LOCALE
    );
}

export function resolveDemoLocales(data: Pick<WeddingData, "demo">): SupportedLocale[] {
    const rawLocales = data.demo?.locales ?? [];
    const unique = new Set<SupportedLocale>();

    rawLocales.forEach((value) => {
        const normalized = tryNormalizeLocale(value);
        if (normalized) {
            unique.add(normalized);
        }
    });

    return [...unique];
}

import type { WeddingData } from "../data/weddingData";

export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "en";

const supportedLocaleSet = new Set<string>(SUPPORTED_LOCALES);

const LOCALE_ALIAS: Record<string, SupportedLocale> = {
    en: "en",
    "en-us": "en",
    "en-gb": "en",
    es: "es",
    "es-ar": "es",
    "es-es": "es",
    "es-mx": "es",
    "es-cl": "es",
    "es-co": "es",
    "es-pe": "es",
    "es-uy": "es",
};

export const LOCALE_LANGUAGE_TAG: Record<SupportedLocale, string> = {
    en: "en-US",
    es: "es-AR",
};

export function tryNormalizeLocale(input?: string): SupportedLocale | undefined {
    const candidate = input?.trim().toLowerCase().replace(/_/g, "-");
    if (!candidate) return undefined;

    if (supportedLocaleSet.has(candidate)) {
        return candidate as SupportedLocale;
    }

    if (candidate in LOCALE_ALIAS) {
        return LOCALE_ALIAS[candidate];
    }

    const languageOnly = candidate.split("-")[0];
    if (languageOnly in LOCALE_ALIAS) {
        return LOCALE_ALIAS[languageOnly];
    }

    return undefined;
}

export function normalizeLocale(input?: string): SupportedLocale {
    return tryNormalizeLocale(input) ?? DEFAULT_LOCALE;
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
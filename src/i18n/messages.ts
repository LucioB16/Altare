import type { WeddingData } from "../data/weddingData";
import {
    DEFAULT_LOCALE,
    SUPPORTED_LOCALES,
    getLocaleFromPathname,
    resolveSiteLocale,
    type SupportedLocale,
} from "./config";

export type MessageCatalog = Record<string, unknown>;

const localeModules = import.meta.glob<{ default: MessageCatalog }>(
    "./locales/*.json",
    { eager: true },
);

function getLocaleCodeFromPath(filePath: string): string | undefined {
    const match = filePath.match(/\/([a-z0-9-]+)\.json$/i);
    return match?.[1]?.toLowerCase();
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge(base: MessageCatalog, override: MessageCatalog): MessageCatalog {
    const output: MessageCatalog = { ...base };

    Object.entries(override).forEach(([key, value]) => {
        const baseValue = output[key];

        if (isRecord(baseValue) && isRecord(value)) {
            output[key] = deepMerge(baseValue, value);
            return;
        }

        output[key] = value;
    });

    return output;
}

function getByPath(obj: MessageCatalog, path: string): unknown {
    return path.split(".").reduce<unknown>((acc, segment) => {
        if (!isRecord(acc)) return undefined;
        return acc[segment];
    }, obj);
}

const supportedLocaleSet = new Set<string>(SUPPORTED_LOCALES);
const catalogs = SUPPORTED_LOCALES.reduce(
    (acc, locale) => {
        acc[locale] = {};
        return acc;
    },
    {} as Record<SupportedLocale, MessageCatalog>,
);

Object.entries(localeModules).forEach(([filePath, module]) => {
    const localeCode = getLocaleCodeFromPath(filePath);
    if (!localeCode || !supportedLocaleSet.has(localeCode)) return;

    const payload = module.default;
    if (!isRecord(payload)) return;

    catalogs[localeCode] = payload;
});

const defaultCatalog = catalogs[DEFAULT_LOCALE] ?? {};

export function getMessages(locale: SupportedLocale): MessageCatalog {
    if (locale === DEFAULT_LOCALE) {
        return defaultCatalog;
    }

    return deepMerge(defaultCatalog, catalogs[locale] ?? {});
}

export function createTranslator(messages: MessageCatalog) {
    return (key: string, params?: Record<string, string | number>): string => {
        const raw = getByPath(messages, key);

        if (typeof raw !== "string") {
            return key;
        }

        if (!params) {
            return raw;
        }

        return raw.replace(/\{\{(\w+)\}\}/g, (_, token) => {
            const value = params[token];
            return value === undefined ? "" : String(value);
        });
    };
}

export function getSiteI18nForData(
    data: Pick<WeddingData, "site" | "locale">,
    options?: {
        requestedLocale?: string;
        pathname?: string;
        basePath?: string;
    },
) {
    const pathLocale =
        options?.requestedLocale ??
        (options?.pathname
            ? getLocaleFromPathname(options.pathname, options.basePath)
            : undefined);

    const locale = resolveSiteLocale(data, pathLocale);
    const messages = getMessages(locale);
    const t = createTranslator(messages);

    return {
        locale,
        messages,
        t,
    };
}

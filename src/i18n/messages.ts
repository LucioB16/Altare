import type { WeddingData } from "../data/weddingData";
import {
    DEFAULT_LOCALE,
    getLocaleFromPathname,
    resolveSiteLocale,
    type SupportedLocale,
} from "./config";

import enRaw from "./locales/en.json?raw";
import esRaw from "./locales/es.json?raw";

export type MessageCatalog = Record<string, unknown>;

const enCatalog = JSON.parse(enRaw) as MessageCatalog;
const esCatalog = JSON.parse(esRaw) as MessageCatalog;

const catalogs: Record<SupportedLocale, MessageCatalog> = {
    en: enCatalog,
    es: esCatalog,
};

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

export function getMessages(locale: SupportedLocale): MessageCatalog {
    if (locale === DEFAULT_LOCALE) {
        return catalogs.en;
    }

    return deepMerge(catalogs.en, catalogs[locale]);
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
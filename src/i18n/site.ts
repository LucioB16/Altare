import { getWeddingData } from "../data/weddingData";
import { getSiteI18nForData } from "./messages";

export function getSiteI18n(url: URL, requestedLocale?: string) {
    const data = getWeddingData();

    return getSiteI18nForData(data, {
        requestedLocale,
        pathname: url.pathname,
        basePath: import.meta.env.BASE_URL,
    });
}
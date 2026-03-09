import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    if (context.url.pathname.endsWith("/config-builder/")) {
        return context.redirect(`${context.url.pathname}index.html${context.url.search}`, 302);
    }

    return next();
});
import themesRaw from "./themes.json?raw";
import type { ThemeDefinition } from "./theme.types";

export const DEFAULT_THEME_ID = "jardin-clasico";

export const themes = JSON.parse(themesRaw) as ThemeDefinition[];

const themeById = new Map(themes.map((theme) => [theme.id, theme]));

export type ThemeCssVarMap = Record<string, string>;

function buildThemeCssVarMap(theme: ThemeDefinition): ThemeCssVarMap {
    const { fonts, colors } = theme;

    return {
        "--font-sans": fonts.sans,
        "--font-display": fonts.display,
        "--color-primary": colors.primary,
        "--color-secondary": colors.secondary,
        "--color-accent": colors.accent,
        "--color-background": colors.background,
        "--color-surface": colors.surface,
        "--color-surface-alt": colors.surfaceAlt,
        "--color-surface-soft": colors.surfaceSoft,
        "--color-text": colors.text,
        "--color-text-dark": colors.text,
        "--color-text-light": colors.secondary,
        "--color-text-muted": colors.textMuted,
        "--color-text-subtle": colors.textSubtle,
        "--color-border": colors.border,
        "--color-overlay-from": colors.overlayFrom,
        "--color-overlay-to": colors.overlayTo,
        "--color-spotify": colors.spotifyButtonBg,
        "--color-spotify-text": colors.spotifyButtonText,
        "--ornament-1": colors.ornament1,
        "--ornament-2": colors.ornament2,
        "--ornament-3": colors.ornament3,
        "--ornament-footer": colors.ornamentFooter,
    };
}

export function resolveTheme(themeId?: string): ThemeDefinition {
    if (themeId && themeById.has(themeId)) {
        return themeById.get(themeId) as ThemeDefinition;
    }

    return (themeById.get(DEFAULT_THEME_ID) || themes[0]) as ThemeDefinition;
}

export function toThemeCssVarMap(theme: ThemeDefinition): ThemeCssVarMap {
    return buildThemeCssVarMap(theme);
}

export function toThemeCssVars(theme: ThemeDefinition): string {
    const vars = buildThemeCssVarMap(theme);

    return Object.entries(vars)
        .map(([key, value]) => `${key}: ${value}`)
        .join("; ");
}

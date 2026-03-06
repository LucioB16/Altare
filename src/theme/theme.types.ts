export interface ThemeFonts {
    sans: string;
    display: string;
}

export interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    surfaceSoft: string;
    text: string;
    textMuted: string;
    textSubtle: string;
    border: string;
    overlayFrom: string;
    overlayTo: string;
    spotifyButtonBg: string;
    spotifyButtonText: string;
    ornament1: string;
    ornament2: string;
    ornament3: string;
    ornamentFooter: string;
}

export interface ThemeDefinition {
    id: string;
    name: string;
    concept: string;
    keywords: string[];
    fonts: ThemeFonts;
    colors: ThemeColors;
}

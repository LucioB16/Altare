(function () {
    const STORAGE_KEY = "altare_builder_theme_id";
    const FALLBACK_THEME_ID = "jardin-clasico";

    const fallbackTheme = {
        id: FALLBACK_THEME_ID,
        name: "Jardin Clasico",
        concept: "Elegancia botanica suave y romantica",
        keywords: ["botanico", "elegante", "organico", "clasico"],
        fonts: {
            display: '"Playfair Display", serif',
            sans: '"Inter", system-ui, sans-serif',
        },
        colors: {
            primary: "#5A7156",
            secondary: "#F4F1E1",
            accent: "#BDA588",
            background: "#FAF9F6",
            surface: "#FFFFFF",
            surfaceAlt: "#EEF0EC",
            surfaceSoft: "#F8F7F4",
            text: "#333333",
            textMuted: "#58615A",
            textSubtle: "#6C746F",
            border: "#D8DED1",
            overlayFrom: "rgba(255,255,255,0.30)",
            overlayTo: "rgba(255,255,255,0.60)",
            spotifyButtonBg: "#1DB954",
            spotifyButtonText: "#102D26",
            ornament1: "#6B8E6B",
            ornament2: "#7A9E7A",
            ornament3: "#8BAE8B",
            ornamentFooter: "#FFFFFF",
        },
    };

    let themes = [fallbackTheme];
    let selectedThemeId = FALLBACK_THEME_ID;
    let onThemeChange = null;

    const getThemeById = (id) => themes.find((theme) => theme.id === id);

    const getSelectedTheme = () => getThemeById(selectedThemeId) || fallbackTheme;

    const cssVarsFromTheme = (theme) => ({
        "--font-sans": theme.fonts.sans,
        "--font-display": theme.fonts.display,
        "--primary": theme.colors.primary,
        "--primary-light": theme.colors.accent,
        "--accent": theme.colors.accent,
        "--bg": theme.colors.background,
        "--bg-alt": theme.colors.surfaceAlt,
        "--surface": theme.colors.surface,
        "--surface-soft": theme.colors.surfaceSoft,
        "--text": theme.colors.text,
        "--text-light": theme.colors.textMuted,
        "--text-subtle": theme.colors.textSubtle,
        "--border": theme.colors.border,
        "--hero-overlay-from": theme.colors.overlayFrom,
        "--hero-overlay-to": theme.colors.overlayTo,
        "--spotify": theme.colors.spotifyButtonBg,
        "--spotify-text": theme.colors.spotifyButtonText,
        "--ornament-1": theme.colors.ornament1,
        "--ornament-2": theme.colors.ornament2,
        "--ornament-3": theme.colors.ornament3,
        "--ornament-footer": theme.colors.ornamentFooter,
    });

    const applyThemeToDocument = (theme) => {
        const vars = cssVarsFromTheme(theme);
        const root = document.documentElement;

        Object.entries(vars).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        root.dataset.builderTheme = theme.id;
    };

    const themeCard = (theme, isSelected) => {
        const swatches = [
            theme.colors.background,
            theme.colors.primary,
            theme.colors.accent,
            theme.colors.surfaceAlt,
            theme.colors.ornament2,
        ];

        const cardStyle = [
            ["--card-bg", theme.colors.background],
            ["--card-surface", theme.colors.surface],
            ["--card-surface-alt", theme.colors.surfaceAlt],
            ["--card-text", theme.colors.text],
            ["--card-muted", theme.colors.textMuted],
            ["--card-primary", theme.colors.primary],
            ["--card-border", theme.colors.border],
            ["--card-accent", theme.colors.accent],
            ["--card-ornament-1", theme.colors.ornament1],
            ["--card-ornament-2", theme.colors.ornament2],
            ["--card-ornament-3", theme.colors.ornament3],
            ["--card-font-display", theme.fonts.display],
            ["--card-font-sans", theme.fonts.sans],
        ]
            .map(([key, value]) => key + ":" + value)
            .join(";");

        return `
            <button type="button" class="theme-card${isSelected ? " is-active" : ""}" data-theme-id="${theme.id}" style='${cardStyle}'>
                <div class="theme-card__header">
                    <div>
                        <p class="theme-card__name">${theme.name}</p>
                        <p class="theme-card__concept">${theme.concept}</p>
                    </div>
                    ${isSelected ? '<span class="theme-card__status" aria-hidden="true">Seleccionado</span>' : ""}
                </div>

                <div class="theme-card__preview">
                    <p class="theme-card__preview-kicker">Preview</p>
                    <p class="theme-card__preview-title">Julieta & Lucio</p>
                    <p class="theme-card__preview-meta">21 JUN 2026 / CORDOBA</p>
                    <div class="theme-card__preview-ornament">
                        <span></span><span></span><span></span>
                    </div>
                </div>

                <div class="theme-card__swatches">
                    ${swatches
                        .map((color) => '<span class="theme-swatch" style="background:' + color + '"></span>')
                        .join("")}
                </div>
                <div class="theme-card__sample">
                    <span class="theme-card__sample-display">Aa</span>
                    <span class="theme-card__sample-sans">${theme.keywords.slice(0, 2).join(" / ")}</span>
                </div>
            </button>
        `;
    };

    const renderThemeGrid = () => {
        const grid = document.getElementById("themeGrid");
        if (!grid) {
            return;
        }

        grid.innerHTML = themes
            .map((theme) => themeCard(theme, theme.id === selectedThemeId))
            .join("");

        grid.querySelectorAll(".theme-card").forEach((button) => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-theme-id");
                if (!id) {
                    return;
                }
                selectTheme(id);
            });
        });
    };

    const renderThemeMeta = () => {
        const meta = document.getElementById("themeMeta");
        if (!meta) {
            return;
        }

        const theme = getSelectedTheme();
        meta.innerHTML = `
            <p class="theme-meta__name">Tema seleccionado: ${theme.name}</p>
            <p class="theme-meta__keywords">${theme.keywords.join(" / ")}</p>
        `;
    };

    const selectTheme = (themeId) => {
        if (!getThemeById(themeId)) {
            return;
        }

        selectedThemeId = themeId;
        localStorage.setItem(STORAGE_KEY, selectedThemeId);

        const theme = getSelectedTheme();
        applyThemeToDocument(theme);
        renderThemeGrid();
        renderThemeMeta();

        if (typeof onThemeChange === "function") {
            onThemeChange(theme);
        }
    };

    const loadThemes = async () => {
        try {
            const response = await fetch("./themes.json", { cache: "no-store" });
            if (!response.ok) {
                throw new Error(`Failed to fetch themes: ${response.status}`);
            }

            const parsed = await response.json();
            if (Array.isArray(parsed) && parsed.length > 0) {
                themes = parsed;
            }
        } catch (error) {
            console.warn("Using fallback theme catalog", error);
            themes = [fallbackTheme];
        }
    };

    const init = async ({ defaultThemeId, onChange } = {}) => {
        onThemeChange = onChange;
        await loadThemes();

        const localThemeId = localStorage.getItem(STORAGE_KEY);
        const requested = localThemeId || defaultThemeId || FALLBACK_THEME_ID;
        selectedThemeId = getThemeById(requested)
            ? requested
            : getThemeById(FALLBACK_THEME_ID)
              ? FALLBACK_THEME_ID
              : themes[0].id;

        applyThemeToDocument(getSelectedTheme());
        renderThemeGrid();
        renderThemeMeta();

        if (typeof onThemeChange === "function") {
            onThemeChange(getSelectedTheme());
        }
    };

    window.ThemeRuntime = {
        init,
        selectTheme,
        getThemes: () => themes,
        getSelectedThemeId: () => selectedThemeId,
        getSelectedTheme,
        applyThemeToDocument,
    };
})();

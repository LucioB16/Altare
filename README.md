# Altare - Wedding Invitation Template

English | [Español](./README.es.md)

Elegant static wedding invitation template powered by Astro + Tailwind v4, with a visual config builder.

- Live demo: https://luciob16.github.io/Altare/
- Config builder: https://luciob16.github.io/Altare/config-builder/

## Quick Start

1. Click **Use this template** on GitHub and create your own repository.
2. In your repo, go to **Settings -> Pages** and select **GitHub Actions**.
3. Open the Config Builder, choose your site language (`en` or `es`), and complete all steps.
4. Replace `src/data/wedding.yml` with the generated YAML and upload your images:
   - `public/media/hero/`
   - `public/media/couple/`
   - `public/media/og/`

Your site will be published at:
`https://YOUR_USER.github.io/YOUR_REPO/`

## Language Behavior

- The builder saves the selected language as `site.language` in `wedding.yml`.
- Supported languages: `en` (default) and `es`.
- Backward compatibility:
  - If `site.language` is missing, the app falls back to `locale.language`.
  - If both are missing/unknown, it falls back to `en`.
- User repos generated from this template are **monolingual by default** (only the selected language is published).
- Template/demo repos can expose extra demo locales via `demo.locales` (for example `['es']`).

## Theming

- Theme is configured with `theme.id`.
- The builder and site share the same theme catalog.
- If `theme.id` is missing, it falls back to `jardin-clasico`.

## Local Development

```bash
bun install
bun run dev
```

Useful commands:

- `bun run sync:themes` - sync themes/fonts/locales to the builder assets
- `bun run dev` - run Astro dev server
- `bun run build` - production build to `dist/`
- `bun run preview` - preview the production build

## Project Structure

```text
src/
  components/
  data/
    wedding.yml
    weddingData.ts
  i18n/
    config.ts
    messages.ts
    site.ts
    locales/
  layouts/
  pages/
  theme/
public/
  media/
  config-builder/
scripts/
  sync-themes.mjs
```

## License and Credits

Based on [SaidYes](https://github.com/roicort/saidyes) by [@roicort](https://github.com/roicort), licensed under AGPL-3.0.

This fork keeps the same AGPL-3.0 license. See [LICENSE](./LICENSE).
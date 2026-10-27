# Altare

**An invitation that feels like yours—without building a website from scratch.**

Altare is an [Astro](https://astro.build/) wedding-invitation template with five visual themes, configurable sections, multiple languages and a visual Config Builder that exports your `wedding.yml`. Publish your invitation through GitHub Pages.

**[Explore the live invitation](https://luciob16.github.io/Altare/)** · **[Open the Config Builder](https://luciob16.github.io/Altare/config-builder/)** · **[Use this template](https://github.com/LucioB16/Altare/generate)**

English · [Español](./README.es.md)

| Personalize | Share | Celebrate |
| :-- | :-- | :-- |
| Choose a theme, language, photos and the sections you need. | Host on GitHub Pages and configure your social-sharing image. | Add ceremony information, RSVP, countdown, playlist and more. |

> [!TIP]
> Start with the [live demo](https://luciob16.github.io/Altare/) to explore the layout, then use the [Config Builder](https://luciob16.github.io/Altare/config-builder/) to prepare your own invitation.

## Create your invitation in four steps

### Step 1: Create your repository

Click **Use this template** and create your own GitHub repository.

[Use this template on GitHub](https://github.com/LucioB16/Altare/generate)

Important: your final invitation URL is based on your GitHub user + repo name.
Example: `https://mariaj.github.io/my-wedding/`

### Step 2: Enable GitHub Pages

1. Open **Settings -> Pages** in your repository.
2. In **Source**, choose **GitHub Actions**.

### Step 3: Configure your invitation

Use the visual Config Builder:

[Open the visual Config Builder](https://luciob16.github.io/Altare/config-builder/)

The Config Builder guides you step by step to configure:

- 👫 Couple names
- 🎭 Visual theme (5 themes with live preview)
- 📅 Dates and times with visual pickers + timezone
- ⛪ Religious ceremony, civil ceremony, and celebration (each with its own toggle)
- 📸 Hero and story photos (1-4 photos)
- 🖼️ WhatsApp/social sharing image (Open Graph)
- 🎁 Gifts and bank details (with hide/show option)
- 👔 Dress code (with configurable bride notice)
- ✉️ RSVP (deadline + optional link)
- 🎵 Spotify playlist (optional)
- 📱 Social media (optional)
- ℹ️ Useful info cards (you can keep one or add multiple)

At the end, it generates a `wedding.yml` file that you can download or copy.

### Step 4: Upload YAML and photos

Quick links (inside your repo):

- [Open `wedding.yml`](./src/data/wedding.yml)
- [Open hero folder (`public/media/hero/`)](./public/media/hero/)
- [Open story folder (`public/media/couple/`)](./public/media/couple/)
- [Open social image folder for WhatsApp/socials (`public/media/og/`)](./public/media/og/)

`wedding.yml`:

1. Open `wedding.yml`.
2. Click the pencil icon.
3. Replace content with your generated YAML.
4. Click **Commit changes**.
5. If direct commit is blocked by rules, choose **Create a new branch** and then **Create pull request**.

Photos:

1. Enter each folder (`hero`, `couple`, `og`).
2. Click **Add file** (top-right).
3. Choose **Upload files**.
4. Select your files and click **Commit changes**.

- `public/media/hero/` -> upload selected hero photo.
- `public/media/couple/` -> upload story photos with the exact selected filenames.
- `public/media/og/` -> upload share image (recommended 1200x630).

Tip: you can also drag files directly into an open GitHub folder.

Your site will be published at:
`https://YOUR_USER.github.io/YOUR_REPO/`

Your invitation URL is built using your GitHub username + repository name.
Example: if your username is `mariaj` and your repo is `my-wedding`, your URL will be `https://mariaj.github.io/my-wedding/`.

---

## What you can customize

- **Responsive** — Looks great on mobile, tablet, and desktop
- **Design** — Elegant typography, crafted SVG details, polished section flow
- **YAML configuration** — Everything is controlled from one YAML file
- **Serverless hosting** — Free deployment on GitHub Pages
- **Modular sections** — Enable or disable each section independently
- **Religious ceremony** — Optional section with the same structure as civil ceremony
- **Photo gallery** — 1 to 4 photos with automatic layout
- **Bank details** — Toggle on/off when needed
- **Countdown** — Real-time countdown update
- **Config Builder** — Visual tool to generate config without coding
- **Languages** — Builder-selected locale + `en` fallback + easy new locale onboarding

## Visual themes

- Shared token-based theme system for site and builder.
- Available themes:
  - `jardin-clasico` (default)
  - `marfil-editorial`
  - `botanica-nocturna`
  - `rosa-antiguo`
  - `galeria-moderna`
- `theme.id` is optional; fallback is `jardin-clasico`.
- Theme changes aesthetics only (colors, fonts, ornaments), without changing layout logic.

---

## Languages and localization

- The builder saves selected language as `site.language`.
- Supported locales are auto-discovered from `src/i18n/locales/*.json`.
- Default locale is `en`.
- Backward compatibility:
  - If `site.language` is missing, fallback is `locale.language`.
  - If both are missing/unknown, fallback is `en`.
- Generated user repos are monolingual by default.
- Demo repos can expose extra locale routes through `demo.locales`.

### Add a New Language (Quick)

1. Duplicate `src/i18n/locales/en.json` to `src/i18n/locales/<code>.json` (example: `fr.json`).
2. Translate keys and set `contentDefaults.locale.language` (example: `fr-FR`).
3. Run:

```bash
bun run sync:themes
bun run build
```

The builder locale selector and site locale resolution will pick the new locale automatically.

---

## Local development

```bash
bun install
bun run dev
```

### Commands

| Command | Action |
| :-- | :-- |
| `bun install` | Install dependencies |
| `bun run sync:themes` | Sync themes, fonts, and locales to builder assets |
| `bun run dev` | Start Astro dev server |
| `bun run build` | Build production output to `dist/` |
| `bun run preview` | Preview production build locally |
| `bun astro ...` | Run Astro CLI commands |

### Project Structure

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
  theme/
  layouts/
  pages/
  styles/
public/
  media/
    hero/
    couple/
    og/
  config-builder/
scripts/
  sync-themes.mjs
```

---

## Credits and license

This project is based on [**SaidYes**](https://github.com/roicort/saidyes) by [@roicort](https://github.com/roicort), distributed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

This fork keeps the same license. You can use, modify, and distribute this code as long as you:

- Keep attribution to the original project
- Distribute your modifications under the same AGPL-3.0 license

See [LICENSE](./LICENSE) for more details.

Made with ❤️ so your special day feels even more special.

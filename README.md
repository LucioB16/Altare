# Altare - Wedding Invitation Template

English | [Espanol](./README.es.md)

Elegant, static wedding invitation template powered by Astro + Tailwind v4, with a visual config builder.

[![Use this template](https://img.shields.io/badge/Use_this_template-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucioB16/Altare/generate)
[![Live demo](https://img.shields.io/badge/Live_demo-5A7156?style=for-the-badge)](https://luciob16.github.io/Altare/)
[![Config Builder](https://img.shields.io/badge/Config_Builder-3C5A7A?style=for-the-badge)](https://luciob16.github.io/Altare/config-builder/)

---

## Create Your Invitation in 4 Steps

### Step 1: Create your repository

Click **Use this template** and create your own GitHub repository.

Important: your final invitation URL is based on your GitHub user + repo name.
Example: `https://mariaj.github.io/my-wedding/`

### Step 2: Enable GitHub Pages

1. Open **Settings -> Pages** in your repository.
2. In **Source**, choose **GitHub Actions**.

### Step 3: Configure your invitation

Use the visual Config Builder:

[![Open Config Builder](https://img.shields.io/badge/Open_Config_Builder-5A7156?style=for-the-badge)](https://luciob16.github.io/Altare/config-builder/)

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

## Language and i18n

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

## Features

- 📱 **Responsive** — Looks great on mobile, tablet, and desktop
- 🎨 **Premium design** — Elegant typography, crafted SVG details, polished section flow
- ⚙️ **100% configurable** — Everything is controlled from one YAML file
- 🔒 **Serverless** — Free deployment on GitHub Pages
- 🧩 **Modular sections** — Enable or disable each section independently
- ⛪ **Religious ceremony** — Optional section with the same structure as civil ceremony
- 🖼️ **Smart gallery** — 1 to 4 photos with automatic layout
- 🏦 **Bank details** — Toggle on/off when needed
- 📊 **Countdown** — Real-time countdown update
- 🔧 **Config Builder** — Visual tool to generate config without coding
- 🌐 **Scalable i18n** — Builder-selected locale + `en` fallback + easy new locale onboarding

## Theming

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

## Local Development

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

## Credits and License

This project is based on [**SaidYes**](https://github.com/roicort/saidyes) by [@roicort](https://github.com/roicort), distributed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

This fork keeps the same license. You can use, modify, and distribute this code as long as you:

- Keep attribution to the original project
- Distribute your modifications under the same AGPL-3.0 license

See [LICENSE](./LICENSE) for more details.

Made with ❤️ so your special day feels even more special.

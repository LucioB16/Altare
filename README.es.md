# Altare - Template de Invitacion de Boda

[English](./README.md) | Español

Template estatico de invitacion de boda con Astro + Tailwind v4 y builder visual de configuracion.

- Demo en vivo: https://luciob16.github.io/Altare/
- Config Builder: https://luciob16.github.io/Altare/config-builder/

## Inicio Rapido

1. Hace click en **Use this template** en GitHub y crea tu repositorio.
2. En tu repo, entra a **Settings -> Pages** y selecciona **GitHub Actions**.
3. Abri el Config Builder, elegi idioma del sitio (`en` o `es`) y completa los pasos.
4. Reemplaza `src/data/wedding.yml` con el YAML generado y subi tus imagenes a:
   - `public/media/hero/`
   - `public/media/couple/`
   - `public/media/og/`

Tu sitio se publica en:
`https://TU_USUARIO.github.io/TU_REPO/`

## Comportamiento de Idioma

- El builder guarda el idioma elegido como `site.language` en `wedding.yml`.
- Idiomas soportados: `en` (default) y `es`.
- Compatibilidad hacia atras:
  - Si falta `site.language`, se usa `locale.language`.
  - Si faltan ambos o son invalidos, se usa `en`.
- Los repos de usuarios generados desde el template son **monolingues por defecto** (solo se publica el idioma elegido).
- El repo template/demo puede exponer locales extra con `demo.locales` (por ejemplo `['es']`).

## Theming

- El tema se configura con `theme.id`.
- Builder y sitio comparten el mismo catalogo de temas.
- Si falta `theme.id`, se usa `jardin-clasico`.

## Desarrollo Local

```bash
bun install
bun run dev
```

Comandos utiles:

- `bun run sync:themes` - sincroniza temas/fuentes/locales al builder
- `bun run dev` - servidor de desarrollo Astro
- `bun run build` - build de produccion en `dist/`
- `bun run preview` - previsualiza el build de produccion

## Estructura del Proyecto

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

## Licencia y Creditos

Basado en [SaidYes](https://github.com/roicort/saidyes) por [@roicort](https://github.com/roicort), bajo licencia AGPL-3.0.

Este fork mantiene la misma licencia AGPL-3.0. Ver [LICENSE](./LICENSE).
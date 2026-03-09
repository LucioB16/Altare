# Altare - Template de Invitación de Boda

[English](./README.md) | Español

Invitación digital de boda, elegante y 100% configurable, desplegable en minutos con GitHub Pages.

[![Usar este template](https://img.shields.io/badge/Usar_este_template-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucioB16/Altare/generate)
[![Ver demo en vivo](https://img.shields.io/badge/Ver_demo_en_vivo-5A7156?style=for-the-badge)](https://luciob16.github.io/Altare/)
[![Abrir Config Builder](https://img.shields.io/badge/Abrir_Config_Builder-3C5A7A?style=for-the-badge)](https://luciob16.github.io/Altare/config-builder/)

---

## Crear tu invitación en 4 pasos

### Paso 1: Crear tu repositorio

Hacé click en **Use this template** y creá tu repo en GitHub.

Importante: la URL final depende de tu usuario + nombre del repo.
Ejemplo: `https://mariaj.github.io/mi-boda/`

### Paso 2: Activar GitHub Pages

1. Entrá a **Settings -> Pages** en tu repo.
2. En **Source**, elegí **GitHub Actions**.

### Paso 3: Configurar tu invitación

Usá el Config Builder visual:

[![Abrir Config Builder](https://img.shields.io/badge/Abrir_Config_Builder-5A7156?style=for-the-badge)](https://luciob16.github.io/Altare/config-builder/)

El Config Builder te guía paso a paso para configurar:

- 👫 Nombres de la pareja
- 🎭 Tema visual (5 temas con preview en vivo)
- 📅 Fechas y horarios con selectores visuales + zona horaria
- ⛪ Ceremonia religiosa, civil y fiesta (cada una con toggle)
- 📸 Fotos de portada e historia (1-4 fotos)
- 🖼️ Imagen para compartir en WhatsApp/redes (Open Graph)
- 🎁 Regalos y datos bancarios (con opción de ocultar)
- 👔 Código de vestimenta (con aviso de novia configurable)
- ✉️ Confirmación de asistencia (fecha límite + link opcional)
- 🎵 Playlist de Spotify (opcional)
- 📱 Redes sociales (opcional)
- ℹ️ Cards de información útil (podés dejar solo una o agregar varias)

Al final genera un archivo `wedding.yml` que descargás o copiás.

### Paso 4: Subir YAML y fotos

Accesos rápidos (desde tu repo):

- [Abrir `wedding.yml`](./src/data/wedding.yml)
- [Abrir carpeta portada (`public/media/hero/`)](./public/media/hero/)
- [Abrir carpeta historia (`public/media/couple/`)](./public/media/couple/)
- [Abrir carpeta de imagen para WhatsApp/redes (`public/media/og/`)](./public/media/og/)

`wedding.yml`:

1. Abrí `wedding.yml`.
2. Hacé click en el lápiz.
3. Reemplazá el contenido con tu YAML generado.
4. Hacé click en **Commit changes**.
5. Si GitHub no te deja commit directo por reglas, elegí **Create a new branch** y después **Create pull request**.

Fotos:

1. Entrá a cada carpeta (`hero`, `couple`, `og`).
2. Hacé click en **Add file** (arriba a la derecha).
3. Elegí **Upload files**.
4. Seleccioná los archivos y hacé **Commit changes**.

- `public/media/hero/` -> subí la foto de portada seleccionada.
- `public/media/couple/` -> subí las fotos de historia con los mismos nombres que seleccionaste.
- `public/media/og/` -> subí la imagen para WhatsApp/redes (recomendado 1200x630).

Tip: también podés arrastrar archivos directamente en la carpeta abierta de GitHub.

Tu sitio se publicará en:
`https://TU_USUARIO.github.io/TU_REPO/`

La URL de tu invitación se forma con tu usuario de GitHub + el nombre del repositorio.
Ejemplo: si tu usuario es `mariaj` y tu repo es `mi-boda`, la URL será `https://mariaj.github.io/mi-boda/`.

---

## Idiomas e i18n

- El builder guarda el idioma elegido en `site.language`.
- Los locales soportados se detectan automáticamente desde `src/i18n/locales/*.json`.
- El idioma por defecto es `en`.
- Compatibilidad hacia atrás:
  - Si falta `site.language`, se usa `locale.language`.
  - Si faltan ambos o son inválidos, se usa `en`.
- Repos de usuarios generados desde este template: monolingües por defecto.
- Repos demo/template: pueden exponer rutas extra con `demo.locales`.

### Agregar un idioma nuevo (rápido)

1. Duplicá `src/i18n/locales/en.json` como `src/i18n/locales/<codigo>.json` (ejemplo: `fr.json`).
2. Traducí las claves y definí `contentDefaults.locale.language` (ejemplo: `fr-FR`).
3. Ejecutá:

```bash
bun run sync:themes
bun run build
```

El selector de idioma del builder y la resolución del sitio tomarán ese locale automáticamente.

---

## Features

- 📱 **Responsive** — Se ve perfecto en celular, tablet y desktop
- 🎨 **Diseño premium** — Tipografía elegante, SVGs artesanales, scroll cuidado entre secciones
- ⚙️ **100% configurable** — Todo se edita desde un solo archivo YAML
- 🔒 **Sin servidor** — Se despliega gratis en GitHub Pages
- 🧩 **Secciones modulares** — Activá o desactivá cualquier sección
- ⛪ **Ceremonia religiosa** — Sección opcional, idéntica en formato a la civil
- 🖼️ **Galería inteligente** — 1 a 4 fotos con layout automático
- 🏦 **Datos bancarios** — Con toggle para mostrar/ocultar
- 📊 **Cuenta regresiva** — Actualización en tiempo real
- 🔧 **Config Builder** — Herramienta visual para generar configuración sin código
- 🌐 **i18n escalable** — Idioma elegido por builder + fallback a `en` + alta simple de nuevos locales

## Novedades de theming

- Sistema de temas por tokens compartidos entre sitio y builder.
- Temas disponibles:
  - `jardin-clasico` (default)
  - `marfil-editorial`
  - `botanica-nocturna`
  - `rosa-antiguo`
  - `galeria-moderna`
- `theme.id` es opcional; fallback: `jardin-clasico`.
- El tema solo cambia estética (colores, tipografías, ornamentos), no el layout.

---

## Desarrollo local

```bash
bun install
bun run dev
```

### Comandos

| Comando | Acción |
| :-- | :-- |
| `bun install` | Instala dependencias |
| `bun run sync:themes` | Sincroniza temas, fuentes y locales al builder |
| `bun run dev` | Levanta servidor de desarrollo Astro |
| `bun run build` | Genera build de producción en `dist/` |
| `bun run preview` | Previsualiza build de producción |
| `bun astro ...` | Ejecuta comandos del CLI de Astro |

### Estructura del proyecto

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

## Créditos y licencia

Este proyecto está basado en [**SaidYes**](https://github.com/roicort/saidyes) por [@roicort](https://github.com/roicort), distribuido bajo la licencia **GNU Affero General Public License v3.0 (AGPL-3.0)**.

Este fork mantiene la misma licencia. Podés usar, modificar y distribuir este código siempre que:

- Mantengas la atribución al proyecto original
- Distribuyas tus modificaciones bajo la misma licencia AGPL-3.0

Ver [LICENSE](./LICENSE) para más detalles.

Hecho con ❤️ para que tu día especial sea aún más especial.
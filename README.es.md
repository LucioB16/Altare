# Altare - Template de Invitacion de Boda

[English](./README.md) | Espanol

Invitacion digital de boda, elegante y 100% configurable, desplegable en minutos con GitHub Pages.

[![Usar este template](https://img.shields.io/badge/Usar_este_template-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucioB16/Altare/generate)
[![Ver demo en vivo](https://img.shields.io/badge/Ver_demo_en_vivo-5A7156?style=for-the-badge)](https://luciob16.github.io/Altare/)
[![Abrir Config Builder](https://img.shields.io/badge/Abrir_Config_Builder-3C5A7A?style=for-the-badge)](https://luciob16.github.io/Altare/config-builder/)

---

## Crear tu invitacion en 4 pasos

### Paso 1: Crear tu repositorio

Hace click en **Use this template** y crea tu repo en GitHub.

Importante: la URL final depende de tu usuario + nombre del repo.
Ejemplo: `https://mariaj.github.io/mi-boda/`

### Paso 2: Activar GitHub Pages

1. Entra a **Settings -> Pages** en tu repo.
2. En **Source**, elige **GitHub Actions**.

### Paso 3: Configurar tu invitacion

Usa el Config Builder visual:

[![Abrir Config Builder](https://img.shields.io/badge/Abrir_Config_Builder-5A7156?style=for-the-badge)](https://luciob16.github.io/Altare/config-builder/)

El Config Builder te guia paso a paso para configurar:

- 👫 Nombres de la pareja
- 🎭 Tema visual (5 temas con preview en vivo)
- 📅 Fechas y horarios con selectores visuales + zona horaria
- ⛪ Ceremonia religiosa, civil y fiesta (cada una con toggle)
- 📸 Fotos de portada e historia (1-4 fotos)
- 🖼️ Imagen para compartir en WhatsApp/redes (Open Graph)
- 🎁 Regalos y datos bancarios (con opcion de ocultar)
- 👔 Codigo de vestimenta (con aviso de novia configurable)
- ✉️ Confirmacion de asistencia (fecha limite + link opcional)
- 🎵 Playlist de Spotify (opcional)
- 📱 Redes sociales (opcional)
- ℹ️ Cards de informacion util (podes dejar solo una o agregar varias)

Al final genera un archivo `wedding.yml` que descargas o copias.

### Paso 4: Subir YAML y fotos

Accesos rapidos (desde tu repo):

- [Abrir `wedding.yml`](./src/data/wedding.yml)
- [Abrir carpeta portada (`public/media/hero/`)](./public/media/hero/)
- [Abrir carpeta historia (`public/media/couple/`)](./public/media/couple/)
- [Abrir carpeta de imagen para WhatsApp/redes (`public/media/og/`)](./public/media/og/)

`wedding.yml`:

1. Abre `wedding.yml`.
2. Haz click en el lapiz.
3. Reemplaza el contenido con tu YAML generado.
4. Haz click en **Commit changes**.
5. Si GitHub no te deja commit directo por reglas, elige **Create a new branch** y despues **Create pull request**.

Fotos:

1. Entra a cada carpeta (`hero`, `couple`, `og`).
2. Haz click en **Add file** (arriba a la derecha).
3. Elige **Upload files**.
4. Selecciona los archivos y haz **Commit changes**.

- `public/media/hero/` -> sube la foto de portada seleccionada.
- `public/media/couple/` -> sube las fotos de historia con los mismos nombres que seleccionaste.
- `public/media/og/` -> sube la imagen para WhatsApp/redes (recomendado 1200x630).

Tip: tambien puedes arrastrar archivos directamente en la carpeta abierta de GitHub.

Tu sitio se publicara en:
`https://TU_USUARIO.github.io/TU_REPO/`

La URL de tu invitacion se forma con tu usuario de GitHub + el nombre del repositorio.
Ejemplo: si tu usuario es `mariaj` y tu repo es `mi-boda`, la URL sera `https://mariaj.github.io/mi-boda/`.

---

## Idiomas e i18n

- El builder guarda el idioma elegido en `site.language`.
- Los locales soportados se detectan automaticamente desde `src/i18n/locales/*.json`.
- El idioma por defecto es `en`.
- Compatibilidad hacia atras:
  - Si falta `site.language`, se usa `locale.language`.
  - Si faltan ambos o son invalidos, se usa `en`.
- Repos de usuarios generados desde este template: monolingue por defecto.
- Repos demo/template: pueden exponer rutas extra con `demo.locales`.

### Agregar un idioma nuevo (rapido)

1. Duplica `src/i18n/locales/en.json` como `src/i18n/locales/<codigo>.json` (ejemplo: `fr.json`).
2. Traduce las claves y define `contentDefaults.locale.language` (ejemplo: `fr-FR`).
3. Ejecuta:

```bash
bun run sync:themes
bun run build
```

El selector de idioma del builder y la resolucion del sitio tomaran ese locale automaticamente.

---

## Features

- 📱 **Responsive** — Se ve perfecto en celular, tablet y desktop
- 🎨 **Diseno premium** — Tipografia elegante, SVGs artesanales, scroll cuidado entre secciones
- ⚙️ **100% configurable** — Todo se edita desde un solo archivo YAML
- 🔒 **Sin servidor** — Se despliega gratis en GitHub Pages
- 🧩 **Secciones modulares** — Activa o desactiva cualquier seccion
- ⛪ **Ceremonia religiosa** — Seccion opcional, identica en formato a la civil
- 🖼️ **Galeria inteligente** — 1 a 4 fotos con layout automatico
- 🏦 **Datos bancarios** — Con toggle para mostrar/ocultar
- 📊 **Cuenta regresiva** — Actualizacion en tiempo real
- 🔧 **Config Builder** — Herramienta visual para generar configuracion sin codigo
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
- El tema solo cambia estetica (colores, tipografias, ornamentos), no el layout.

---

## Desarrollo local

```bash
bun install
bun run dev
```

### Comandos

| Comando | Accion |
| :-- | :-- |
| `bun install` | Instala dependencias |
| `bun run sync:themes` | Sincroniza temas, fuentes y locales al builder |
| `bun run dev` | Levanta servidor de desarrollo Astro |
| `bun run build` | Genera build de produccion en `dist/` |
| `bun run preview` | Previsualiza build de produccion |
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

## Creditos y licencia

Este proyecto esta basado en [**SaidYes**](https://github.com/roicort/saidyes) por [@roicort](https://github.com/roicort), distribuido bajo la licencia **GNU Affero General Public License v3.0 (AGPL-3.0)**.

Este fork mantiene la misma licencia. Puedes usar, modificar y distribuir este codigo siempre que:

- Mantengas la atribucion al proyecto original
- Distribuyas tus modificaciones bajo la misma licencia AGPL-3.0

Ver [LICENSE](./LICENSE) para mas detalles.

Hecho con ❤️ para que tu dia especial sea aun mas especial.

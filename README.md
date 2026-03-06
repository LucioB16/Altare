# 💍 Invitación de Boda — Template

Una invitación de boda digital, elegante y 100% configurable. Desplegá tu propio sitio en minutos, sin saber programar.

🔗 **[Ver demo en vivo](https://luciob16.github.io/Altare/)**

---

## 🚀 Crear tu invitación en 4 pasos

### Paso 1: Crear tu repositorio

Hacé click en el botón de abajo para crear una copia del template en tu cuenta de GitHub:

[![Use this template](https://img.shields.io/badge/Usar_este_template-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucioB16/Altare/generate)

> 💡 **Nota importante:** El nombre que le pongas al repositorio determinará el link (URL) final de tu invitación. 
> Por ejemplo, si tu usuario de GitHub es `mariaj` y elegís el nombre `mi-boda` para el repo, tu invitación quedará en: `https://mariaj.github.io/mi-boda/`
> 
> Elegí un nombre corto y sin espacios como `mi-boda` o `boda-maria-y-juan`. Dejá el repo como **público**.

### Paso 2: Activar GitHub Pages

1. Andá a **Settings** → **Pages** en tu repositorio
2. En **"Source"**, elegí **"GitHub Actions"**

### Paso 3: Configurar tu invitación

Usá nuestro **Config Builder** para generar tu archivo de configuración sin tocar código:

[![Abrir Config Builder](https://img.shields.io/badge/🔧_Abrir_Config_Builder-5A7156?style=for-the-badge&logoColor=white)](https://luciob16.github.io/Altare/config-builder/)

El Config Builder te guía paso a paso para configurar:
- 👫 Nombres de la pareja
- 🎭 Tema visual (5 temas con preview en vivo)
- 📅 Fechas y horarios con selectores visuales + zona horaria
- ⛪ Ceremonia religiosa, civil y fiesta (cada una con toggle)
- 📸 Fotos de portada e historia (1–4 fotos)
- 🖼️ Imagen para compartir en WhatsApp/redes (Open Graph)
- 🎁 Regalos y datos bancarios (con opción de ocultar)
- 👔 Código de vestimenta (con aviso de novia configurable)
- ✉️ Confirmación de asistencia (fecha límite + link opcional)
- 🎵 Playlist de Spotify (opcional)
- 📱 Redes sociales (opcional)
- ℹ️ Cards de información útil (podés dejar solo una o agregar varias)

Al final genera un archivo `wedding.yml` que descargás o copiás.

### Paso 4: Subir la configuración y las fotos

> 💡 **Importante:** cuando creás tu repo con **Use this template**, este mismo instructivo también queda en tu repo.

**Accesos rápidos (hacé click desde tu repo):**
- [Abrir `wedding.yml`](./src/data/wedding.yml)
- [Abrir carpeta de portada (`public/media/hero/`)](./public/media/hero/)
- [Abrir carpeta de historia (`public/media/couple/`)](./public/media/couple/)
- [Abrir carpeta de imagen para WhatsApp/redes (`public/media/og/`)](./public/media/og/)

**Configuración (`wedding.yml`):**
1. Entrá al link de `wedding.yml` de arriba.
2. Hacé click en el **lápiz ✏️**.
3. Reemplazá el contenido con el YAML que te generó el Config Builder.
4. Hacé click en **Commit changes**.
5. Si GitHub no te deja commit directo por reglas, elegí **Create a new branch** y después **Create pull request**.

**Fotos (arrastrá los archivos en GitHub):**
- `public/media/hero/` → subí la foto de portada que seleccionaste en el Config Builder
- `public/media/couple/` → subí las fotos de historia con los mismos nombres que seleccionaste en el Config Builder
- `public/media/og/` → subí la imagen para WhatsApp/redes que seleccionaste en el Config Builder (1200×630px recomendado)

> 💡 **Tip:** Podés arrastrar archivos directamente a la carpeta en GitHub para subirlos sin necesidad de usar Git.

¡Listo! En unos minutos tu sitio estará disponible en `https://TU_USUARIO.github.io/TU_REPO/`

> 💡 La URL de tu invitación se forma con tu **nombre de usuario de GitHub** + el **nombre del repositorio** que elegiste al hacer click en "Use this template". Por ejemplo, si tu usuario es `mariaj` y nombraste tu repo `mi-boda`, tu invitación va a estar en `https://mariaj.github.io/mi-boda/`.

---

## ✨ Features

- 📱 **Responsive** — Se ve perfecto en celular, tablet y desktop
- 🎨 **Diseño premium** — Tipografía elegante, SVGs artesanales, scroll-snap entre secciones
- ⚙️ **100% configurable** — Todo se edita desde un solo archivo YAML
- 🔒 **Sin servidor** — Se despliega gratis en GitHub Pages
- 🧩 **Secciones modulares** — Activá o desactivá cualquier sección
- ⛪ **Ceremonia religiosa** — Sección opcional, idéntica en formato a la civil
- 🖼️ **Galería inteligente** — 1 a 4 fotos con layout automático
- 🏦 **Datos bancarios** — Con toggle para mostrar/ocultar
- 📊 **Cuenta regresiva** — Actualización en tiempo real
- 🔧 **Config Builder** — Herramienta visual para generar la configuración sin código


## Novedades de theming

- Nuevo sistema de temas visuales por tokens compartidos entre sitio y builder.
- Temas disponibles: `jardin-clasico` (default), `marfil-editorial`, `botanica-nocturna`, `rosa-antiguo`, `galeria-moderna`.
- Selector de tema en el Config Builder con cards de preview (paleta, tipografia y look visual).
- `theme.id` en `wedding.yml` es opcional; si falta se usa `jardin-clasico` para mantener compatibilidad.
- El cambio de tema solo modifica estetica (colores, tipografias, iconografia y ornamentos), sin cambiar layout ni orden de secciones.
- Demo con switcher de tema en vivo solo cuando `demo.themeSwitcher: true`.
- Preview de OG/WhatsApp con dominio generico (`tuusuario.github.io/tu-repo`) para evitar referencias hardcodeadas.
- File pickers del builder reforzados para Hero, Story y OG/WhatsApp.

---

## 🛠️ Desarrollo local

Si sos desarrollador y querés personalizar el diseño:

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
bun install
bun dev
```

### 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Instala las dependencias                         |
| `bun run sync:themes`     | Sincroniza catalogo de temas y fuentes del builder |
| `bun dev`                 | Inicia el servidor de desarrollo en `localhost:4321` |
| `bun build`               | Genera el sitio de producción en `./dist/`       |
| `bun preview`             | Previsualiza el build localmente antes de deployar |
| `bun astro ...`           | Ejecuta comandos del CLI como `astro add`, `astro check` |
| `bun astro -- --help`     | Muestra la ayuda del CLI de Astro                |

### Estructura del proyecto

```
src/
├── components/      # Componentes Astro (Hero, Ceremony, RSVP, etc.)
├── data/
│   ├── wedding.yml  # ← Tu configuración va acá
│   └── weddingData.ts
├── theme/           # Catalogo de temas y tokens
├── layouts/
├── pages/
└── styles/
public/
├── media/
│   ├── hero/        # Foto de bienvenida (nombre configurable)
│   ├── couple/      # Fotos historia (01.jpg, 02.jpg, ...)
│   └── og/          # Imagen para redes sociales (nombre configurable)
└── config-builder/  # Herramienta de configuracion visual (+ themes.json/theme-fonts.css)
scripts/
└── sync-themes.mjs  # Sincroniza temas entre app y builder
```

---

## 📜 Créditos y licencia

Este proyecto está basado en [**SaidYes**](https://github.com/roicort/saidyes) por [@roicort](https://github.com/roicort), distribuido bajo la licencia **GNU Affero General Public License v3.0 (AGPL-3.0)**.

Este fork mantiene la misma licencia. Podés usar, modificar y distribuir este código siempre que:
- Mantengas la atribución al proyecto original
- Distribuyas tus modificaciones bajo la misma licencia AGPL-3.0

📄 Ver [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ para que tu día especial sea aún más especial.

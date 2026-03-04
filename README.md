# 💍 Invitación de Boda — Template

Una invitación de boda digital, elegante y 100% configurable. Desplegá tu propio sitio en minutos, sin saber programar.

![Preview](https://img.shields.io/badge/demo-ver%20ejemplo-5A7156?style=for-the-badge)

---

## 🚀 Crear tu invitación en 3 pasos

### Paso 1: Crear tu repositorio

Hacé click en el botón de abajo para crear una copia del template en tu cuenta de GitHub:

[![Use this template](https://img.shields.io/badge/Usar_este_template-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucioB16/juli-y-lucio-wedding/generate)

> Elegí un nombre como `mi-boda` o `boda-maria-y-juan`. Dejá el repo como **público**.

### Paso 2: Configurar tu invitación

Usá nuestro **Config Builder** para generar tu archivo de configuración sin tocar código:

[![Abrir Config Builder](https://img.shields.io/badge/🔧_Abrir_Config_Builder-5A7156?style=for-the-badge&logoColor=white)](https://luciob16.github.io/juli-y-lucio-wedding/config-builder/)

El Config Builder te guía paso a paso para configurar:
- 👫 Nombres de la pareja
- 📸 Fotos de portada e historia (1–4 fotos)
- 📅 Fecha, hora y lugar de ceremonia y fiesta
- 🎁 Regalos y datos bancarios
- 👔 Código de vestimenta
- ✉️ Confirmación de asistencia (RSVP)
- 🎵 Link a playlist de Spotify
- 📱 Redes sociales
- ℹ️ Cards de información útil

Al final genera un archivo `wedding.yml` que descargás o copiás.

### Paso 3: Subir la configuración a tu repo

1. Andá a tu repositorio en GitHub
2. Navegá a la carpeta `src/data/`
3. Hacé click en `wedding.yml`
4. Click en el ícono de **lápiz ✏️** (arriba a la derecha)
5. Seleccioná todo (Ctrl+A) y pegá el contenido generado
6. Click en **"Commit changes"** → **"Commit directly to main"** → **"Commit changes"**

### Paso 3b: Subir tus fotos

1. Navegá a `public/media/hero/` y subí tu foto de portada como `bg.jpg`
2. Navegá a `public/media/couple/` y subí tus fotos (hasta 4) como `01.jpg`, `02.jpg`, etc.

> 💡 **Tip:** Podés arrastrar archivos directamente a la carpeta en GitHub para subirlos.

### Paso 4: Activar GitHub Pages

1. Andá a **Settings** → **Pages** en tu repositorio
2. En **"Source"**, elegí **"GitHub Actions"**
3. ¡Listo! En unos minutos tu sitio estará disponible en `https://TU_USUARIO.github.io/TU_REPO/`

---

## ✨ Features

- 📱 **Responsive** — Se ve perfecto en celular, tablet y desktop
- 🎨 **Diseño premium** — Tipografía elegante, SVGs artesanales, scroll-snap entre secciones
- ⚙️ **100% configurable** — Todo se edita desde un solo archivo YAML
- 🔒 **Sin servidor** — Se despliega gratis en GitHub Pages
- 🧩 **Secciones modulares** — Activá o desactivá cualquier sección desde la config
- 🖼️ **Galería inteligente** — 1 a 4 fotos con layout automático
- 🏦 **Datos bancarios** — Con toggle para mostrar/ocultar
- 📊 **Cuenta regresiva** — Actualización en tiempo real hasta el gran día

---

## 🛠️ Desarrollo local

Si sos desarrollador y querés personalizar el diseño:

```bash
# Clonar
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build
```

### Estructura del proyecto

```
src/
├── components/      # Componentes Astro (Hero, Story, RSVP, etc.)
├── data/
│   ├── wedding.yml  # ← Tu configuración va acá
│   └── weddingData.ts
├── layouts/
├── pages/
└── styles/
public/
├── media/
│   ├── hero/        # Foto de portada (bg.jpg)
│   ├── couple/      # Fotos historia (01.jpg, 02.jpg, ...)
│   └── og/          # Imagen Open Graph
└── config-builder/  # Herramienta de configuración
```

---

## 📄 Licencia

MIT — Usalo como quieras, incluso para fines comerciales.

---

Hecho con ❤️ para que tu día especial sea aún más especial.

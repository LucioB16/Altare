# Juli y Lucio - Invitación de Boda

Template configurable de invitación de boda creado en **Astro** y **TailwindCSS**. Soporta despliegue totalmente estático en GitHub Pages manteniendo la configuración desde un solo archivo.

🔗 **[Ver Demo de la Invitación](https://LucioB16.github.io/juli-y-lucio-wedding/)**

## Configuración

Toda la personalización del contenido, las imágenes, la habilitación de módulos (regalos, rsvp, historia, calendario, etc.) y la metadata de la invitación se controlan centralizadamente desde el archivo `src/data/wedding.yml`.

Los assets (imágenes y recursos) deben ser alojados en la carpeta `public/media/` para que funcionen las URL expuestas en la configuración.

## Comandos locales

Para desarrollar y ver tu proyecto funcionando en tu propia PC:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala todas las dependencias requeridas        |
| `npm run dev`             | Inicia el servidor de desarrollo local           |
| `npm run build`           | Compila la versión de producción estática (SSG)  |

Este repositorio ha sido configurado especialmente para tener soporte total en **GitHub Pages** de manera nativa sin usar runtime de servidor, incluyendo redirecciones y carga de CDN.

# PoolOps

Landing de Astro para presentar Ábaco a empresas de mantenimiento de piscinas bajo la marca PoolOps. Genera HTML estático sin JavaScript de cliente.

## Desarrollo

Requiere Node.js 24 y pnpm. Ejecuta `pnpm install --frozen-lockfile` y `pnpm dev` para trabajar en local. Para validar la página generada, ejecuta `pnpm build` y `pnpm test`.

La marca, los metadatos y el destino de los CTA se definen en `src/config/site.ts`. El diseño compartido está en `src/layouts` y la página sectorial en `src/pages`.

## Publicar en Vercel

1. Importa el repositorio `doscientos-es/poolops` y selecciona su raíz como directorio del proyecto.
2. La configuración de `vercel.json` utiliza el preset **Astro**, instala y compila con pnpm 12.18.0 y publica `dist`. Selecciona Node.js 24 en Vercel. No se necesitan variables de entorno.
3. En los ajustes del proyecto, añade `poolops.doscientos.es` y configura en tu proveedor de DNS los registros que indique Vercel. Espera a que el dominio y el certificado HTTPS estén activos.
4. Comprueba la página y sus CTA, que apuntan a `https://abaco.doscientos.es`.

El canonical y el sitemap apuntan a `https://poolops.doscientos.es/`; configura ese dominio antes de considerar la publicación definitiva.

Las fotografías se cargan desde Unsplash y la tipografía Plus Jakarta Sans desde Google Fonts, con una alternativa del sistema. La ilustración del presupuesto es un ejemplo, no una captura de la aplicación. Las funciones de campo están en desarrollo y deben validarse antes de anunciar su disponibilidad.
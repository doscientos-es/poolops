# PoolOps

Landing estática independiente para presentar Ábaco a empresas de mantenimiento de piscinas. No necesita dependencias ni compilación.

Para verla en local, inicia un servidor HTTP en esta carpeta, por ejemplo `python -m http.server 8000`, y abre `http://localhost:8000`.

## Publicar en Vercel

1. Importa el repositorio `doscientos-es/poolops` y selecciona su raíz como directorio del proyecto.
2. La configuración de `vercel.json` usa el preset **Other**, sirve la raíz y no ejecuta compilación. No se necesitan variables de entorno.
3. En los ajustes del proyecto, añade `poolops.doscientos.es` y configura en tu proveedor de DNS los registros que indique Vercel. Espera a que el dominio y el certificado HTTPS estén activos.
4. Comprueba la página y sus CTA, que apuntan a `https://abaco.doscientos.es`.

El canonical y el sitemap apuntan a `https://poolops.doscientos.es/`; configura ese dominio antes de considerar la publicación definitiva.

Las fotografías se cargan desde Unsplash y la página usa tipografías del sistema. La ilustración del presupuesto es un ejemplo, no una captura de la aplicación. Las funciones de campo están en desarrollo y deben validarse antes de anunciar su disponibilidad.
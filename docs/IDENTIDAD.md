# Fede · Identidad visual

> Fuente de verdad de la marca del portfolio. El sistema sale de la identidad de Carrera Tracker (`~/projects/carrera-tracker/docs/brand/IDENTIDAD.md`): la misma estructura, con la firma en azul en lugar de violeta.

Oscura, sobria y cercana. El color de marca aparece como firma, no como relleno. Sin degradados, brillos, ruido ni animaciones en loop.

## Voz
- Voseo rioplatense, frases cortas, primero la acción.
- Sin mayúsculas sostenidas ni signos de exclamación.
- Se conservan los guiños de foca y océano ("sumergido en código", "inmersiones", "volver a la superficie"), siempre medidos.

## Monograma
Una "f" minúscula sobre la grilla de 64, con trazo uniforme de 8 y extremos rectos.

- **Asta con cabeza en arco:** `M24 58 V22 A12 12 0 0 1 48 22`, en blanco o `currentColor`.
- **Travesaño:** `M12 32 H38`, en `brand-blue`. Es la única pieza con color, la firma.
- **Lockup:** monograma más "Fede" en Geist SemiBold, tracking −2 % e interlineado 0,98, en una línea.
- **Dentro de un cuadrado:** se centra ópticamente y baja unas 2 unidades de la grilla, porque la cabeza pesa arriba.
- **No hacer:** no agregar trazos, glow, sombras ni escala en hover, y no cambiar el color del travesaño.

| Archivo | Uso |
| --- | --- |
| `public/brand/monograma.svg` | Principal: blanco con travesaño `#5B9DFF`, sin fondo |
| `public/brand/monograma-claro.svg` | Sobre claro: `#0A0A0B` con travesaño `#123E8C` |
| `public/brand/monograma-blanco.svg`, `-negro.svg` | Monocromo |
| `public/brand/icono.svg` | Cuadrado sobre `#0A0A0B` (perfil y redes) |
| `public/favicon.svg` | Sin fondo, alterna con `prefers-color-scheme` |
| `public/apple-touch-icon.png`, `icono-512.png` | Se generan con `node scripts/generate-icons.mjs` |
| `src/components/Monograma.jsx` | SVG en línea para la interfaz |

## Color
Tokens en `src/index.css` (`@theme`). En los componentes se usan clases de Tailwind, nunca hex sueltos.

| Token | Valor | Uso |
| --- | --- | --- |
| `brand-black` | `#0A0A0B` | Fondo, `theme-color` |
| `brand-navy` | `#123E8C` | Botón principal y bloques plenos (blanco encima: 10:1) |
| `brand-blue` | `#5B9DFF` | Acento sobre negro: links, palabra destacada, foco (7.3:1) |
| `brand-sky` | `#A9C8FF` | Solo decorativo |
| `brand-slate` | `#7A8599` | Solo decorativo |

- Los neutros (`background`, `foreground`, `muted`, `border`) son los del modo oscuro de Carrera Tracker. Solo hay tema oscuro.
- Una acción principal por pantalla, en `brand-navy`. `brand-blue` nunca va de fondo con texto blanco.

## Tipografía
Geist (400 para textos, 600 para títulos) y Geist Mono para años, índices, tags y metadatos. Las dos están self-hosted en `public/fonts/`.

## Elementos gráficos
Salen del monograma: el **arco** de la cabeza y la **barra** del travesaño, más bloques planos con radio `lg`/`xl`. Los arcos alternados forman olas (`franja-arcos.svg`). Están en `public/brand/elementos/`.

- Van al costado del texto, nunca debajo, con opacidad del 40 al 50 %, y se ocultan debajo de `lg` (`BrandArt.jsx`).
- Como máximo cinco colores por pieza, y sin degradados.

## Proyectos de terceros
Cada proyecto se muestra con su propia marca, tal como es. Por ejemplo, la tarjeta de Carrera Tracker usa su `logo.svg` oficial con `h-8 w-auto`. Es el único lugar donde aparece violeta.

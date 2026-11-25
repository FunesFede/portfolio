// Genera los íconos PNG del monograma a partir de public/brand/icono.svg.
// Uso: node scripts/generate-icons.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";

const svg = readFileSync(new URL("../public/brand/icono.svg", import.meta.url), "utf8");

for (const [size, file] of [
	[180, "apple-touch-icon.png"],
	[512, "icono-512.png"],
]) {
	const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
	writeFileSync(new URL(`../public/${file}`, import.meta.url), png);
	console.log(`public/${file} (${size}px)`);
}

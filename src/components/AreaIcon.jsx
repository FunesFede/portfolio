/**
 * Íconos de área armados con las piezas del monograma: arcos y barras.
 * Grilla de 32, trazo 4, extremos rectos. Una sola pieza en brand-blue.
 */
const ICONOS = {
	// Paréntesis: dos arcos enfrentados
	Programación: (
		<>
			<path d='M12 4 A12 12 0 0 0 12 28' stroke='currentColor' />
			<path d='M20 4 A12 12 0 0 1 20 28' className='stroke-brand-blue' />
		</>
	),
	// Barras verticales de distinta altura
	"Datos y modelos": (
		<>
			<path d='M6 28 V16' stroke='currentColor' />
			<path d='M16 28 V4' className='stroke-brand-blue' />
			<path d='M26 28 V12' stroke='currentColor' />
		</>
	),
	// Capas apiladas
	"Sistemas e infraestructura": (
		<>
			<path d='M4 6 H28' stroke='currentColor' />
			<path d='M4 16 H28' className='stroke-brand-blue' />
			<path d='M4 26 H28' stroke='currentColor' />
		</>
	),
	// Arco sobre una base: estructura
	"Ingeniería de software": (
		<>
			<path d='M6 20 A10 10 0 0 1 26 20' stroke='currentColor' />
			<path d='M2 26 H30' className='stroke-brand-blue' />
		</>
	),
	// Ciclo iterativo: arco de tres cuartos y una barra en la apertura
	"Modelado y metodologías": (
		<>
			<path d='M16 6 A10 10 0 1 1 6 16' stroke='currentColor' />
			<path d='M2 6 H16' className='stroke-brand-blue' />
		</>
	),
};

export default function AreaIcon({ area, className = "" }) {
	const icono = ICONOS[area];
	if (!icono) return null;
	return (
		<svg viewBox='0 0 32 32' fill='none' strokeWidth='4' aria-hidden='true' className={className}>
			{icono}
		</svg>
	);
}

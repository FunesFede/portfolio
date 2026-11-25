/**
 * Monograma "f": asta con cabeza en arco (currentColor) y travesaño de firma en brand-blue.
 * Grilla de 64, trazo 8, extremos rectos. Reglas en docs/IDENTIDAD.md.
 */
export default function Monograma({ className = "", title }) {
	return (
		<svg
			viewBox='12 6 40 52'
			fill='none'
			strokeWidth='8'
			className={className}
			role={title ? "img" : undefined}
			aria-hidden={title ? undefined : "true"}
			aria-label={title}
		>
			<path d='M24 58 V22 A12 12 0 0 1 48 22' stroke='currentColor' />
			<path d='M12 32 H38' className='stroke-brand-blue' />
		</svg>
	);
}

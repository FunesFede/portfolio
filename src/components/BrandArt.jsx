/**
 * Composición decorativa de public/brand. Va al costado del texto o en un margen libre,
 * nunca debajo de un texto. Oculta debajo de lg salvo que se pase `mobile`.
 */
export default function BrandArt({ src, className = "", mobile = false }) {
	return (
		<div aria-hidden='true' className={`pointer-events-none select-none ${mobile ? "" : "hidden lg:block"} ${className}`}>
			<img src={`/brand/${src}.svg`} alt='' className='w-full' draggable='false' loading='lazy' />
		</div>
	);
}

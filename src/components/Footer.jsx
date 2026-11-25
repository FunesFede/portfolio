import Monograma from "./Monograma";
import BrandArt from "./BrandArt";
import { NAV_ITEMS, SOCIAL_LINKS } from "../data/links";

const FOOTER_LINKS = [...NAV_ITEMS, ...SOCIAL_LINKS.map((link) => ({ ...link, external: true }))];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-border py-12'>
			<div className='mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_auto]'>
				<div>
					<div className='flex items-center gap-3'>
						<Monograma className='h-10 w-auto text-foreground' />
						<span className='text-3xl font-semibold leading-[0.98] tracking-[-0.02em]'>Fede</span>
					</div>
					<p className='mt-4 max-w-sm text-sm text-pretty text-muted-foreground'>“Si fuera una foca, no estaría escribiendo esto. Ojalá ser una foca.”</p>
				</div>

				<nav aria-label='Enlaces del pie de página'>
					<ul className='flex flex-wrap gap-x-6'>
						{FOOTER_LINKS.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className='inline-flex min-h-11 items-center font-mono text-xs text-muted-foreground transition-colors hover:text-brand-blue'
									{...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex items-center justify-between gap-6 border-t border-border pt-6 md:col-span-2'>
					<p className='font-mono text-xs text-muted-foreground'>© {year} Fede · ffede.ar</p>
					<BrandArt src='elementos/franja-arcos' className='w-32 opacity-40' />
				</div>
			</div>
		</footer>
	);
}

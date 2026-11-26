import { useEffect, useState } from "react";
import Monograma from "./Monograma";
import DownloadIcon from "./DownloadIcon";
import { CV_URL, NAV_ITEMS } from "../data/links";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	const solid = scrolled || menuOpen;

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-50 h-16 border-b transition-colors ${
					solid ? "border-border bg-brand-black/85 backdrop-blur-md" : "border-transparent"
				}`}
			>
				<div className='mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6'>
					<a href='#inicio' className='flex items-center gap-2.5 rounded-md' aria-label='Fede, ir al inicio'>
						<Monograma className='h-7 w-auto text-foreground' />
						<span className='text-xl font-semibold leading-[0.98] tracking-[-0.02em]'>Fede</span>
					</a>

					<nav className='hidden md:block' aria-label='Navegación principal'>
						<ul className='flex items-center gap-8'>
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className='py-1 text-sm text-muted-foreground underline-offset-8 decoration-brand-blue decoration-2 transition-colors hover:text-foreground hover:underline'
									>
										{item.label}
									</a>
								</li>
							))}
							<li>
								<a
									href={CV_URL}
									className='inline-flex h-9 items-center gap-2 rounded-lg px-3.5 text-sm font-semibold ring-1 ring-inset ring-border transition-colors hover:ring-brand-blue hover:text-brand-blue'
								>
									<DownloadIcon />
									Descargar CV
								</a>
							</li>
						</ul>
					</nav>

					<button
						type='button'
						className='flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg ring-1 ring-inset ring-border md:hidden'
						aria-expanded={menuOpen}
						aria-controls='mobile-nav'
						aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
						<span className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
					</button>
				</div>
			</header>

			<nav id='mobile-nav' aria-label='Navegación móvil' hidden={!menuOpen} className='fixed inset-x-0 top-16 bottom-0 z-50 bg-brand-black md:hidden'>
				<ul className='flex flex-col gap-2 px-4 pt-8'>
					{NAV_ITEMS.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								onClick={() => setMenuOpen(false)}
								className='block rounded-lg py-3 text-3xl font-semibold tracking-[-0.02em] transition-colors hover:text-brand-blue'
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className='px-4 pt-6'>
					<a
						href={CV_URL}
						onClick={() => setMenuOpen(false)}
						className='flex min-h-12 items-center justify-center gap-2 rounded-lg text-base font-semibold ring-1 ring-inset ring-border transition-colors hover:ring-brand-blue hover:text-brand-blue'
					>
						<DownloadIcon />
						Descargar CV
					</a>
				</div>
			</nav>
		</>
	);
}

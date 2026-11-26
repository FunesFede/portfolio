import { CV_URL, EMAIL, SOCIAL_LINKS } from "../data/links";

const ICONS = {
	GitHub: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
	LinkedIn:
		"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

export default function Contact() {
	return (
		<section id='contacto' aria-labelledby='contact-title' className='scroll-mt-16 border-t border-border py-24 md:py-32'>
			<div className='mx-auto w-full max-w-6xl px-4 sm:px-6'>
				<div className='max-w-2xl'>
					<p className='mb-4 text-sm font-medium text-brand-blue'>Escribime</p>
					<h2 id='contact-title' className='text-4xl font-semibold tracking-[-0.02em] sm:text-5xl'>
						Contacto
					</h2>
					<p className='mt-5 text-lg/8 text-pretty text-muted-foreground'>
						¿Tenés una idea, un proyecto o una duda? Mandame un mail y te respondo cuando vuelva a la superficie.
					</p>

					<a
						href={`mailto:${EMAIL}`}
						className='mt-10 flex items-center gap-4 rounded-xl bg-card p-5 ring-1 ring-border transition-shadow hover:ring-brand-blue sm:inline-flex sm:px-7'
					>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden='true' className='shrink-0 text-brand-blue'>
							<rect x='2' y='4' width='20' height='16' rx='2' />
							<path d='M2 7l10 7 10-7' />
						</svg>
						<span className='min-w-0 break-all text-lg font-semibold tracking-[-0.01em] sm:text-2xl'>{EMAIL}</span>
					</a>

					<ul className='mt-10 flex flex-wrap gap-6 border-t border-border pt-8'>
						{SOCIAL_LINKS.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand-blue'
								>
									<svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
										<path d={ICONS[link.label]} />
									</svg>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<a
								href={CV_URL}
								className='inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand-blue'
							>
								<svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden='true'>
									<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
									<path d='M14 2v6h6M12 11v7M9 15l3 3 3-3' />
								</svg>
								CV
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

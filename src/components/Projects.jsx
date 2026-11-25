import BrandArt from "./BrandArt";
import { PROJECTS } from "../data/projects";

export default function Projects() {
	return (
		<section id='proyectos' aria-labelledby='projects-title' className='scroll-mt-16 border-t border-border py-24 md:py-32'>
			<div className='mx-auto w-full max-w-6xl px-4 sm:px-6'>
				<div className='flex items-start justify-between gap-12'>
					<header className='max-w-2xl'>
						<p className='mb-4 text-sm font-medium text-brand-blue'>Lo que vengo construyendo</p>
						<h2 id='projects-title' className='text-4xl font-semibold tracking-[-0.02em] sm:text-5xl'>
							Proyectos
						</h2>
						<p className='mt-5 text-lg/8 text-pretty text-muted-foreground'>
							Mis inmersiones más recientes: proyectos personales y herramientas que buscan ayudar a otros.
						</p>
					</header>
					<BrandArt src='elementos/composicion-horizontal' className='w-full max-w-xs shrink-0 opacity-40' />
				</div>

				<ul className='mt-14 grid gap-5 md:grid-cols-2'>
					{PROJECTS.map((project, index) => (
						<li key={project.id}>
							<article className='flex h-full flex-col rounded-xl bg-card p-6 ring-1 ring-border transition-shadow focus-within:ring-brand-blue hover:ring-brand-blue md:p-8'>
								<div className='flex items-center justify-between font-mono text-xs text-muted-foreground'>
									<span>{project.year}</span>
									<span aria-hidden='true'>{String(index + 1).padStart(2, "0")}</span>
								</div>

								<h3 className='mt-6'>
									{project.logo ? (
										<img
											src={project.logo.src}
											alt={project.title}
											width={project.logo.width}
											height={project.logo.height}
											className='h-8 w-auto'
											draggable='false'
										/>
									) : (
										<span className='text-2xl font-semibold tracking-[-0.02em]'>{project.title}</span>
									)}
								</h3>

								<p className='mt-5 flex-1 text-base/7 text-pretty text-foreground/80'>{project.description}</p>

								<ul className='mt-6 flex flex-wrap gap-2' aria-label='Tecnologías'>
									{project.tags.map((tag) => (
										<li key={tag} className='rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground'>
											{tag}
										</li>
									))}
								</ul>

								<a
									href={project.link}
									target='_blank'
									rel='noopener'
									className='group mt-8 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-brand-blue'
								>
									Ver {project.title}
									<svg width='16' height='16' viewBox='0 0 16 16' fill='none' aria-hidden='true' className='transition-transform group-hover:translate-x-0.5'>
										<path d='M3 8h10M9 4l4 4-4 4' stroke='currentColor' strokeWidth='1.5' />
									</svg>
								</a>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

import AreaIcon from "./AreaIcon";
import BrandArt from "./BrandArt";
import { FORMACION, TECNOLOGIAS } from "../data/skills";

export default function Skills() {
	return (
		<section id='habilidades' aria-labelledby='skills-title' className='scroll-mt-16 border-t border-border py-24 md:py-32'>
			<div className='mx-auto w-full max-w-6xl px-4 sm:px-6'>
				<div className='flex items-start justify-between gap-12'>
					<header className='max-w-2xl'>
						<p className='mb-4 text-sm font-medium text-brand-blue'>Equipo de buceo</p>
						<h2 id='skills-title' className='text-4xl font-semibold tracking-[-0.02em] sm:text-5xl'>
							Habilidades
						</h2>
						<p className='mt-5 text-lg/8 text-pretty text-muted-foreground'>
							Lo que uso todos los días, algunos aprendidos por mi cuenta, otros gracias a la facultad y mi carrera: Ingeniería en Sistemas de Información en la UTN
							FRC, cursando 4.º año.
						</p>
					</header>
					<BrandArt src='elementos/composicion-habilidades' className='w-full max-w-xs shrink-0 opacity-40' />
				</div>

				<div className='mt-14 grid gap-12 lg:grid-cols-2'>
					<div>
						<h3 className='text-xl font-semibold tracking-[-0.01em]'>Tecnologías</h3>
						<dl className='mt-6 space-y-6'>
							{TECNOLOGIAS.map(({ grupo, items }) => (
								<div key={grupo}>
									<dt className='text-sm text-muted-foreground'>{grupo}</dt>
									<dd className='mt-2.5'>
										<ul className='flex flex-wrap gap-2'>
											{items.map((item) => (
												<li
													key={item}
													className='rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-foreground/85 transition-colors hover:bg-brand-navy hover:text-white'
												>
													{item}
												</li>
											))}
										</ul>
									</dd>
								</div>
							))}
						</dl>
					</div>

					<div>
						<h3 className='text-xl font-semibold tracking-[-0.01em]'>Formación</h3>
						<ul className='mt-6 grid gap-4'>
							{FORMACION.map(({ area, frase, habilidades }) => (
								<li key={area} className='rounded-xl bg-card p-6 ring-1 ring-border'>
									<div className='flex items-center gap-3'>
										<AreaIcon area={area} className='size-6 shrink-0 text-foreground/70' />
										<h4 className='font-semibold'>{area}</h4>
									</div>
									<p className='mt-1 text-sm text-muted-foreground'>{frase}</p>
									<ul className='mt-4 space-y-1.5 text-sm/6 text-pretty text-foreground/85'>
										{habilidades.map((habilidad) => (
											<li key={habilidad} className='flex gap-2.5'>
												<span aria-hidden='true' className='mt-2.5 h-0.5 w-2 shrink-0 bg-brand-blue' />
												{habilidad}
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

import { useState } from "react";
import Button from "./Button";
import BrandArt from "./BrandArt";

export default function Hero() {
	const [avatarError, setAvatarError] = useState(false);

	return (
		<section id='inicio' aria-labelledby='hero-title' className='scroll-mt-16 pt-32 pb-24 md:pt-40 md:pb-32'>
			<div className='mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]'>
				<div>
					<p className='mb-5 text-sm font-medium text-brand-blue'>Sumergido en código</p>
					<h1 id='hero-title' className='text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl'>
						Hola, soy <span className='text-brand-blue'>Fede</span>
					</h1>
					<p className='mt-6 max-w-xl text-lg/8 text-pretty text-foreground/80 sm:text-xl/8'>
						Estudio Ingeniería en Sistemas de Información. Curioso como una foca, meticuloso como un ingeniero.
					</p>
					<p className='mt-4 max-w-xl text-base/7 text-pretty text-muted-foreground'>
						Construyo cosas que me gustan y herramientas que les hacen la vida más fácil a otros.
					</p>
					<div className='mt-10 flex flex-wrap gap-3'>
						<Button href='#proyectos'>Ver proyectos</Button>
						<Button href='#contacto' variant='outline'>
							Hablemos
						</Button>
					</div>
					<BrandArt src='elementos/franja-arcos' className='mt-16 w-56 opacity-50' />
				</div>

				<div className='flex items-end gap-6 justify-self-center lg:justify-self-end'>
					<div className='relative aspect-square w-64 overflow-hidden rounded-xl bg-muted ring-1 ring-border sm:w-72 lg:w-80'>
						{avatarError ? (
							<div className='grid size-full place-items-center text-7xl font-semibold text-brand-blue' aria-hidden='true'>
								F
							</div>
						) : (
							<img
								src='/avatar.jpg'
								alt='Retrato de Fede'
								width={320}
								height={320}
								draggable='false'
								className='size-full object-cover'
								onError={() => setAvatarError(true)}
							/>
						)}
					</div>
					<BrandArt src='elementos/arcos-columna' className='w-10 opacity-50' />
				</div>
			</div>
		</section>
	);
}

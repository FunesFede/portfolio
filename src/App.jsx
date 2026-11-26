import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<a
				href='#contenido'
				className='fixed left-4 -top-20 z-[60] rounded-lg bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition-[top] focus:top-4'
			>
				Saltar al contenido
			</a>
			<Header />
			<main id='contenido'>
				<Hero />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

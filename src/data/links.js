export const EMAIL = "hola@ffede.ar";

// El CV es un Google Doc: el link de exportación siempre baja la versión actual en PDF.
// En producción se usa /cv, que redirige ahí (public/_redirects). En dev no hay redirects.
const CV_EXPORT = "https://docs.google.com/document/d/1fHZGZ4jqMBuTTta-TSC5iU5EB20D_zFKbBb1TwOcoiw/export?format=pdf";
export const CV_URL = import.meta.env.DEV ? CV_EXPORT : "/cv";
export const SOCIAL_LINKS = [
	{ label: "GitHub", href: "https://github.com/FunesFede" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/ffede" },
];

export const NAV_ITEMS = [
	{ href: "#inicio", label: "Inicio" },
	{ href: "#proyectos", label: "Proyectos" },
	{ href: "#habilidades", label: "Habilidades" },
	{ href: "#contacto", label: "Contacto" },
];

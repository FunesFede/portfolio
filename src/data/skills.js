export const TECNOLOGIAS = [
	{ grupo: "Lenguajes", items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"] },
	{ grupo: "Web", items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"] },
	{ grupo: "Backend y datos", items: ["Node.js", "Firebase", "Microsoft SQL Server"] },
	{ grupo: "Herramientas", items: ["Git", "GitHub", "Linux", "Docker"] },
];

// Áreas de las materias obligatorias de 1.º a 4.º año (plan de Sistemas, UTN FRC).
// `materias` no se muestra por ahora.
export const FORMACION = [
	{
		area: "Programación",
		frase: "Pensar el problema antes de escribir la primera línea.",
		habilidades: ["Algoritmos y estructuras de datos", "Paradigmas: objetos, funcional y lógico", "Lenguajes formales y compiladores"],
		materias: ["Algoritmos y Estructuras de Datos", "Paradigmas de Programación", "Sintaxis y Semántica de los Lenguajes", "Desarrollo de Aplicaciones con Objetos"],
	},
	{
		area: "Datos y modelos",
		frase: "Ordenar la información y sacarle conclusiones.",
		habilidades: ["Modelado relacional y SQL", "Estadística", "Simulación", "Investigación operativa"],
		materias: ["Bases de Datos", "Probabilidad y Estadística", "Simulación", "Investigación Operativa"],
	},
	{
		area: "Sistemas e infraestructura",
		frase: "Entender qué pasa debajo del código.",
		habilidades: ["Sistemas operativos", "Redes y comunicación de datos", "Arquitectura de computadoras", "DevOps"],
		materias: ["Sistemas Operativos", "Redes de Datos", "Comunicación de Datos", "Arquitectura de Computadoras", "Desarrollo y Operaciones DevOps"],
	},
	{
		area: "Ingeniería de software",
		frase: "Diseñar sistemas que se puedan mantener y crecer.",
		habilidades: [
			"Ingeniería de requerimientos: relevamiento, casos de uso e historias de usuario",
			"Análisis y diseño de sistemas",
			"Patrones de diseño",
			"Calidad y testing",
			"Seguridad en el desarrollo",
		],
		materias: [
			"Análisis de Sistemas de Información",
			"Diseño de Sistemas de Información",
			"Arquitectura de Software",
			"Backend de Aplicaciones",
			"Ingeniería y Calidad de Software",
			"Seguridad en el Desarrollo de Software",
			"Experiencia e Interfaces de Usuario",
		],
	},
	{
		area: "Modelado y metodologías",
		frase: "Dibujar el sistema antes de construirlo y trabajar en equipo.",
		habilidades: [
			"UML: diagramas de clases, casos de uso, secuencia y actividades",
			"Modelo entidad-relación",
			"Metodologías ágiles: Scrum y Kanban",
		],
		materias: ["Análisis de Sistemas de Información", "Diseño de Sistemas de Información", "Bases de Datos", "Ingeniería y Calidad de Software"],
	},
];

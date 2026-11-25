const BASE =
	"inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

const VARIANTS = {
	// Acción principal: una por pantalla. brand-navy con texto blanco (10:1).
	default: "bg-brand-navy text-white hover:bg-brand-navy/85",
	outline: "ring-1 ring-inset ring-border text-foreground hover:ring-brand-blue",
};

export default function Button({ variant = "default", className = "", ...props }) {
	return <a className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props} />;
}

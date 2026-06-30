import WhatsAppButton from "./WhatsAppButton";

const ventajas = [
  {
    icon: "🛠️",
    titulo: "Fabricación propia",
    texto: "Diseños únicos hechos por nosotros, que no encuentras en otra tienda.",
  },
  {
    icon: "🎨",
    titulo: "A tu gusto",
    texto: "Tú eliges los colores, los materiales y las combinaciones.",
  },
  {
    icon: "📐",
    titulo: "A la medida",
    texto: "Los hacemos según el tamaño y la necesidad de tu perro.",
  },
];

export default function Custom() {
  return (
    <section id="fabricacion" className="bg-brand-orange py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-black uppercase tracking-widest">
            Lo que nos hace diferentes
          </span>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            Hechos a mano, <span className="text-brand-dark">a tu medida</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Aquí no vendemos los arneses genéricos de cualquier almacén. Alejandro{" "}
            <strong className="text-white">fabrica</strong> cada uno: son modelos
            propios y los hacemos <strong className="text-white">como tú
            quieras</strong>.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {ventajas.map((v) => (
            <div
              key={v.titulo}
              className="rounded-2xl bg-white/10 p-7 text-center ring-1 ring-white/20"
            >
              <div className="text-4xl">{v.icon}</div>
              <h3 className="mt-4 text-lg font-extrabold">{v.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {v.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton
            variant="light"
            className="!px-8 !py-4 text-base"
            mensaje="Hola Alejandro 👋 Quiero un arnés hecho a la medida de mi perro. Me gustaría ver opciones de colores y materiales."
          >
            Diseña el arnés de tu perro
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

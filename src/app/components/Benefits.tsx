const beneficios = [
  {
    icon: "💪",
    titulo: "Resistentes de verdad",
    texto:
      "Materiales y costuras que aguantan a los perros más fuertes: pastores, pitbulls, huskys y más.",
  },
  {
    icon: "🔒",
    titulo: "Sin escapes ni jalones",
    texto:
      "Ajuste seguro y cómodo que no se zafa. Tú controlas el paseo, no tu perro.",
  },
  {
    icon: "🎒",
    titulo: "Estilo y función",
    texto:
      "Modelos tácticos, chalecos, camuflaje y mochilas para llevar agua y premios en cada aventura.",
  },
  {
    icon: "🏠",
    titulo: "Atención personalizada",
    texto:
      "Te asesoramos por WhatsApp y te llevamos el producto a casa para que lo veas en tu perro.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
            Hecho para perros que{" "}
            <span className="text-brand-red">no se rinden</span>
          </h2>
          <p className="mt-4 text-lg text-brand-dark/70">
            No es un arnés cualquiera. Es el equipo que tu mejor amigo necesita
            para cada salida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/15 text-3xl">
                {b.icon}
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-brand-dark">
                {b.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
                {b.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

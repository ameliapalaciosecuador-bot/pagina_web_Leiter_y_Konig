import Image from "next/image";

/*
  El PRIMER testimonio es REAL (Amelia Palacios y su boxer Cleopatra).
  Los otros dos son EJEMPLOS de muestra: reemplazar por testimonios
  reales de clientes de Hernán (pídele capturas de chats) antes de publicar.
*/
const testimonios = [
  {
    nombre: "Amelia Palacios",
    perro: "Cleopatra, boxer atigrada",
    img: "/images/cleopatra.jpg",
    texto:
      "La atención de Hernán fue la mejor de todas. Llegó a mi casa con arneses de todas las tallas, colores y telas para probárselos a mi boxer Cleopatra hasta encontrar el ideal. Incluso nos mostró un modelo con bolsillos que llevaba para otro cliente, y nos encantó tanto ese modelo que pedimos uno igual en otro color… ¡junto con otro arnés más!",
  },
  {
    nombre: "Cliente de ejemplo 2",
    perro: "(reemplazar)",
    img: "",
    texto:
      "Un buen testimonio menciona el problema que tenía y cómo el arnés lo resolvió (ej: 'mi perro ya no se escapa'). Pídele a Hernán una captura real.",
  },
  {
    nombre: "Cliente de ejemplo 3",
    perro: "(reemplazar)",
    img: "",
    texto:
      "Los testimonios reales generan mucha confianza y ayudan a vender. ¡Son uno de los elementos más importantes de la página!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Clientes felices
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
            Perros (y dueños){" "}
            <span className="text-brand-red">contentos</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonios.map((t) => (
            <figure
              key={t.nombre}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5"
            >
              <div className="text-2xl text-brand-orange">★★★★★</div>
              <blockquote className="mt-4 flex-1 text-brand-dark/80">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-brand-blue/15">
                  {t.img ? (
                    <Image
                      src={t.img}
                      alt={`Foto de ${t.perro}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xl">
                      🐶
                    </span>
                  )}
                </div>
                <div className="leading-tight">
                  <div className="font-extrabold text-brand-dark">
                    {t.nombre}
                  </div>
                  <div className="text-sm text-brand-dark/60">
                    Dueña de {t.perro}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

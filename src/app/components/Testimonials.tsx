import Image from "next/image";

/*
  Solo testimonios REALES de clientes.
  Para agregar uno nuevo (cuando Hernán los envíe), copia un objeto de la lista
  y llena los datos. Si tienes foto del perro, ponla en public/images y escribe
  la ruta en "img". Si no hay foto, deja img: "" y se mostrará un emoji.
  (Cuando haya 2 o más, cambiar el contenedor a un grid de varias columnas.)
*/
const testimonios = [
  {
    nombre: "Amelia Palacios",
    perro: "Cleopatra, boxer atigrada",
    img: "/images/cleopatra.jpg",
    texto:
      "La atención de Hernán fue la mejor de todas. Llegó a mi casa con arneses de todas las tallas, colores y telas para probárselos a mi boxer Cleopatra hasta encontrar el ideal. Incluso nos mostró un modelo con bolsillos que llevaba para otro cliente, y nos encantó tanto ese modelo que pedimos uno igual en otro color… ¡junto con otro arnés más!",
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

        <div className="mx-auto mt-14 max-w-2xl">
          {testimonios.map((t) => (
            <figure
              key={t.nombre}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
            >
              <div className="text-2xl text-brand-orange">★★★★★</div>
              <blockquote className="mt-4 text-lg leading-relaxed text-brand-dark/80">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-brand-blue/15">
                  {t.img ? (
                    <Image
                      src={t.img}
                      alt={`Foto de ${t.perro}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-2xl">
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

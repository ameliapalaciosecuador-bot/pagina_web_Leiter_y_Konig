import Image from "next/image";
import { whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

/*
  Solo testimonios REALES de clientes.
  Para agregar uno nuevo, copia un objeto y llena los datos.
  Si tienes foto del perro, ponla en public/images y escribe la ruta en "img".
  Si no hay foto, deja img: "" y se mostrará un emoji.
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
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

          {/* Tarjeta para invitar a dejar una reseña */}
          <a
            href={whatsappLink(
              "Hola Hernán 👋 Quiero dejar mi reseña sobre mi compra en Leiter & Konig Pet's: ",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-blue/40 bg-brand-blue/5 p-7 text-center transition-colors hover:bg-brand-blue/10"
          >
            <span className="text-4xl">⭐</span>
            <h3 className="mt-3 text-xl font-extrabold text-brand-dark">
              ¿Ya eres cliente? Deja tu reseña
            </h3>
            <p className="mt-2 text-sm text-brand-dark/70">
              Cuéntanos cómo te fue con tu arnés y, con tu permiso, publicamos tu
              experiencia aquí. ¡Nos ayudas un montón! 🐾
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-md transition-transform group-hover:scale-105">
              <WhatsAppIcon className="h-5 w-5" />
              Enviar mi reseña
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

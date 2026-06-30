import Image from "next/image";
import { categorias } from "../lib/productos";
import { whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export default function Products() {
  return (
    <section id="productos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Nuestros productos
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
            Todo para tu <span className="text-brand-blue">compañero</span>
          </h2>
          <p className="mt-4 text-lg text-brand-dark/70">
            Toca una categoría para ver las fotos y pregúntanos por WhatsApp. 🐾
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {categorias.map((cat, i) => (
            <details
              key={cat.id}
              open={i === 0}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center gap-4 p-5 font-extrabold text-brand-dark">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-2xl">
                  {cat.emoji}
                </span>
                <span className="flex-1 text-lg">{cat.nombre}</span>
                <span className="text-3xl font-light text-brand-blue transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-black/5 p-5">
                <p className="text-brand-dark/75">{cat.descripcion}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {cat.fotos.map((foto) => (
                    <div
                      key={foto}
                      className="relative aspect-square overflow-hidden rounded-xl bg-brand-cream"
                    >
                      <Image
                        src={`/images/productos/${cat.carpeta}/${foto}`}
                        alt={`${cat.nombre} para perros — Leiter & Konig Pet's`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink(
                    `Hola Alejandro 👋 Me interesa: ${cat.nombre}. ¿Qué precio, tallas y opciones tiene?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Pregunta por {cat.nombre.toLowerCase()}
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

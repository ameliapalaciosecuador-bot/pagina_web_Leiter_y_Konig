import Image from "next/image";
import { whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

const productos = [
  {
    img: "/images/pitbull-chaleco-tactico.jpg",
    nombre: "Chaleco táctico camuflaje",
    desc: "Robusto y acolchado, con agarradera superior. Ideal para razas fuertes.",
  },
  {
    img: "/images/mochila-tactica.jpg",
    nombre: "Mochila táctica con alforjas",
    desc: "Para que tu perro lleve su agua y premios en cada caminata.",
  },
  {
    img: "/images/malinois-chaleco-camo.jpg",
    nombre: "Chaleco militar camuflaje",
    desc: "Resistente y con estilo, para los perros más aventureros.",
  },
  {
    img: "/images/boxer-chaleco-naranja.jpg",
    nombre: "Chaleco de alta visibilidad",
    desc: "Brilla en los paseos. Seguridad y comodidad para tu compañero.",
  },
  {
    img: "/images/arnes-camuflaje-1.jpg",
    nombre: "Arnés acolchado ajustable",
    desc: "Cómodo y seguro, se adapta al cuerpo de tu perro sin lastimar.",
  },
  {
    img: "/images/pitbull-gir-tactico.jpg",
    nombre: "Chaleco personalizado",
    desc: "Con placa y el nombre de tu perro. Único como él.",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Nuestros productos
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
            Equipo para cada{" "}
            <span className="text-brand-blue">aventura</span>
          </h2>
          <p className="mt-4 text-lg text-brand-dark/70">
            Toca cualquier producto y pregúntanos precio y disponibilidad al
            instante.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <a
              key={p.nombre}
              href={whatsappLink(
                `Hola Hernán 👋 Me interesa: ${p.nombre}. ¿Qué precio tiene y qué tallas hay?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.nombre}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold text-brand-dark">
                  {p.nombre}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-dark/70">
                  {p.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                  Consultar precio
                </span>
              </div>
            </a>
          ))}

          {/* Tarjeta especial: placas personalizadas (servicio confirmado en su TikTok) */}
          <a
            href={whatsappLink(
              "Hola Hernán 👋 Quiero una placa personalizada con el nombre de mi perro. ¿Cómo la pido?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-center gap-3 rounded-2xl bg-brand-orange p-7 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🔖</span>
            <h3 className="text-xl font-extrabold">
              Placas personalizadas con el nombre de tu perro
            </h3>
            <p className="text-sm text-white/90">
              Para que nunca se pierda y luzca con estilo. ¡Las hacemos a tu
              gusto!
            </p>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-orange">
              <WhatsAppIcon className="h-5 w-5" />
              La quiero
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

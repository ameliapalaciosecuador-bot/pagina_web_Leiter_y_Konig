import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { site } from "../lib/site";

const puntos = [
  {
    icon: "🚚",
    titulo: "Envíos a todo el Ecuador",
    texto: "Estés donde estés, le llevamos el equipo perfecto a tu perro.",
  },
  {
    icon: "🏠",
    titulo: "Entrega a domicilio",
    texto: "En el Valle de los Chillos te lo llevamos para que lo pruebes.",
  },
  {
    icon: "👀",
    titulo: "Pruébalo en tu perro",
    texto: "Te mostramos el producto en vivo antes de que decidas.",
  },
];

export default function Shipping() {
  return (
    <section id="envios" className="bg-brand-dark py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Foto del dueño con sus perros */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-white/10 sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src="/images/hernan-con-pastores.jpg"
            alt="Hernán Parra, dueño de Leiter & Konig Pet's, con sus pastores alemanes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>

        {/* Texto */}
        <div>
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Trato directo con el dueño
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            Amantes de los perros,{" "}
            <span className="text-brand-blue">como tú</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Detrás de {site.nombre} está {site.dueno}, que conoce y entrena
            perros de verdad. Por eso cada arnés se elige pensando en la
            seguridad y comodidad de tu compañero.
          </p>

          <div className="mt-8 space-y-4">
            {puntos.map((p) => (
              <div key={p.titulo} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-extrabold">{p.titulo}</h3>
                  <p className="text-sm text-white/70">{p.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <WhatsAppButton mensaje="Hola Hernán 👋 ¿Hacen envíos a mi ciudad? Quiero un arnés para mi perro.">
              Pregunta por tu envío
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

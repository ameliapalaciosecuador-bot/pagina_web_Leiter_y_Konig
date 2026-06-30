import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { site } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Foto de fondo: perros corriendo con sus arneses */}
      <div className="absolute inset-0">
        <Image
          src="/images/portada-leiter-konig.jpg"
          alt="Leiter y Konig, los dos pastores alemanes de la marca, con sus arneses en la montaña"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Capa de color para que el texto se lea bien */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-brand-dark/70 to-brand-blue/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24 sm:py-32 lg:py-40">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-7 py-3 text-lg font-bold text-white shadow-lg sm:text-xl">
          <span className="text-2xl">🐾</span> {site.slogan}
        </span>

        <h1 className="max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Arneses y chalecos{" "}
          <span className="text-brand-orange">tácticos</span> para perros con
          actitud
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          Diseñados para perros fuertes y aventureros. Seguros, resistentes y
          cómodos — para que cada paseo sea una aventura{" "}
          <strong className="text-white">sin escapes ni jalones</strong>.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton mensaje="Hola Alejandro 👋 Quiero info y precios de sus arneses para perros.">
            Pídelo por WhatsApp
          </WhatsAppButton>
          <a
            href="#productos"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
          >
            Ver productos
          </a>
        </div>

        <div className="mt-4 flex items-center gap-3 text-lg font-bold text-white sm:text-xl">
          <span className="text-4xl">🚚</span> Hacemos envíos a todo el Ecuador
        </div>
      </div>
    </section>
  );
}

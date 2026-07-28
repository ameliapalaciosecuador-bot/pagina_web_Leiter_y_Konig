import Image from "next/image";
import type { Metadata } from "next";

/*
  ⚙️ MODO MANTENIMIENTO (temporal).
  El sitio real está guardado en el historial de git (commit anterior).
  Para REACTIVAR el sitio completo, se restaura este archivo a su versión
  anterior y se vuelve a publicar.
*/
export const metadata: Metadata = {
  title: "Sitio en mantenimiento | Leiter & Konig Pet's",
  description: "Estamos haciendo mejoras. Vuelve pronto.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <div
        className="overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-brand-blue/10"
        style={{ width: 130, height: 130 }}
      >
        <Image
          src="/images/logo.png"
          alt="Leiter & Konig Pet's"
          width={130}
          height={130}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      <h1 className="mt-8 text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
        Sitio en <span className="text-brand-orange">mantenimiento</span>
      </h1>

      <p className="mt-4 max-w-md text-lg leading-relaxed text-brand-dark/70">
        Estamos haciendo mejoras en la página. 🐾
        <br />
        Vuelve pronto.
      </p>
    </main>
  );
}

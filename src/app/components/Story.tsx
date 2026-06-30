import Image from "next/image";
import { site } from "../lib/site";

export default function Story() {
  return (
    <section id="historia" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Logo como protagonista: los dos pastores que dan nombre a la marca */}
        <div className="flex justify-center">
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-full bg-white shadow-xl ring-8 ring-brand-blue/10">
            <Image
              src="/images/logo.png"
              alt="Logotipo de Leiter & Konig Pet's con sus dos pastores alemanes"
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Relato */}
        <div>
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Nuestra historia
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Todo empezó con{" "}
            <span className="text-brand-red">dos perros</span>
          </h2>

          <div className="mt-5 space-y-4 text-lg leading-relaxed text-brand-dark/75">
            <p>
              <strong className="text-brand-dark">Leiter</strong> y{" "}
              <strong className="text-brand-dark">Konig</strong> son los dos
              pastores alemanes de {site.dueno}:{" "}
              <strong className="text-brand-dark">padre e hijo</strong>. De ellos
              nació esta tienda, y son justamente los dos perros que ves en el
              logo. 🐾
            </p>
            <p>
              A {site.dueno} le apasionan la{" "}
              <strong className="text-brand-dark">aventura</strong> y el{" "}
              <strong className="text-brand-dark">ciclismo</strong>. Conoce lo
              que es salir a la montaña, al sendero o a la ruta y necesitar
              equipo que de verdad aguante. Por eso elige cada arnés y chaleco
              pensando en perros activos como Leiter y Konig, que viven la vida
              al aire libre.
            </p>
            <p>
              Aquí no vendemos un accesorio cualquiera: compartimos lo que a
              nosotros nos funciona con nuestros propios perros. 💪
            </p>
          </div>

          {/* Valores rápidos */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              { icon: "🐕", label: "Padre e hijo" },
              { icon: "🚵", label: "Espíritu aventurero" },
              { icon: "🐶", label: "Amante de los perros" },
            ].map((v) => (
              <span
                key={v.label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark shadow-sm ring-1 ring-black/5"
              >
                <span className="text-base">{v.icon}</span>
                {v.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

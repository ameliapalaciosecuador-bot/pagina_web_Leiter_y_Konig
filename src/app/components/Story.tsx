import Image from "next/image";
import { site } from "../lib/site";

export default function Story() {
  return (
    <section id="historia" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Logo como protagonista: los dos pastores que dan nombre a la marca */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-brand-blue/10" />
            <Image
              src="/images/logo.png"
              alt="Logotipo de Leiter & Konig Pet's con sus dos pastores alemanes"
              width={380}
              height={380}
              className="relative h-auto w-full max-w-[340px] drop-shadow-xl"
            />
          </div>
        </div>

        {/* Relato */}
        <div>
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Nuestra historia
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Un nombre con{" "}
            <span className="text-brand-red">cuatro patas</span>
          </h2>

          <div className="mt-5 space-y-4 text-lg leading-relaxed text-brand-dark/75">
            <p>
              <strong className="text-brand-dark">Leiter</strong> y{" "}
              <strong className="text-brand-dark">König</strong> son los dos
              pastores alemanes de {site.dueno} —{" "}
              <strong className="text-brand-dark">padre e hijo</strong> — y los
              que le dan el nombre y el alma a este negocio. Ellos son los que
              ves en nuestro logo. 🐾
            </p>
            <p>
              {site.dueno} es un apasionado de la{" "}
              <strong className="text-brand-dark">aventura</strong> y el{" "}
              <strong className="text-brand-dark">ciclismo</strong>. Sabe lo que
              significa salir a la montaña, al sendero o a la ruta y necesitar
              equipo que de verdad aguante. Por eso elige cada arnés y chaleco
              pensando en los perros que, como Leiter y König, viven la vida al
              aire libre.
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
              { icon: "🤝", label: "De dueño a dueño" },
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

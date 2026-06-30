import WhatsAppButton from "./WhatsAppButton";

const tallas = [
  { talla: "S", pecho: "40 – 55 cm", razas: "Razas pequeñas, cachorros" },
  { talla: "M", pecho: "55 – 70 cm", razas: "Beagle, Schnauzer, Bull Terrier" },
  {
    talla: "L",
    pecho: "70 – 90 cm",
    razas: "Pastor Alemán, Labrador, Husky",
  },
  { talla: "XL", pecho: "90 – 110 cm", razas: "Rottweiler, Gran Danés" },
];

const pasos = [
  "Pasa una cinta métrica alrededor del pecho de tu perro, justo detrás de las patas delanteras (la parte más ancha).",
  "Anota la medida en centímetros, sin apretar demasiado: debe caber un dedo entre la cinta y el cuerpo.",
  "Busca esa medida en la tabla para encontrar la talla ideal.",
];

export default function SizeGuide() {
  return (
    <section id="tallas" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Guía de tallas
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
            Encuentra la talla{" "}
            <span className="text-brand-blue">perfecta</span>
          </h2>
          <p className="mt-4 text-lg text-brand-dark/70">
            Un arnés bien medido es seguro y cómodo. Medir a tu perro toma 1
            minuto. 🐾
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Cómo medir */}
          <div className="rounded-2xl bg-brand-cream p-8">
            <h3 className="text-xl font-extrabold text-brand-dark">
              📐 Cómo medir a tu perro
            </h3>
            <ol className="mt-6 space-y-5">
              {pasos.map((paso, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <p className="text-brand-dark/80">{paso}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Tabla de tallas */}
          <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Talla</th>
                  <th className="px-5 py-4 font-bold">Contorno de pecho</th>
                  <th className="px-5 py-4 font-bold">Razas de referencia</th>
                </tr>
              </thead>
              <tbody>
                {tallas.map((t, i) => (
                  <tr
                    key={t.talla}
                    className={i % 2 === 0 ? "bg-white" : "bg-brand-cream"}
                  >
                    <td className="px-5 py-4 text-lg font-black text-brand-red">
                      {t.talla}
                    </td>
                    <td className="px-5 py-4 font-semibold text-brand-dark">
                      {t.pecho}
                    </td>
                    <td className="px-5 py-4 text-brand-dark/70">{t.razas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-brand-blue/10 p-7 text-center sm:flex-row sm:justify-center sm:text-left">
          <p className="text-brand-dark/80">
            <strong className="text-brand-dark">¿Tu perro está entre dos
            tallas o no estás seguro?</strong>{" "}
            Mándanos su medida y te decimos la ideal.
          </p>
          <WhatsAppButton
            className="shrink-0 !px-6 !py-3 text-sm"
            mensaje="Hola Alejandro 👋 El pecho de mi perro mide ___ cm. ¿Qué talla de arnés me recomiendas?"
          >
            Pregunta tu talla
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

import WhatsAppButton from "./WhatsAppButton";

const preguntas = [
  {
    q: "¿Hacen envíos? ¿A dónde?",
    a: "Sí. Llegamos a todo el Ecuador 🇪🇨. El envío a otras ciudades lo coordinamos contigo por WhatsApp: acordamos juntos la forma de entrega y el costo.",
  },
  {
    q: "¿Cómo sé qué talla elegir?",
    a: "Mide el contorno del pecho de tu perro y compáralo con nuestra Guía de Tallas. Si tienes dudas o tu perro está entre dos tallas, mándanos la medida por WhatsApp y te recomendamos la ideal.",
  },
  {
    q: "¿El arnés sirve si mi perro jala o se escapa?",
    a: "Sí. Nuestros arneses y chalecos tácticos tienen un ajuste seguro pensado para perros fuertes, para que no se zafen y tú tengas el control durante el paseo.",
  },
  {
    q: "¿Hacen placas con el nombre de mi perro?",
    a: "¡Sí! Hacemos placas personalizadas con el nombre de tu perro. Escríbenos por WhatsApp y te contamos los modelos disponibles.",
  },
  {
    q: "¿Puedo ver el producto antes de comprar?",
    a: "Claro. Te asesoramos por WhatsApp con fotos y videos reales de cada producto, para que elijas con total confianza antes de tu compra.",
  },
  {
    q: "¿Cómo realizo el pago?",
    a: "Coordinamos la forma de pago directamente contigo por WhatsApp, de la manera que te resulte más cómoda y segura.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Preguntas frecuentes
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-dark sm:text-4xl">
            Resolvemos tus <span className="text-brand-blue">dudas</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {preguntas.map((p) => (
            <details
              key={p.q}
              className="group rounded-2xl bg-brand-cream p-6 ring-1 ring-black/5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-extrabold text-brand-dark">
                {p.q}
                <span className="text-2xl text-brand-blue transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-brand-dark/75">{p.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-brand-dark/70">
            ¿Tienes otra pregunta? Estamos para ayudarte. 🐾
          </p>
          <WhatsAppButton mensaje="Hola Alejandro 👋 Tengo una pregunta sobre sus productos para perros.">
            Pregúntanos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 sm:py-24">
      {/* Detalle de color inferior, como el logo */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-brand-orange/90" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
          Tu perro está listo para la aventura.{" "}
          <span className="text-brand-dark">¿Y tú?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
          Escríbenos por WhatsApp y te ayudamos a elegir el arnés perfecto según
          la raza y el tamaño de tu perro. Respuesta rápida. 🐾
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton
            variant="light"
            className="!px-9 !py-5 text-lg"
            mensaje="Hola Alejandro 👋 Quiero que me ayudes a elegir el arnés perfecto para mi perro."
          >
            Quiero el mío ahora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

import { whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}

import { whatsappLink } from "../lib/site";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.04 4C9.96 4 5 8.96 5 15.04c0 2.13.6 4.12 1.64 5.82L5 28l7.32-1.62a11 11 0 0 0 3.72.66h.01C22.13 27.04 27 22.08 27 16c0-6.04-4.96-11-10.96-11Zm0 20.2h-.01c-1.14 0-2.26-.31-3.23-.88l-.23-.14-3.84.85.82-3.74-.15-.24a9.13 9.13 0 0 1-1.4-4.87c0-5.04 4.12-9.16 9.18-9.16 2.45 0 4.75.96 6.48 2.69a9.1 9.1 0 0 1 2.68 6.48c0 5.05-4.12 9.17-9.18 9.17Zm5.03-6.86c-.27-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.52-.32Z" />
    </svg>
  );
}

type Props = {
  /** Texto del botón */
  children: React.ReactNode;
  /** Mensaje opcional que se escribe solo en el chat */
  mensaje?: string;
  /** Estilo: principal (verde grande) o claro (sobre fondo de color) */
  variant?: "solid" | "light";
  className?: string;
};

export default function WhatsAppButton({
  children,
  mensaje,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-bold shadow-lg transition-transform duration-150 hover:scale-[1.03] active:scale-100";
  const styles =
    variant === "solid"
      ? "bg-whatsapp text-white shadow-green-600/30"
      : "bg-white text-brand-dark shadow-black/10";

  return (
    <a
      href={whatsappLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-6 w-6" />
      {children}
    </a>
  );
}

export { WhatsAppIcon };

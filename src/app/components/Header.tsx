import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-brand-dark/80 md:flex">
          <a href="#productos" className="transition-colors hover:text-brand-red">
            Productos
          </a>
          <a href="#historia" className="transition-colors hover:text-brand-red">
            Historia
          </a>
          <a href="#tallas" className="transition-colors hover:text-brand-red">
            Tallas
          </a>
          <a href="#faq" className="transition-colors hover:text-brand-red">
            Preguntas
          </a>
        </nav>
        <WhatsAppButton className="!px-5 !py-2.5 text-sm">
          Escríbenos
        </WhatsAppButton>
      </div>
    </header>
  );
}

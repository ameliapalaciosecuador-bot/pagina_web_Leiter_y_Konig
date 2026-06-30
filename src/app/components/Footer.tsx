import Logo from "./Logo";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo size={60} />
          <p className="mt-4 max-w-xs text-sm text-white/70">{site.slogan}.</p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>🇪🇨 {site.zona}</li>
            <li>📱 WhatsApp: {site.whatsappMostrar}</li>
            <li>👤 {site.dueno}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-brand-orange">
            Síguenos
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {site.facebook && (
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-blue"
                >
                  Facebook
                </a>
              </li>
            )}
            {site.instagram && (
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-blue"
                >
                  Instagram
                </a>
              </li>
            )}
            {site.tiktok && (
              <li>
                <a
                  href={site.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-blue"
                >
                  TikTok
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-white/50">
          © 2026 {site.nombre}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

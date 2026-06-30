import Logo from "./Logo";
import { site } from "../lib/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.86a2.59 2.59 0 0 1-2.59 2.46 2.59 2.59 0 0 1 0-5.18c.27 0 .53.05.78.12V9.98a5.86 5.86 0 0 0-.78-.05A5.86 5.86 0 0 0 4.1 15.8a5.86 5.86 0 0 0 11.72.2V9.01a7.5 7.5 0 0 0 4.38 1.4V7.2a4.28 4.28 0 0 1-3.6-1.38z" />
    </svg>
  );
}

const redes = [
  { nombre: "Facebook", url: site.facebook, Icon: FacebookIcon },
  { nombre: "TikTok", url: site.tiktok, Icon: TikTokIcon },
];

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
          <div className="mt-4 flex gap-3">
            {redes
              .filter((r) => r.url)
              .map(({ nombre, url, Icon }) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={nombre}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-blue"
                >
                  <Icon />
                </a>
              ))}
          </div>
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

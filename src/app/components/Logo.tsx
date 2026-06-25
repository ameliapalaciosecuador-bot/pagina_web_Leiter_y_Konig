import Image from "next/image";
import { site } from "../lib/site";

type Props = {
  /** Tamaño del logo en píxeles (alto y ancho) */
  size?: number;
  /** Mostrar el nombre en texto junto a la insignia */
  showName?: boolean;
};

export default function Logo({ size = 52, showName = true }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.png"
          alt={`Logotipo de ${site.nombre}`}
          width={size}
          height={size}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      {showName && (
        <span className="hidden text-base font-black leading-tight tracking-tight text-brand-red sm:inline">
          LEITER &amp; KONIG
          <span className="block text-[0.65rem] font-bold tracking-[0.3em] text-current opacity-60">
            PET&apos;S
          </span>
        </span>
      )}
    </div>
  );
}

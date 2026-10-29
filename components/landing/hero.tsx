import Image from "next/image";
import { MessageCircle, UtensilsCrossed } from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { btnInk, btnWhite } from "./styles";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand pt-28 pb-28 lg:pt-36 lg:pb-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Badge className="h-auto border-2 border-ink bg-white px-3 py-1 text-sm font-bold text-ink">
            Restaurante en Valledupar
          </Badge>
          <h1 className="font-display mt-6 text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95]">
            La mejor{" "}
            <span className="relative inline-block">
              salchipapa
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
                aria-hidden="true"
              >
                <path
                  d="M2 12 C 30 2, 60 22, 90 12 S 150 2, 180 12 S 240 22, 298 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            de Valledupar
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium text-ink/80">
            Salchipapas, perros, hamburguesas y asados hechos para compartir.
            Pide a domicilio o visítanos en cualquiera de nuestras dos sedes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-5">
            <a
              href={site.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnInk}
            >
              <UtensilsCrossed className="size-4" />
              Ver menú completo
            </a>
            <a
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnWhite}
            >
              <MessageCircle className="size-4" />
              Pedir por WhatsApp
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4"
            >
              <InstagramIcon className="size-5" />
              Instagram
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 rotate-3 overflow-hidden rounded-[2rem] border-4 border-ink shadow-[10px_10px_0_0_var(--ink)]">
            <Image
              src="/images/hamburguesa.jpg"
              alt="Hamburguesa de Punto & Coma"
              fill
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-7 -left-5 size-28 -rotate-12 overflow-hidden rounded-full border-4 border-ink bg-ink shadow-[5px_5px_0_0_var(--ink)]">
            <Image
              src="/images/logo.jpg"
              alt="Logo Punto & Coma"
              fill
              sizes="7rem"
              className="object-cover"
            />
          </div>
          <span className="font-display absolute -top-4 -right-2 -rotate-6 rounded-full border-2 border-ink bg-white px-4 py-2 text-lg shadow-[3px_3px_0_0_var(--ink)]">
            Pide a domicilio
          </span>
        </div>
      </div>
    </section>
  );
}

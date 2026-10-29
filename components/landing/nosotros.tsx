import Image from "next/image";
import { InstagramIcon } from "@/components/instagram-icon";
import { site } from "@/lib/site";
import { btnYellow } from "./styles";

const datos = [
  { valor: "53,8 mil", etiqueta: "seguidores en Instagram" },
  { valor: "2", etiqueta: "sedes en Valledupar" },
  { valor: "31", etiqueta: "adiciones para armarla a tu gusto" },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-ink px-5 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[4/3] -rotate-3 overflow-hidden rounded-[2rem] border-4 border-brand shadow-[10px_10px_0_0_var(--brand-yellow)]">
            <Image
              src="/images/local-fachada.jpg"
              alt="Fachada de Punto & Coma"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="font-bold tracking-widest text-brand uppercase">
            Nosotros
          </p>
          <h2 className="font-display mt-3 text-5xl leading-none sm:text-6xl">
            Salchipapas con <span className="text-brand">identidad</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Somos Punto &amp; Coma: salchipapas, perros, hamburguesas y asados
            hechos para compartir, con dos sedes en Valledupar y domicilio a
            donde estés.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-dashed border-white/30 pt-8">
            {datos.map((dato) => (
              <div key={dato.etiqueta}>
                <dt className="sr-only">{dato.etiqueta}</dt>
                <dd>
                  <span className="font-display block text-3xl text-brand sm:text-4xl">
                    {dato.valor}
                  </span>
                  <span className="mt-1 block text-sm text-white/70">
                    {dato.etiqueta}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnYellow} mt-10`}
          >
            <InstagramIcon className="size-5" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

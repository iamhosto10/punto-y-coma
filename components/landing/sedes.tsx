import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { sedes } from "@/lib/site";

export function Sedes() {
  return (
    <section id="sedes" className="px-5 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-bold tracking-widest text-muted-foreground uppercase">
          Ubicación y horarios
        </p>
        <h2 className="font-display mt-3 text-5xl leading-none sm:text-6xl">
          Encuéntranos
        </h2>

        <ul className="mt-12 border-t-4 border-ink">
          {sedes.map((sede, i) => (
            <li
              key={sede.nombre}
              className="grid gap-6 border-b-4 border-ink py-10 transition-colors hover:bg-brand/30 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12 lg:px-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-5xl leading-none sm:text-7xl">
                  {sede.nombre}
                </h3>
              </div>

              <div className="space-y-5">
                <dl className="grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-3 sm:col-span-2">
                    <dt className="mt-0.5">
                      <MapPin className="size-5" />
                      <span className="sr-only">Dirección</span>
                    </dt>
                    <dd className="font-semibold">{sede.direccion}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="mt-0.5">
                      <Clock className="size-5" />
                      <span className="sr-only">Horario</span>
                    </dt>
                    <dd>{sede.horario}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="mt-0.5">
                      <Phone className="size-5" />
                      <span className="sr-only">Teléfono</span>
                    </dt>
                    <dd>{sede.telefono}</dd>
                  </div>
                </dl>
                <a
                  href={sede.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold underline decoration-2 underline-offset-4"
                >
                  Cómo llegar
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

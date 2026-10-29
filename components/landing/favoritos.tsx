import { UtensilsCrossed } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { favoritos, site } from "@/lib/site";
import { btnInk } from "./styles";

export function Favoritos() {
  return (
    <section id="favoritos" className="px-5 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-bold tracking-widest text-muted-foreground uppercase">
            Del menú
          </p>
          <h2 className="font-display mt-3 text-5xl leading-none sm:text-6xl">
            Los favoritos
          </h2>
          <p className="mt-5 max-w-sm text-lg text-muted-foreground">
            Solo una probadita. El menú completo tiene mucho más, incluidas más
            de 30 adiciones para armarlo a tu gusto.
          </p>
          <a
            href={site.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnInk} mt-8`}
          >
            <UtensilsCrossed className="size-4" />
            Ver menú completo
          </a>
        </div>

        <Card className="gap-0 rounded-3xl border-2 border-ink py-0 shadow-[8px_8px_0_0_var(--ink)] ring-0">
          <ol className="divide-y-2 divide-dashed divide-ink/40">
            {favoritos.map((plato, i) => (
              <li
                key={plato.nombre}
                className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
              >
                <span className="font-display text-4xl text-brand [-webkit-text-stroke:2px_var(--ink)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-2xl leading-tight">
                      {plato.nombre}
                    </h3>
                    {plato.tag && (
                      <Badge className="h-auto border-2 border-ink bg-brand px-2.5 py-0.5 text-xs font-bold text-ink">
                        {plato.tag}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-muted-foreground">
                    {plato.descripcion}
                  </p>
                </div>
                <p className="font-display col-span-2 text-2xl sm:col-span-1 sm:text-right">
                  {plato.precio}
                </p>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </section>
  );
}

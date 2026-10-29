import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";
import { sedes, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contacto" className="overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 pt-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl text-brand">Contacto</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand"
                >
                  <MessageCircle className="size-4" />
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-brand"
                >
                  <Mail className="size-4" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand">Sedes</h2>
            <ul className="mt-4 space-y-3">
              {sedes.map((sede) => (
                <li key={sede.nombre}>
                  <span className="font-semibold">{sede.nombre}</span>
                  <br />
                  <span className="text-white/70">{sede.direccion}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand">Sigue el antojo</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand"
                >
                  <InstagramIcon className="size-4" />
                  {site.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={site.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Menú completo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="font-display mt-16 -mb-[0.18em] text-center text-[clamp(2.5rem,11vw,9rem)] leading-none whitespace-nowrap text-brand"
        >
          Punto &amp; Coma
        </p>
      </div>
      <p className="border-t border-white/15 py-4 text-center text-sm text-white/60">
        © 2026 Punto &amp; Coma · Valledupar
      </p>
    </footer>
  );
}

import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#favoritos", label: "Favoritos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#sedes", label: "Sedes" },
];

export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Principal"
        className="pointer-events-auto flex items-center gap-1 rounded-full border-2 border-ink bg-white p-1.5 shadow-[4px_4px_0_0_var(--ink)]"
      >
        <a href="#inicio" className="flex items-center gap-2 rounded-full pr-2">
          <Image
            src="/images/logo.jpg"
            alt="Logo Punto & Coma"
            width={40}
            height={40}
            className="rounded-full border-2 border-ink"
            priority
          />
          <span className="font-display hidden text-lg sm:inline">
            Punto &amp; Coma
          </span>
        </a>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden rounded-full px-3 py-2 text-sm font-semibold hover:bg-muted md:inline-flex"
          >
            {link.label}
          </a>
        ))}
        <a
          href={site.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex h-10 items-center rounded-full bg-ink px-4 text-sm font-bold text-brand"
        >
          Pedir ahora
        </a>
      </nav>
    </header>
  );
}

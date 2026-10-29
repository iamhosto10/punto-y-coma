import { cintaTexto } from "@/lib/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {[...cintaTexto, ...cintaTexto].map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-8">
          <span className="font-display text-2xl whitespace-nowrap text-brand sm:text-3xl">
            {item}
          </span>
          <span className="text-2xl text-white" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="relative z-10 -mt-10 overflow-hidden py-6">
      <div className="-rotate-2 scale-105 border-y-4 border-ink bg-ink py-4">
        <div className="animate-marquee flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  );
}

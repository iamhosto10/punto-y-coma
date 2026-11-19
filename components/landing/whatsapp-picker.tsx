"use client";

import { useId, useRef } from "react";
import { MapPin, MessageCircle, X } from "lucide-react";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { sedes } from "@/lib/site";
import { cn } from "@/lib/utils";
import { btnInk } from "./styles";

export function WhatsappPicker({
  className,
  label = "Pedir por WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={cn(btnInk, className)}
      >
        <WhatsappIcon className="size-5" />
        {label}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-[min(92vw,26rem)] rounded-3xl border-4 border-ink bg-cream p-6 text-ink shadow-[8px_8px_0_0_var(--ink)] backdrop:bg-ink/60"
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id={titleId}
            className="font-display text-3xl leading-none"
          >
            ¿A qué sede le escribes?
          </h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar"
            className="rounded-full border-2 border-ink bg-white p-1.5"
          >
            <X className="size-4" />
          </button>
        </div>

        <ul className="mt-6 space-y-3">
          {sedes.map((sede) => (
            <li key={sede.nombre}>
              <a
                href={sede.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => dialogRef.current?.close()}
                className="flex items-center justify-between gap-3 rounded-2xl border-2 border-ink bg-brand px-4 py-3 shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink)]"
              >
                <span>
                  <span className="font-display block text-2xl leading-none">
                    {sede.nombre}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-sm font-semibold">
                    <MapPin className="size-3.5" />
                    {sede.direccion}
                  </span>
                </span>
                <MessageCircle className="size-6 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}

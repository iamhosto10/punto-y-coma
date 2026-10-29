import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sticker =
  "h-12 gap-2 rounded-full border-2 border-ink px-6 text-base font-bold shadow-[4px_4px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink)] active:translate-y-0.5 active:shadow-[1px_1px_0_0_var(--ink)]";

export const btnInk = cn(buttonVariants({ variant: "default" }), sticker);
export const btnWhite = cn(
  buttonVariants({ variant: "outline" }),
  sticker,
  "bg-white text-ink hover:bg-white"
);
export const btnYellow = cn(
  buttonVariants({ variant: "secondary" }),
  sticker,
  "hover:bg-brand"
);

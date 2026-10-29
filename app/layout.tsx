import type { Metadata } from "next";
import { Bagel_Fat_One, Figtree } from "next/font/google";
import "./globals.css";

const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punto & Coma | Restaurante Valledupar",
  description:
    "La mejor salchipapa de Valledupar. Pide a domicilio o visítanos en nuestras sedes Mayales y Norte.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bagel.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

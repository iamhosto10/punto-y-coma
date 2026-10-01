import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { MapPin, UtensilsCrossed } from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";

const MENU_URL =
  "https://vinny.vinapp.co/?company=puntoycoma?idPoint%3D1132";
const INSTAGRAM_URL = "https://www.instagram.com/puntoycoma.vpar/";

const platosDestacados = [
  {
    nombre: "Salchipapa PYC",
    descripcion: "La firma de la casa, cargada a tu gusto.",
    precio: "Desde $28.000",
    tag: "La más pedida",
  },
  {
    nombre: "Salchipapa Salvaje",
    descripcion: "Para compartir, la más completa del menú.",
    precio: "Desde $27.000",
    tag: "Para compartir",
  },
  {
    nombre: "Perro Suizo Mexicano",
    descripcion: "Perro caliente con un toque picante.",
    precio: "$21.000",
  },
  {
    nombre: "Hamburguesa Mediterránea",
    descripcion: "La hamburguesa premium de la casa.",
    precio: "$29.000",
  },
];

const sedes = [
  {
    nombre: "Sede Mayales",
    direccion: "Mz E1 Casa 14B, Urb. Colombia",
  },
  {
    nombre: "Sede Norte",
    direccion: "Cll 9 # 17-52, San Joaquín",
    horario: "5:00 p. m. – 10:30 p. m.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Logo Punto & Coma"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="font-semibold tracking-tight">
              PUNTO &amp; COMA
            </span>
          </div>
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Pedir ahora
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary"
          >
            Restaurante en Valledupar
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            La mejor <span className="text-primary">salchipapa</span> de
            Valledupar
          </h1>
          <p className="max-w-xl text-pretty text-muted-foreground md:text-lg">
            Salchipapas, perros, hamburguesas y asados hechos para compartir.
            Pide a domicilio o visítanos en cualquiera de nuestras dos sedes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <UtensilsCrossed className="size-4" />
              Ver menú completo
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              <InstagramIcon className="size-4" />
              Síguenos en Instagram
            </a>
          </div>
        </section>

        {/* Galería */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/local-fachada.jpg"
                alt="Fachada de Punto & Coma"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/hamburguesa.jpg"
                alt="Hamburguesa de Punto & Coma"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl" />

        {/* Platos destacados */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Algunos de nuestros platos
            </h2>
            <p className="mt-2 text-muted-foreground">
              Esto es solo una probadita — el menú completo tiene mucho más.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platosDestacados.map((plato) => (
              <Card key={plato.nombre} className="bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle>{plato.nombre}</CardTitle>
                    {plato.tag && (
                      <Badge className="bg-primary text-primary-foreground">
                        {plato.tag}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {plato.descripcion}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="font-semibold text-primary">
                    {plato.precio}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Ver menú completo y precios
            </a>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl" />

        {/* Sedes */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Nuestras sedes
            </h2>
            <p className="mt-2 text-muted-foreground">
              Encuéntranos en Valledupar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sedes.map((sede) => (
              <Card key={sede.nombre} className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    {sede.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {sede.direccion}
                  </p>
                  {sede.horario && (
                    <p className="text-sm text-muted-foreground">
                      🕐 {sede.horario}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card px-6 py-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              ¿Se te antojó?
            </h2>
            <p className="max-w-md text-muted-foreground">
              Pide a domicilio en un par de clics o síguenos para ver nuestras
              novedades.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <UtensilsCrossed className="size-4" />
                Pedir ahora
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" })
                )}
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Logo Punto & Coma"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span>Punto &amp; Coma · Valledupar</span>
          </div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
          >
            <InstagramIcon className="size-4" />
            @puntoycoma.vpar
          </Link>
        </div>
      </footer>
    </>
  );
}

import { Favoritos } from "@/components/landing/favoritos";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { Nav } from "@/components/landing/nav";
import { Nosotros } from "@/components/landing/nosotros";
import { Sedes } from "@/components/landing/sedes";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Favoritos />
        <Nosotros />
        <Sedes />
      </main>
      <Footer />
    </>
  );
}

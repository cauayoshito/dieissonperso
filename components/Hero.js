// components/Hero.js
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center"
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Transforme sonhos em{" "}
          <span className="text-accent">investimentos reais</span> com leilões
          de imóveis
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Descubra oportunidades exclusivas em todo o país e multiplique seu
          patrimônio de forma simples, segura e com o suporte que você merece.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/imoveis"
            className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Ver Imóveis
          </Link>
          <Link
            href="/planos"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Conheça os Planos
          </Link>
        </div>
      </div>
    </section>
  );
}

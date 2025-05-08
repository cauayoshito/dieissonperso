// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">
        <Link href="/" className="inline-block">
          <Image
            src="/images/logo-malsa.png"
            alt="Logo Malsa"
            width={140}
            height={44}
            className="w-36 h-auto"
          />
        </Link>

        <nav className="flex items-center space-x-6 text-accent font-medium">
          <Link href="/">Início</Link>
          <Link href="/imoveis">Imóveis</Link>
          <Link href="/planos">Planos</Link>
          <Link
            href="/login"
            className="bg-accent text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones do menu

export default function Header() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={140} height={120} />
          </a>
        </Link>

        {/* Botão do menu no mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#sobre">
            <a className="hover:text-green-400">Sobre</a>
          </Link>
          <Link href="#planos">
            <a className="hover:text-green-400">Planos</a>
          </Link>
          <Link href="#contato">
            <a className="hover:text-green-400">Contato</a>
          </Link>

          {status === "loading" ? (
            <span>...</span>
          ) : session ? (
            <>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="hover:text-red-500"
              >
                Sair
              </button>
              <Link href="/painel">
                <a className="hover:text-green-400">Área do Aluno</a>
              </Link>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="hover:text-green-400"
            >
              Entrar
            </button>
          )}
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-6 pt-2 space-y-4 text-center">
          <Link href="#sobre">
            <a
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-400"
            >
              Sobre
            </a>
          </Link>
          <Link href="#planos">
            <a
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-400"
            >
              Planos
            </a>
          </Link>
          <Link href="#contato">
            <a
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-400"
            >
              Contato
            </a>
          </Link>

          {status === "loading" ? (
            <span>...</span>
          ) : session ? (
            <>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setMenuOpen(false);
                }}
                className="block w-full hover:text-red-500"
              >
                Sair
              </button>
              <Link href="/painel">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-green-400"
                >
                  Área do Aluno
                </a>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                signIn("google");
                setMenuOpen(false);
              }}
              className="block w-full hover:text-green-400"
            >
              Entrar
            </button>
          )}
        </nav>
      )}
    </header>
  );
}

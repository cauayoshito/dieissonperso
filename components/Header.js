import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo sozinha, maior */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140} // aumentei aqui
              height={120}
            />
          </a>
        </Link>

        {/* Menu de navegação */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#sobre" legacyBehavior>
            <a className="hover:text-green-400">Sobre</a>
          </Link>
          <Link href="#planos" legacyBehavior>
            <a className="hover:text-green-400">Planos</a>
          </Link>
          <Link href="#contato" legacyBehavior>
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
              <Link href="/painel" legacyBehavior>
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
    </header>
  );
}

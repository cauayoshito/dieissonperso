// pages/login.js
import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";

export default function Login({ csrfToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">
          Faça seu login
        </h1>

        {/* Botão Google */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/painel" })}
          className="w-full flex justify-center items-center gap-2 bg-white text-gray-900 py-2 rounded hover:bg-gray-100 transition"
        >
          Entrar com Google
        </button>

        <div className="border-t border-gray-700"></div>

        {/* Formulário de Credenciais */}
        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="space-y-4"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <div>
            <label className="block text-gray-300 mb-1">E-mail</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Senha</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
          >
            Entrar com Credenciais
          </button>
        </form>
      </div>
    </div>
  );
}

// Precisamos do CSRF token para o provider de credenciais
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

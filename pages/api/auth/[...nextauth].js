import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // 1) Habilita o login por e-mail/senha
  providers: [
    CredentialsProvider({
      name: "Demo Account",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "demo@malsa.com.br",
        },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        // 2) Aqui você “autentica” o usuário demo
        if (
          credentials.email === "demo@malsa.com.br" &&
          credentials.password === "Malsa123!"
        ) {
          // devolve qualquer objeto que represente o usuário
          return { id: 1, name: "Usuário Demo", email: credentials.email };
        }
        // retorna null para falha de login
        return null;
      },
    }),
  ],

  // 3) Ajustes de sessão / página de login
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login", // sua página customizada de login
  },

  // 4) Segredo pra criptografar seu token JWT
  secret: process.env.NEXTAUTH_SECRET || "mude-essa-string-para-algo-seguro",
});

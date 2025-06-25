import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credenciais",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        // Aqui é onde você valida manualmente o usuário
        const { email, password } = credentials;

        // Exemplo simples (você pode validar com banco depois)
        if (email === "admin@teste.com" && password === "123456") {
          return { id: 1, name: "Admin", email: "admin@teste.com" };
        }

        // Retorna null se falhar
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // redireciona erro/sucesso para sua página de login
  },
  secret: process.env.NEXTAUTH_SECRET,
});

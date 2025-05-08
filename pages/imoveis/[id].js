// pages/imoveis/[id].js
import Head from "next/head";
import Image from "next/image";
import { getSession } from "next-auth/react";

export default function ImovelDetalhe({ imovel }) {
  return (
    <>
      <Head>
        <title>{imovel.titulo} | Malsa Investimentos</title>
      </Head>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{imovel.titulo}</h1>
        <p className="mb-2">
          <strong>Lance inicial:</strong> {imovel.lance}
        </p>
        <p className="mb-2">
          <strong>Local:</strong> {imovel.local}
        </p>
        <p className="mb-4">
          <strong>Data do leilão:</strong> {imovel.data}
        </p>
        {imovel.imagem && (
          <Image
            src={imovel.imagem}
            alt={imovel.titulo}
            width={800}
            height={480}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}
        {/* Aqui você pode expandir com descrição, características, mapa, etc. */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.params;

  // Se não estiver logado, redireciona para o login
  if (!session) {
    return {
      redirect: {
        destination: `/login?callbackUrl=/imoveis/${id}`,
        permanent: false,
      },
    };
  }

  // TODO: trocar pelo fetch real à sua API Python
  // Exemplo de stub:
  const imovel = {
    id,
    titulo: `Imóvel Exemplo #${id}`,
    lance: "R$ 123.000",
    local: "Localidade Exemplo",
    data: "01/01/2025",
    imagem: `/imoveis/imovel-${id}.jpg`,
  };

  return {
    props: { imovel },
  };
}

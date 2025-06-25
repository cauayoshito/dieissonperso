// pages/painel.js
import Head from "next/head";
import { getSession } from "next-auth/react"; // ← importa do next-auth/react
import { useState } from "react";
import { Calendar, PlayCircle, BarChart2 } from "lucide-react";

import Header from "@/components/Header";
import VideoLibrary from "@/components/VideoLibrary";
import { VIDEO_SERIES } from "@/data/videoSeries";

export default function Painel() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <>
      <Head>
        <title>Área do Assinante • Dieisson Vasques</title>
      </Head>

      <div className="min-h-screen bg-gray-950 text-white">
        {/* O Header agora usa useSession() internamente */}
        <Header />

        <div className="flex pt-16">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col fixed top-16 left-0 h-[calc(100vh-4rem)] w-48 bg-gray-900 p-6 space-y-4">
            {[
              { id: "ficha", label: "Ficha de Treino", icon: Calendar },
              { id: "videos", label: "Biblioteca", icon: PlayCircle },
              { id: "proximo", label: "Próximo Treino", icon: BarChart2 },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg w-full text-left transition ${
                  activeTab === id
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </aside>

          {/* Conteúdo principal */}
          <main className="flex-1 lg:ml-48 p-6 space-y-8">
            {activeTab === "ficha" && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Sua Ficha de Treino</h2>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-400">
                    Em breve: sua tabela de exercícios.
                  </p>
                </div>
              </section>
            )}

            {activeTab === "videos" && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">
                  Biblioteca de Vídeos
                </h2>
                <VideoLibrary data={VIDEO_SERIES} />
              </section>
            )}

            {activeTab === "proximo" && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Próximo Treino Agendado
                </h2>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300">15/06 às 18:00</p>
                  <p className="text-gray-300">17/06 às 17:00</p>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

// Protege esta página no servidor
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {}, // não precisa passar session pro cliente, o Header pega com useSession()
  };
}

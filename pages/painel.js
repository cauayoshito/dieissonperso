import Head from "next/head";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { Calendar, PlayCircle, BarChart2 } from "lucide-react";

import Header from "@/components/Header";
import VideoLibrary from "@/components/VideoLibrary";
import { getPlaylistVideos } from "@/lib/youtube";

export default function Painel({ videoSeries }) {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <>
      <Head>
        <title>Área do Assinante • Dieisson Vasques</title>
      </Head>

      <div className="min-h-screen bg-gray-950 text-white">
        <Header />

        <div className="flex pt-16">
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
                {videoSeries.length === 0 ? (
                  <p className="text-gray-400">Carregando vídeos...</p>
                ) : (
                  <VideoLibrary data={videoSeries} />
                )}
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

  const PLAYLISTS = [
    {
      id: "PLnggVQN71gHUwpL1O9uxX2WSPiUUvK8Q2",
      title: "Musculação",
      customThumbnail: "/images/musculacao.jpg",
    },
    {
      id: "PLnggVQN71gHUMI9YKs98UMBPlj55pFEt0",
      title: "HIIT",
      customThumbnail: "/images/hiit.jpg",
    },
    {
      id: "PLnggVQN71gHWQ1W1qr3m1L98CAXsdMrgp",
      title: "Mobilidade",
      customThumbnail: "/images/mobilidade.jpg",
    },
    {
      id: "PLnggVQN71gHXxEEJdmPueNW5C2QdwySYr",
      title: "Yoga",
      customThumbnail: "/images/yoga.jpg",
    },
    {
      id: "PLnggVQN71gHUStt9PZ4k4Y_2Mu4dO6WCl",
      title: "Kettlebell",
      customThumbnail: "/images/kettlebell.jpg",
    },
    {
      id: "PLnggVQN71gHUStt9PZ4k4Y_2Mu4dO6WCl",
      title: "Bônus",
      customThumbnail: "/images/bonus.jpg",
    },
  ];

  const videoSeries = await Promise.all(
    PLAYLISTS.map(async ({ id, title, customThumbnail }) => {
      try {
        const episodes = await getPlaylistVideos(id);
        const thumbnail =
          customThumbnail || episodes[0]?.thumbnail || "/images/sem-thumb.jpg";

        return {
          id,
          title,
          thumbnail,
          episodes,
        };
      } catch (error) {
        console.error(`Erro ao carregar playlist: ${id}`, error);
        return {
          id,
          title,
          thumbnail: customThumbnail || "/images/sem-thumb.jpg",
          episodes: [],
        };
      }
    })
  );

  return {
    props: {
      videoSeries,
    },
  };
}

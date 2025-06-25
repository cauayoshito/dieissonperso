import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoLibrary({ data = [] }) {
  const [selectedSeries, setSelectedSeries] = useState(null);

  if (!data.length) {
    return (
      <p className="text-center text-gray-400">Nenhuma série disponível.</p>
    );
  }

  return (
    <div>
      {/* Cabeçalho dinâmico */}
      <h2 className="text-3xl font-bold text-green-500 mb-6">
        {selectedSeries ? selectedSeries.title : "Biblioteca de Vídeos"}
      </h2>

      <AnimatePresence initial={false}>
        {/* Lista de Séries */}
        {!selectedSeries && (
          <motion.div
            key="series-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {data.map((serie) => (
              <motion.div
                key={serie.id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => setSelectedSeries(serie)}
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={serie.thumbnail}
                    alt={serie.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-2 text-center font-medium">{serie.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Lista de Episódios de uma Série */}
        {selectedSeries && (
          <motion.div
            key="episode-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <button
              className="text-sm text-gray-400 hover:underline"
              onClick={() => setSelectedSeries(null)}
            >
              ← Voltar para séries
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedSeries.episodes.map((ep) => (
                <motion.div
                  key={ep.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={ep.thumbnail}
                      alt={ep.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{ep.title}</h4>
                    <a
                      href={ep.videoUrl}
                      className="mt-2 inline-block text-green-400 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▶ Assistir
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

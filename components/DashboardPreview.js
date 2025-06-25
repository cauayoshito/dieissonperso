// components/DashboardPreview.js
import React from "react";
import { ClipboardList, BarChart2, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import MiniChart from "./MiniChart";

export default function DashboardPreview() {
  const stats = [
    {
      icon: <ClipboardList size={32} className="text-green-400" />,
      label: "Planos Ativos",
      value: 2,
    },
    {
      icon: <BarChart2 size={32} className="text-green-400" />,
      label: "Treinos Concluídos",
      value: 18,
    },
    {
      icon: <PlayCircle size={32} className="text-green-400" />,
      label: "Vídeos Assistidos",
      value: 12,
    },
  ];

  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Fev", value: 72 },
    { month: "Mar", value: 78 },
    { month: "Abr", value: 83 },
    { month: "Mai", value: 89 },
  ];

  return (
    <section id="preview" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-green-400">
          Um gostinho do seu Painel
        </h2>
        <p className="text-gray-400">
          No seu dashboard você acompanha tudo isso em tempo real.
        </p>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-6"
          >
            {s.icon}
            <h3 className="mt-4 text-2xl font-semibold">{s.value}</h3>
            <p className="text-gray-400">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Mini-gráfico de evolução */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
        >
          <h4 className="text-lg text-green-400 mb-4">
            Sua evolução ao longo dos meses
          </h4>
          <MiniChart data={chartData} />
        </motion.div>
      </div>
    </section>
  );
}

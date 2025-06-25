// pages/area-aluno.js
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bell, User, Menu, X } from "lucide-react";

export default function AreaAluno() {
  const [user, setUser] = useState({ name: "Aluno" });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user") || "null");
    if (!stored) window.location.href = "/login";
    else setUser(stored);
  }, []);

  const progressData = [
    { month: "Jan", performance: 65 },
    { month: "Fev", performance: 72 },
    { month: "Mar", performance: 80 },
    { month: "Abr", performance: 85 },
    { month: "Mai", performance: 90 },
    { month: "Jun", performance: 95 },
  ];

  const weeklyPlan = [
    {
      day: "Segunda",
      e1: "Supino 4x10",
      e2: "Rosca 3x12",
      e3: "Abdominal 3x15",
    },
    {
      day: "Terça",
      e1: "Agachamento 4x10",
      e2: "Leg Press 3x12",
      e3: "Panturrilha 4x15",
    },
    {
      day: "Quarta",
      e1: "Remada 4x10",
      e2: "Puxada 3x12",
      e3: "Prancha 3x60s",
    },
    {
      day: "Quinta",
      e1: "Desenvolvimento 4x10",
      e2: "Elevação Lateral 3x12",
      e3: "Alongamento 10min",
    },
    {
      day: "Sexta",
      e1: "Levantamento Terra 4x8",
      e2: "Stiff 3x12",
      e3: "Abdominal 3x15",
    },
    { day: "Sábado", e1: "Cardio 30min", e2: "-", e3: "Alongamento 10min" },
    { day: "Domingo", e1: "Descanso", e2: "-", e3: "-" },
  ];

  return (
    <>
      <Head>
        <title>Área do Aluno - {user.name}</title>
      </Head>

      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Sidebar Mobile */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed z-40 w-64 h-full bg-white shadow-lg lg:relative lg:translate-x-0"
            >
              <div className="flex items-center justify-between h-16 px-4 border-b">
                <Image
                  src="/images/logo-dieisson.png"
                  width={120}
                  height={40}
                  alt="Logo Dieisson"
                />
                <button onClick={() => setSidebarOpen(false)}>
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              <nav className="p-6 space-y-4">
                {[
                  {
                    icon: <User size={20} />,
                    label: "Dashboard",
                    href: "/area-aluno",
                  },
                  {
                    icon: <User size={20} />,
                    label: "Meus Planos",
                    href: "/area-aluno#planos",
                  },
                  {
                    icon: <User size={20} />,
                    label: "Meus Treinos",
                    href: "/area-aluno#treinos",
                  },
                  {
                    icon: <Bell size={20} />,
                    label: "Vídeos Explicativos",
                    href: "/area-aluno#videos",
                  },
                ].map(({ icon, label, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-3 text-gray-700 hover:text-green-500 p-2 rounded-md transition"
                  >
                    {icon}
                    <span className="font-medium">{label}</span>
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-auto lg:pl-64">
          {/* Topbar */}
          <div className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden text-gray-600"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold">Olá, {user.name}</h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative">
                <Bell size={24} className="text-gray-600 hover:text-gray-800" />
                <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              </button>
              <div className="flex items-center gap-2">
                <User size={24} className="text-gray-600" />
                <span className="font-medium text-gray-800">{user.name}</span>
              </div>
            </div>
          </div>

          <main className="p-6 space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Planos Ativos", value: "2" },
                { title: "Treinos Concluídos", value: "18" },
                { title: "Vídeos Assistidos", value: "12" },
              ].map(({ title, value }) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow hover:shadow-lg transition h-32"
                >
                  <p className="text-3xl font-bold text-green-500">{value}</p>
                  <p className="text-sm text-gray-500 mt-2">{title}</p>
                </motion.div>
              ))}
            </div>

            {/* Progress Chart */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-lg font-medium mb-4">Progresso Mensal</h3>
              <div className="h-48">
                <ResponsiveContainer>
                  <LineChart
                    data={progressData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="performance"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.section>

            {/* Próximos Treinos */}
            <section id="treinos" className="space-y-4">
              <h3 className="text-xl font-semibold">Próximos Treinos</h3>
              <ul className="space-y-2">
                {[
                  { name: "Treino A - Peito & Bíceps", date: "15/05 às 18:00" },
                  {
                    name: "Treino B - Costas & Tríceps",
                    date: "17/05 às 17:00",
                  },
                ].map(({ name, date }, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-gray-500">
                        Agendado para {date}
                      </p>
                    </div>
                    <button className="bg-green-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition">
                      Detalhes
                    </button>
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* Planilha de Treinos Semanal */}
            <section id="planilha" className="space-y-4">
              <h3 className="text-xl font-semibold">
                Planilha de Treinos Semanal
              </h3>
              <div className="overflow-x-auto bg-white p-6 rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Dia
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Exercício 1
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Exercício 2
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Exercício 3
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {weeklyPlan.map(({ day, e1, e2, e3 }, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          {day}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          {e1}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          {e2}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          {e3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

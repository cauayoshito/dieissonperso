// components/ProjectsSection.js
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsSection({ items }) {
  const [active, setActive] = useState("All");
  const categories = ["All", ...new Set(items.map((i) => i.category))];
  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      {/* Filtro de categorias */}
      <div className="flex gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-full border ${
              active === cat
                ? "border-neonGreen bg-neonGreen/20 text-neonGreen"
                : "border-gray-700 text-gray-400 hover:border-gray-500"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            whileHover={{ y: -5, scale: 1.03 }}
          >
            {/* Borda neon degradê */}
            <div className="p-[2px] rounded-xl bg-gradient-to-tr from-neonGreen to-neonBlue">
              {/* Fundo escuro com blur */}
              <div
                className="
                  bg-black/70 backdrop-blur-md
                  rounded-lg overflow-hidden
                  flex flex-col h-full
                  shadow-lg group-hover:shadow-neon transition-shadow
                "
              >
                {/* Aí vem a sua imagem */}
                {p.image && (
                  <div className="w-full h-48 mb-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                )}

                {/* Conteúdo textual */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-300 text-sm flex-1">{p.subtitle}</p>
                  <span
                    className="
                      mt-4 inline-block
                      px-4 py-2 rounded-full
                      border border-neonBlue text-neonBlue
                      hover:bg-neonBlue/20 transition
                    "
                  >
                    View Project
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

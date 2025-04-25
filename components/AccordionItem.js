import { useState } from "react";
import { motion } from "framer-motion";

export default function AccordionItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl shadow-md p-6 transition-all duration-300">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full text-left text-lg font-semibold text-green-400 focus:outline-none"
      >
        {pergunta}
        <span className="float-right">{aberto ? "−" : "+"}</span>
      </button>
      {aberto && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="mt-2 text-gray-300 overflow-hidden"
        >
          {resposta}
        </motion.div>
      )}
    </div>
  );
}

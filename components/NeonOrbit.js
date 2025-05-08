// components/NeonOrbit.js
import { motion } from "framer-motion";

export default function NeonOrbit({ items, radius = 140 }) {
  return (
    <motion.div
      className="relative w-[300px] h-[300px] mx-auto my-16"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {items.map((item, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return (
          <motion.a
            key={i}
            href={item.link}
            className="absolute neon"
            style={{
              top: "50%",
              left: "50%",
              translateX: `${x}px`,
              translateY: `${y}px`,
            }}
            whileHover={{ scale: 1.2 }}
          >
            {item.name}
          </motion.a>
        );
      })}
    </motion.div>
  );
}

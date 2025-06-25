import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

// Apenas um exemplo de 3 depoimentos:
const TESTIMONIALS = [
  { type: "video", src: "/videos/trailer.mp4", alt: "Alunos em ação" },
  { type: "image", src: "/images/antes-depois.jpg", alt: "Antes e Depois" },
  {
    type: "image",
    src: "/images/personal-aluno.jpg",
    alt: "Dieisson com aluno",
  },
];

export default function Testimonials() {
  const [ref] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <section id="depoimentos" className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        O que dizem nossos alunos
      </h2>
      <div ref={ref} className="keen-slider max-w-4xl mx-auto">
        {TESTIMONIALS.map((item, idx) => (
          <motion.div
            key={idx}
            className="keen-slider__slide flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                className="rounded-xl shadow-lg max-h-96"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={350}
                className="rounded-xl shadow-lg object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

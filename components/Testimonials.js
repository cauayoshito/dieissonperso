import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    type: "mockup",
    videoSrc: "/videos/dd-perso.mp4",
    alt: "Dieisson explicando o método",
  },
];

export default function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <section id="resultados" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-400">
          Resultados que falam por si
        </h2>

        <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Mockup com vídeo embutido - telas md+ */}
              <div className="hidden md:block relative w-[360px] h-[740px]">
                <video
                  src={item.videoSrc}
                  controls
                  playsInline
                  className="absolute top-[8%] left-[10%] w-[80%] h-[84%] object-cover rounded-[24px] z-10"
                />
              </div>

              {/* Mobile: só o vídeo */}
              <div className="md:hidden w-full flex justify-center">
                <video
                  src={item.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="rounded-xl max-w-[360px] shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

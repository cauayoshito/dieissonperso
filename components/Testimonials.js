import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    type: "youtube",
    youtubeId: "AU-M5wIMDPY",
    alt: "Dieisson explicando o método",
  },
];

export default function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <section id="resultados" className="py-20 mb-20 bg-black text-white">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-green-500">MÉTODO DV</h2>
        <p className="text-xl text-gray-300 mt-4">
          Conectando Mentes, Transformando Resultados
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto mt-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Mockup com iframe embutido (telas md+) */}
            <div className="hidden md:block relative w-[360px] h-[740px] bg-black rounded-[40px] border-4 border-green-600 shadow-xl overflow-hidden">
              <iframe
                loading="lazy"
                src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                className="absolute top-[8%] left-[10%] w-[80%] h-[84%] rounded-[24px]"
                title={item.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Mobile: iframe simples */}
            <div className="md:hidden w-full flex justify-center">
              <div className="aspect-video w-full max-w-[360px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  loading="lazy"
                  src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                  className="w-full h-full"
                  title={item.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

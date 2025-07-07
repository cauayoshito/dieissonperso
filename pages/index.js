// pages/index.js
import Head from "next/head";
import { ChevronRight, Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import DashboardPreview from "@/components/DashboardPreview";
import VideoPreview from "@/components/VideoPreview";
import Testimonials from "@/components/Testimonials";
import { VIDEO_SERIES } from "@/data/videoSeries";

export default function Home() {
  const [sliderRefTransform] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      "(min-width: 768px)": { perView: 2, spacing: 24 },
      "(min-width: 1024px)": { perView: 3, spacing: 32 },
    },
  });
  const [sliderRefCom, instanceRefCom] = useKeenSlider({
    loop: true,
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { perView: 2.2, spacing: 16 },
      "(min-width: 1024px)": { perView: 3.2, spacing: 24 },
    },
  });

  return (
    <>
      <Head>
        <title>Dieisson Vasques | Personal Trainer</title>
        <meta
          name="description"
          content="Treinos presenciais e online com acompanhamento profissional."
        />
      </Head>

      <Header />
      <main className="pt-24 bg-gray-950 text-white">
        {/* === HERO === */}
        <section
          id="hero"
          className="bg-gray-950 text-white pt-28 pb-16 px-6 relative"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Texto com animação */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Seu estilo de vida saudável começa aqui
              </h1>
              <p className="text-lg text-gray-300">
                Acesse uma plataforma exclusiva com treinos online de alta
                performance para queimar gordura, ganhar massa e sair do
                sedentarismo de vez. Aulas guiadas por Dieisson Vasques,
                personal com resultados reais, em um sistema 100% prático,
                flexível e sob demanda. Treine no seu ritmo, com suporte direto
                no WhatsApp e novos treinos toda semana.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#planos"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold transition"
                >
                  Ver Planos
                </a>
                <motion.a
                  href="https://wa.me/5571997012010"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold transition"
                >
                  <BsWhatsapp size={16} />
                  Fale no WhatsApp
                  <ChevronRight size={16} />
                </motion.a>
              </div>
            </motion.div>

            {/* Imagem com animação */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="absolute bottom-0 w-64 h-6 bg-green-500 opacity-30 blur-2xl rounded-full z-0" />
              <Image
                src="/images/personal.jpg"
                alt="Dieisson Vasques demonstrando alongamento"
                width={400}
                height={400}
                className="relative z-10 rounded-2xl drop-shadow-[0_0_40px_#22c55e] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* === QUEM É DIEISSON === */}
        <section id="sobre" className="py-20 px-6 bg-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
              Quem é Dieisson Vasques?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Formado em Educação Física pela Universidade Federal do Rio Grande
              do Sul (UFRGS) Licenciatura e Bacharelado. Mestrado e atualmente
              Doutorando no Programa de Pós-Graduação em Ciências do Movimento
              Humano (PPGCMH) na Universidade Federal do Rio Grande do Sul
              (UFRGS). Como formação complementar possui certificação em
              Treinamento Funcional pelo CFSC (Certified Functional Strength
              Coach) e Instrutor de Hatha Yoga.
            </p>
          </div>
        </section>

        {/* === PARCERIA COM A NUTRI === */}
        <section id="nutri" className="py-20 px-6 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Imagem da nutricionista */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/images/nutri.jpg"
                alt="Nutricionista Dra. Bruna Lacerda"
                width={400}
                height={400}
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>

            {/* Texto sobre a nutricionista */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-green-400">
                Parceria com Dra. Bruna Lacerda
              </h2>
              <p className="text-lg text-gray-300">
                Nutricionista formada pela Pontifícia Universidade Católica do
                Rio Grande do Sul (PUCRS). Aperfeiçoamento profissional em
                Endocrinologia pelo Hospital de Clínicas de Porto Alegre (HCPA),
                especialista em Nutrição na Saúde Pública pela Faculdade Porto
                União. Educadora em Diabetes pela ADJ/SBD/IDF. Mestranda em
                Medicina: Hepatologia pela Universidade Federal de Ciências da
                Saúde de Porto Alegre (UFCSPA). Minha abordagem nas consultas
                visam promover a qualidade de vida e autonomia alimentar.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>📋 Avaliação nutricional completa</li>
                <li>🥗 Planejamento de refeições personalizado</li>
                <li>💡 Suporte e adaptações semanais</li>
                <li>🌱 Ênfase em alimentos orgânicos e integrais</li>
              </ul>
              <a
                href="https://wa.me/5571997012010?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+nutri%C3%A7%C3%A3o"
                className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold transition"
              >
                Fale com a Nutricionista
              </a>
            </motion.div>
          </div>
        </section>
        {/* === COMUNIDADE EM AÇÃO === */}
        <section
          id="comunidade"
          className="py-20 px-6 bg-black text-center relative"
        >
          <div className="max-w-6xl mx-auto space-y-6 relative">
            <h2 className="text-3xl font-bold text-green-500">
              Comunidade em Ação
            </h2>
            <p className="text-gray-400">
              Veja membros reais treinando — e compartilhe o seu usando{" "}
              <strong>#DVTraining</strong>!
            </p>

            {/* Wrapper do carrossel com botões sobrepostos */}
            <div className="relative">
              {/* Carrossel */}
              <div ref={sliderRefCom} className="keen-slider px-4">
                {[
                  {
                    src: "/videos/trailer.mp4",
                    author: "Gustavo",
                    quote: "Sensacional esse HIIT, me deu um gás incrível!",
                  },
                  {
                    src: "/videos/pre.mp4",
                    author: "Solineide",
                    quote: "Minha mobilidade nunca foi tão boa.",
                  },
                  {
                    src: "/videos/pre2.mp4",
                    author: "Igor",
                    quote: "Excelente para força e coordenação.",
                  },
                  {
                    src: "/videos/funcional.mp4",
                    author: "Diego",
                    quote:
                      "Recuperei meu condicionamento com os treinos funcionais!",
                  },
                  {
                    src: "/videos/funcional2.mp4",
                    author: "Grupo",
                    quote: "Nunca imaginei que treinar fosse tão divertido.",
                  },
                  {
                    src: "/videos/joao.mp4",
                    author: "Grupo",
                    quote: "Agora treino toda semana com foco e disciplina.",
                  },
                  {
                    src: "/videos/juliana.mp4",
                    author: "Grupo",
                    quote: "Ganhei força e perdi o medo da academia.",
                  },
                  {
                    src: "/videos/maria.mp4",
                    author: "Nadia",
                    quote:
                      "Voltei a treinar depois de anos parada, graças ao suporte!",
                  },
                ].map((item, i) => (
                  <div key={i} className="keen-slider__slide px-4">
                    <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                      <video
                        src={item.src}
                        poster={item.poster}
                        controls
                        className="w-full h-full object-contain"
                        aria-label={`Vídeo de ${item.author}`}
                      />
                    </div>
                    <div className="mt-4 space-y-1 text-center">
                      <p className="text-white font-semibold">{item.author}</p>
                      <p className="text-gray-300 italic text-sm">
                        “{item.quote}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botões flutuantes laterais */}
              <button
                onClick={() => instanceRefCom.current?.prev()}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full shadow transition z-10"
              >
                ←
              </button>
              <button
                onClick={() => instanceRefCom.current?.next()}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full shadow transition z-10"
              >
                →
              </button>
            </div>

            <a
              href="https://instagram.com/dieissonvasques"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition"
            >
              Compartilhe seu treino #DVTraining
            </a>
          </div>
        </section>

        {/* === PREVIEW DO PAINEL (DASHBOARD) === */}
        <DashboardPreview />

        <section id="biblioteca" className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-green-400 mb-10">
              Biblioteca de Vídeos
            </h2>

            {/* preview leve das séries */}
            <VideoPreview series={VIDEO_SERIES} />

            <p className="mt-4 text-center text-gray-400">
              Acesso completo aos vídeos incluso no plano. Clique em “Quero esse
              plano” para assinar.
            </p>
          </div>
        </section>

        {/* === DEPOIMENTOS (NEW) === */}
        <Testimonials />

        {/* === PLANOS === */}
        <section id="planos" className="py-20 px-6 bg-gray-950 text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-400">
            Escolha o plano ideal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                titulo: "Presencial",
                preco: "A partir de R$ 950/mês",
                beneficios: [
                  "Avaliação funcional do movimento – FMS e Bioimpedância",
                  "Atendimento presencial (academia ou condomínio)",
                  "Treinos adaptados às suas necessidades",
                  "Acompanhamento de perto, ideal para motivação",
                ],
                destaque: false,
                link: "https://wa.me/5571997012010?text=Tenho+interesse+no+plano+presencial",
              },
              {
                titulo: "Online",
                preco: "A partir de R$ 200/mês",
                beneficios: [
                  "Acesso aos conteúdos da plataforma",
                  "Ficha de treino personalizada pelo MFIT",
                  "Contato direto via WhatsApp para dúvidas (retorno em até 24 h)",
                ],
                destaque: false,
                link: "https://wa.me/5571997012010?text=Tenho+interesse+no+plano+online",
              },
              {
                titulo: "Premium",
                preco: "A partir de R$ 500/mês",
                beneficios: [
                  "Ficha de treino individualizada pelo MFIT",
                  "Acesso aos conteúdos da plataforma",
                  "Contato direto via WhatsApp para dúvidas (retorno em até 24 h)",
                  "Consulta com nutricionista + plano alimentar",
                ],
                destaque: true,
                link: "https://wa.me/5571997012010?text=Tenho+interesse+no+plano+premium+com+consulta",
              },
            ].map((plano, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-xl p-6 border ${
                  plano.destaque
                    ? "bg-green-600 border-green-300 text-white"
                    : "bg-gray-900 border-green-600"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    plano.destaque ? "text-white" : "text-green-400"
                  }`}
                >
                  {plano.titulo}
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-left mb-4">
                  {plano.beneficios.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <p
                  className={`font-bold text-xl mb-4 ${
                    plano.destaque ? "text-white" : "text-green-400"
                  }`}
                >
                  {plano.preco}
                </p>
                <a
                  href={plano.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block ${
                    plano.destaque
                      ? "bg-white text-green-700 hover:bg-gray-200"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  } py-2 px-4 rounded-full transition font-semibold`}
                >
                  Quero esse plano
                </a>
              </div>
            ))}
          </div>

          {/* 🔥 NOVO BLOCO DE SERVIÇO DE R$60 */}
          <div className="mt-12 text-center max-w-2xl mx-auto bg-gray-900 border border-green-700 rounded-xl p-6 shadow-lg">
            <p className="text-lg text-white mb-2">
              Quer apenas acesso aos vídeos da plataforma sem plano
              personalizado?
            </p>
            <p className="text-xl font-bold text-green-400 mb-4">
              Acesso completo por apenas R$ 60/mês
            </p>
            <a
              href="https://wa.me/5571997012010?text=Olá%2C+tenho+interesse+em+assinar+apenas+o+acesso+aos+vídeos+da+plataforma+por+R%24+60%2Fmês"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Assinar acesso à plataforma
            </a>
          </div>
        </section>
        {/* === FAQ ACORDION === */}
        <section id="faq" className="py-20 px-6 bg-gray-950 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Preciso ter experiência prévia?",
                  a: "Não! Cada série de vídeos é graduada do iniciante ao avançado, você escolhe seu ritmo.",
                },
                {
                  q: "Como funciona o modelo “Netflix” de treinos?",
                  a: "Você navega por categorias (Yoga, HIIT, Musculação, Alongamento), escolhe o vídeo e treina quando quiser.",
                },
                {
                  q: "Posso mudar de plano depois?",
                  a: "Sim! Basta falar conosco e ajustamos seu acesso em até 24h, sem custo extra.",
                },
                {
                  q: "Tenho dúvidas sobre nutrição, como funciona?",
                  a: "Contamos com nossa parceira nutricionista para planos alimentares — você contrata à parte ou já inclui no Premium.",
                },
              ].map(({ q, a }, idx) => (
                <details key={idx} className="bg-gray-900 rounded-lg p-4 group">
                  <summary className="cursor-pointer flex justify-between items-center font-medium">
                    {q}
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-300">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === CONTATO PROFISSIONAL === */}
        <section id="contato" className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-green-400">
              Fale com a equipe Dieisson Vasques
            </h2>
            <p className="text-lg text-gray-300">
              Tem dúvidas sobre os planos, como funciona o suporte ou quer ajuda
              para começar? Nossa equipe está pronta para te atender no WhatsApp
              ou te receber no Instagram com conteúdos e bastidores. Entre em
              contato agora e dê o primeiro passo rumo à sua melhor versão.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5571997012010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full transition"
              >
                <BsWhatsapp size={20} />
                Falar com a equipe
              </a>
              <a
                href="https://instagram.com/dieissonvasques"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full transition"
              >
                <Instagram size={20} />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

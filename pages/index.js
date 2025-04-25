import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import AccordionItem from "@/components/AccordionItem";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
          <Image
            src="/images/logo-robert.png"
            alt="Logo Robert Emanuel"
            width={120}
            height={60}
          />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>

          <nav className="space-x-6 hidden md:flex">
            <a
              href="#sobre"
              className="text-white hover:text-green-400 transition"
            >
              Sobre
            </a>
            <a
              href="#transformacoes"
              className="text-white hover:text-green-400 transition"
            >
              Resultados
            </a>
            <a
              href="#planos"
              className="text-white hover:text-green-400 transition"
            >
              Planos
            </a>
            <a
              href="#faq"
              className="text-white hover:text-green-400 transition flex items-center gap-1"
            >
              <HelpCircle size={18} />
              FAQ
            </a>

            <a
              href="#contato"
              className="text-white hover:text-green-400 transition"
            >
              Contato
            </a>
          </nav>

          <motion.a
            href="https://wa.me/5571981977447"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hidden md:inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 transition text-sm md:text-base"
          >
            Fale no WhatsApp
          </motion.a>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black text-center px-6 py-4 space-y-4">
            <a
              href="#sobre"
              className="block text-white hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#transformacoes"
              className="block text-white hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#planos"
              className="block text-white hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#faq"
              className="block text-white hover:text-green-400 flex justify-center items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <HelpCircle size={18} />
              FAQ
            </a>

            <a
              href="#contato"
              className="block text-white hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
            <motion.a
              href="https://wa.me/5571981977447"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 transition text-sm"
            >
              Fale no WhatsApp
            </motion.a>
          </div>
        )}
      </header>

      <main
        className="pt-28 text-white relative"
        style={{
          backgroundImage: "url('/images/bg-academia.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />
        <div className="relative z-10">
          <section className="py-20 px-6 bg-transparent text-white relative">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold">
                  Pronto para alcançar seus objetivos?
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-xl">
                  Não perca mais tempo com treinos genéricos. Tenha um plano
                  personalizado, focado nos seus resultados e com acompanhamento
                  profissional em cada etapa.
                </p>
                <motion.a
                  href="#planos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-full text-lg hover:bg-green-500 transition"
                >
                  Conheça o plano ideal pra você
                </motion.a>
              </div>
              <div className="relative flex justify-center md:justify-end">
                <div className="absolute bottom-0 w-64 h-6 bg-green-500 opacity-30 blur-2xl rounded-full z-0"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-[rgba(0,0,0,0.4)] backdrop-blur-sm p-4 rounded-2xl z-10"
                >
                  <Image
                    src="/images/foto-robert.png"
                    alt="Robert Emanuel"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover drop-shadow-[0_0_40px_#22c55e]"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </section>
          <section id="sobre" className="py-16 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                Quem é Robert Emanuel?
              </h2>
              <p className="text-gray-300 text-lg">
                Sou Robert, bacharel em Educação Física com especialização em
                Biomecânica Aplicada ao Exercício. Com 25 anos e mais de 7 anos
                de experiência prática na área de musculação, dedico minha
                carreira à aplicação de princípios científicos para otimizar o
                desempenho físico e promover a saúde de meus alunos Acredito que
                um treino eficiente vai muito além de levantar pesos: ele
                envolve conhecimento, técnica, constância e, acima de tudo,
                propósito. E é exatamente isso que busco proporcionar a cada
                pessoa que confia no meu trabalho. Se você quer treinar com
                segurança, resultado e acompanhamento de verdade, seja
                bem-vindo, vamos evoluir juntos!
              </p>
              <p className="text-green-400 mt-4 font-medium">
                CREF 016317-G/BA
              </p>
            </div>
          </section>
          <section
            id="transformacoes"
            className="py-16 px-6 bg-transparent text-white"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-green-500 mb-10">
                Transformações Reais
              </h2>
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide bg-gray-900 rounded-xl overflow-hidden text-white border border-transparent hover:border-green-500 hover:shadow-[0_0_25px_#22c55e] transition-all duration-300">
                  <Image
                    src="/images/antes1.jpg"
                    alt="Antes e depois Juliana"
                    width={400}
                    height={360}
                    className="w-full h-[360px] object-cover object-top rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Juliana Caldeira.
                    </h3>
                    <p className="text-sm text-gray-300 italic">
                      “Eliminei 12kg com os treinos do Robert. Mudou minha
                      vida!”
                    </p>
                    <a
                      href="#planos"
                      className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      Ver plano semelhante
                    </a>
                  </div>
                </div>

                <div className="keen-slider__slide bg-gray-900 rounded-xl overflow-hidden text-white border border-transparent hover:border-green-500 hover:shadow-[0_0_25px_#22c55e] transition-all duration-300">
                  <Image
                    src="/images/antes2.jpg"
                    alt="Antes e depois Victor"
                    width={400}
                    height={360}
                    className="w-full h-[360px] object-cover object-center rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Victor Cruz.</h3>
                    <p className="text-sm text-gray-300 italic">
                      “Voltei a treinar aos 30 anos e nunca me senti tão bem!”
                    </p>
                    <a
                      href="#planos"
                      className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      Ver treino adaptado
                    </a>
                  </div>
                </div>

                <div className="keen-slider__slide bg-gray-900 rounded-xl overflow-hidden text-white border border-transparent hover:border-green-500 hover:shadow-[0_0_25px_#22c55e] transition-all duration-300">
                  <Image
                    src="/images/antes3.jpg"
                    alt="Antes e depois Diego"
                    width={400}
                    height={360}
                    className="w-full h-[360px] object-cover object-center rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Diego Ferreira.
                    </h3>
                    <p className="text-sm text-gray-300 italic">
                      “Foco, adaptação e resultado rápido. Superou minhas
                      expectativas.”
                    </p>
                    <a
                      href="#planos"
                      className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      Conheça o método
                    </a>
                  </div>
                </div>

                <div className="keen-slider__slide bg-gray-900 rounded-xl overflow-hidden text-white border border-transparent hover:border-green-500 hover:shadow-[0_0_25px_#22c55e] transition-all duration-300">
                  <Image
                    src="/images/antes4.jpg"
                    alt="Antes e depois Jeane"
                    width={400}
                    height={360}
                    className="w-full h-[360px] object-cover object-center rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Jeane Assis.</h3>
                    <p className="text-sm text-gray-300 italic">
                      “Emagreci, ganhei disposição e autoestima. Treinar com
                      Robert foi essencial.”
                    </p>
                    <a
                      href="#planos"
                      className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      Veja o plano usado
                    </a>
                  </div>
                </div>

                <div className="keen-slider__slide bg-gray-900 rounded-xl overflow-hidden text-white border border-transparent hover:border-green-500 hover:shadow-[0_0_25px_#22c55e] transition-all duration-300">
                  <Image
                    src="/images/antes5.jpg"
                    alt="Antes e depois Luciola"
                    width={400}
                    height={360}
                    className="w-full h-[360px] object-cover object-center rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Luciola Dias.
                    </h3>
                    <p className="text-sm text-gray-300 italic">
                      “Resultados em poucas semanas. Acompanhamento de verdade
                      faz diferença.”
                    </p>
                    <a
                      href="#planos"
                      className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      Ver plano personalizado
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          <section
            id="planos"
            className="py-20 px-6 bg-gray-950 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-10 text-green-400">
              Escolha o plano ideal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Online */}
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-green-600">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                  Consultoria Online
                </h3>
                <p className="text-gray-300 mb-4">
                  • Planilha de treinamento personalizada de acordo com seu
                  objetivo
                  <br />• Anamnese e avaliação postural
                  <br />• Treino via app com vídeos e explicações
                  <br />• Suporte direto com Robert pela plataforma
                </p>
                <p className="text-green-400 font-bold text-xl mb-4">
                  A partir de R$ 149,90/mês
                </p>
                <a
                  href="https://wa.me/5571981977447?text=Olá%2C+tenho+interesse+na+Consultoria+Online+a+partir+de+R%24149%2C90+mensal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition"
                >
                  Quero esse plano
                </a>
              </div>

              {/* Card 2 - Presencial */}
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-green-600">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                  Consultoria Presencial
                </h3>
                <p className="text-gray-300 mb-4">
                  • Atendimento presencial (academia ou condomínio)
                  <br />• Anamnese e avaliação postural
                  <br />• Treino disponível no aplicativo
                  <br />• Atenção especial às alterações posturais e
                  biomecânicas
                  <br />• Ideal para quem precisa de motivação
                </p>
                <p className="text-xs text-gray-400 italic mb-2">
                  *Sujeito a valor adicional conforme a academia.
                </p>
                <p className="text-green-400 font-bold text-xl mb-4">
                  A partir de R$ 599/mês
                </p>
                <a
                  href="https://wa.me/5571981977447?text=Oi+Robert%2C+quero+falar+sobre+o+Plano+Presencial+a+partir+de+R%24599%2C00%2Fmensal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition"
                >
                  Quero esse plano
                </a>
              </div>

              {/* Card 3 - Premium */}
              <div className="bg-green-600 rounded-xl shadow-xl p-6 border-4 border-green-300">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Consultoria Premium
                </h3>
                <p className="text-white mb-4">
                  • Planilha de treinamento personalizada de acordo com seu
                  objetivo
                  <br />• Anamnese e avaliação postural
                  <br />• Treino via app com vídeos e explicações
                  <br />• Suporte direto com Robert pela plataforma
                  <br />• Guia para emagrecimento e manutenção de massa muscular
                  <br />• Consulta Ortomolecular online + suporte de 30 dias
                </p>
                <p className="text-xs text-white/70 italic mb-2">
                  *Consultar mais informações sobre a consulta
                </p>
                <p className="text-white font-bold text-xl line-through opacity-60">
                  R$ 500/mês
                </p>
                <p className="text-white font-bold text-2xl mb-4">
                  R$ 379,90/mês
                </p>
                <a
                  href="https://wa.me/5571981977447?text=Olá%2C+gostaria+de+saber+mais+sobre+a+Consultoria+Premium+com+desconto+de+R%24500+por+R%24379%2C90!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-gray-200 text-green-700 font-semibold py-2 px-4 rounded-full transition"
                >
                  Quero esse plano
                </a>
              </div>
            </div>
          </section>
          <section className="py-20 px-6 bg-gray-950 text-white relative">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center md:justify-start">
                <div className="absolute w-64 h-6 bg-green-500 opacity-30 blur-2xl rounded-full bottom-0 z-0" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-[rgba(0,0,0,0.0)] backdrop-blur-sm p-4 rounded-2xl z-10"
                >
                  <Image
                    src="/images/consulta-maria-paula.png"
                    alt="Maria Paula Costa"
                    width={400}
                    height={400}
                    className="rounded-2xl drop-shadow-[0_0_40px_#22c55e] bg-transparent"
                    priority
                  />
                </motion.div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
                  Consulta Ortomolecular Personalizada
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Sou <strong>Maria Paula</strong>, fisioterapeuta com
                  especialização em Estética Avançada e Ortomolecular. Minha
                  missão vai além da estética: ajudo pessoas a resgatarem sua
                  autoestima — com saúde e individualidade.
                  <br />
                  <br />
                  Na vertente ortomolecular do meu trabalho, aplico uma
                  abordagem integrativa para otimizar emagrecimento, hipertrofia
                  e performance. Através da análise dos desequilíbrios
                  bioquímicos e metabólicos, atuo na regulação hormonal, no
                  controle da inflamação, na melhora da absorção de nutrientes
                  essenciais, na resposta metabólica e imunológica.
                  <br />
                  <br />
                  Meu objetivo é alinhar estética e saúde. Cada protocolo é
                  desenhado sob medida, respeitando as necessidades de cada
                  cliente, porque resultados extraordinários não nascem do acaso
                  — nascem da estratégia certa.
                </p>
                <p className="text-green-400 font-semibold text-sm mb-4">
                  CREFITO 410484-F
                </p>
                <motion.a
                  href="https://wa.me/5571981977447"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold shadow-md"
                >
                  Quero agendar minha consulta
                </motion.a>
              </div>
            </div>
          </section>
          <section
            id="faq"
            className="py-20 px-6 text-white relative"
            style={{
              backgroundImage: "url('/images/bg-academia.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-green-400 text-center mb-10">
                Perguntas Frequentes
              </h2>
              <div className="space-y-6">
                {[
                  {
                    pergunta: "Preciso já ter experiência para começar?",
                    resposta:
                      "Não! Os treinos são adaptados para qualquer nível, incluindo iniciantes absolutos.",
                  },
                  {
                    pergunta: "O plano online funciona mesmo?",
                    resposta:
                      "Sim! Você receberá treinos personalizados, acompanhamento direto e materiais via app.",
                  },
                  {
                    pergunta: "Consigo treinar mesmo com pouco tempo?",
                    resposta:
                      "Claro! Os treinos são ajustados conforme sua rotina — com foco no máximo resultado no menor tempo.",
                  },
                  {
                    pergunta: "Os treinos incluem orientação alimentar?",
                    resposta:
                      "Apenas no Plano Premium, você recebe um e-book exclusivo com orientações práticas para melhorar sua alimentação no dia a dia. É um material complementar que te ajuda a potencializar os resultados do treino.",
                  },
                  {
                    pergunta: "O acompanhamento é feito por quanto tempo?",
                    resposta:
                      "Enquanto durar seu plano. Você terá suporte contínuo via WhatsApp e avaliações conforme o tipo de plano escolhido.",
                  },
                  {
                    pergunta: "Posso trocar de plano depois de começar?",
                    resposta:
                      "Sim! Você pode migrar para outro plano quando quiser. É só falar comigo e ajustamos o melhor caminho pra você.",
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    pergunta={faq.pergunta}
                    resposta={faq.resposta}
                  />
                ))}
              </div>
            </div>
          </section>
          <section
            id="contato"
            className="py-20 px-6 bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-whatsapp.png')] bg-cover bg-center blur-sm" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto pra começar sua transformação?
              </h2>
              <p className="mb-6 text-lg text-white/90">
                Fale diretamente comigo no WhatsApp. Vamos juntos traçar o
                melhor caminho para alcançar seus objetivos com segurança e
                resultado.
              </p>
              <div className="flex justify-center mb-6">
                <div className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full shadow-md border border-green-300 text-sm md:text-base animate-pulse">
                  ⭐ +100 alunos transformados com acompanhamento profissional
                </div>
              </div>

              <motion.a
                href="https://wa.me/5571981977447"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-xl hover:bg-green-100 transition text-lg"
              >
                💬 Falar com o Personal
              </motion.a>
              <p className="mt-4 text-sm text-white/70">
                Atendimento rápido via WhatsApp
              </p>

              <div className="mt-8">
                <p className="text-sm text-white/80 mb-2">
                  Prefere falar pelo Instagram?
                </p>
                <a
                  href="https://instagram.com/personalrobertemanuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5zm-4.25 4a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a.88.88 0 110 1.76.88.88 0 010-1.76z" />
                  </svg>
                  @personalrobertemanuel
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

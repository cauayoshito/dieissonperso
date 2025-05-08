import Image from "next/image";

export default function ContactSection() {
  return (
    <footer id="contato" className="bg-primary text-white py-12 text-center">
      <div className="max-w-3xl mx-auto">
        <Image
          src="/images/logo-malsa-color.png"
          alt="Logo Malsa"
          width={120}
          height={40}
          className="mx-auto mb-4"
        />
        <p>CNPJ: 53.050.029/0001-44 - Malsa Assessoria em Investimento Ltda</p>
        <p>Rua Leonor Maria Barbosa, 399 - Portão, Lauro de Freitas - BA</p>
        <div className="mt-4 space-x-6">
          <a href="https://wa.me/71991277777" className="hover:text-accent">
            WhatsApp
          </a>
          <a href="mailto:admin@malsa.com.br" className="hover:text-accent">
            Email
          </a>
        </div>
        <div className="mt-6 space-x-4 text-gray-300">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
        <p className="mt-8 text-gray-400">
          © {new Date().getFullYear()} Malsa Investimentos - Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  );
}

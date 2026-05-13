"use client";

import { useGlobalContext } from "@/context/global_context";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../../public/assets/footerLogo.svg";

export const Footer = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();

  return (
    <footer className="w-full bg-[#FBFBFD] border-t border-[#E5E5EA] relative overflow-hidden">
      {/* --- Gradiente Sutil de Topo (Adiciona profundidade sem sujar o design) --- */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F5F5F7] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* --- SESSÃO SUPERIOR: Navegação e Informação --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Coluna 1: Branding e Descrição */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
              <Image
                alt="Logo do Campeonato Fariasbritense"
                src={FooterLogo}
                width={size.width! < 1024 ? 160 : 180}
                className="h-auto object-contain"
              />
            </div>
            <p className="text-[14px] leading-relaxed text-[#6E6E73] max-w-sm">
              O maior campeonato regional, conectando talentos e promovendo o
              esporte com excelência, tecnologia e paixão.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1D1D1F]">
              Campeonato
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                "Tabela de Jogos",
                "Classificação",
                "Equipes",
                "Regulamento 2023",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[14px] text-[#6E6E73] hover:text-[#0066CC] hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato e Social CTA */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1D1D1F]">
              Fique por dentro
            </h3>
            <p className="text-[14px] text-[#6E6E73] mb-2">
              Acompanhe os resultados e novidades da rodada.
            </p>
            {/* Input Fake de Newsletter/Contato (Traz cara de SaaS/Produto) */}
            <div className="flex items-center w-full max-w-xs bg-white border border-[#D2D2D7] rounded-full p-1 focus-within:border-[#0066CC] focus-within:ring-4 focus-within:ring-[#0066CC]/10 transition-all duration-300 shadow-sm">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-transparent border-none text-[13px] px-4 text-[#1D1D1F] placeholder:text-[#6E6E73] focus:outline-none"
              />
              <button className="bg-[#1D1D1F] text-white text-[12px] font-medium px-4 py-2 rounded-full hover:bg-[#333336] transition-colors duration-300">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* --- SESSÃO INFERIOR: Legal e Copyright --- */}
        <div className="pt-8 border-t border-[#E5E5EA] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[12px] font-medium text-[#6E6E73]">
            <span>© 2023 Campeonato Fariasbritense.</span>
            <span className="hidden md:inline text-[#D2D2D7]">|</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer transition-colors duration-300">
              Todos os direitos reservados.
            </span>
          </div>

          {/* Links Legais Menores */}
          <div className="flex gap-6 text-[12px] font-medium text-[#6E6E73]">
            <Link
              href="#"
              className="hover:text-[#1D1D1F] transition-colors duration-300"
            >
              Termos de Uso
            </Link>
            <Link
              href="#"
              className="hover:text-[#1D1D1F] transition-colors duration-300"
            >
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

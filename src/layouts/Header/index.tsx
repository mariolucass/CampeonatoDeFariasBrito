"use client";

import { NavBar } from "@/components/NavBar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useGlobalContext } from "@/context/global_context";
import { navOptionsList } from "@/data/navOptions";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../../../public/assets/logo.png";

export const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { drawerState, openDrawer, closeDrawer } = useGlobalContext();

  const items = [{ title: "INÍCIO", page: "/" }, ...navOptionsList].map(
    (elem) => {
      const isActive = pathName === elem.page;
      return (
        <li key={elem.title}>
          <Link
            href={elem.page}
            className={`
              flex items-center px-4 py-2 rounded-full text-[14px] font-bold uppercase tracking-widest transition-all duration-300
              ${
                isActive
                  ? "bg-white text-[#1D1D1F] shadow-[0_2px_10px_rgba(255,255,255,0.15)] scale-105" // Pill branca nativa para o item ativo
                  : "text-[#d2d2d6] hover:text-white hover:bg-white/10" // Vidro sutil no hover
              }
            `}
          >
            {elem.title}
          </Link>
        </li>
      );
    },
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-[#1D1D1F]/80 backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
      {/* Container Principal */}
      <div className="flex items-center justify-between px-4 lg:px-8 h-[72px] lg:h-[80px] max-w-7xl mx-auto w-full">
        {/* Hamburguer Dinâmico (Mobile) */}
        <button
          onClick={openDrawer}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-all active:scale-95"
          aria-label="Abrir menu"
        >
          {/* Substituí o SVG estático pelo Menu do Lucide para traços perfeitos e limpos */}
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Logo */}
        <div
          className="h-12 w-32 lg:h-14 lg:w-40 cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105"
          onClick={() => router.push("/")}
        >
          <Image
            src={Logo}
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden lg:flex items-center flex-1 justify-end">
          <ul className="flex items-center gap-2">{items}</ul>
        </nav>
      </div>

      {/* Mobile Sheet Drawer (Mantido limpo) */}
      <Sheet open={drawerState} onOpenChange={(open) => !open && closeDrawer()}>
        <SheetContent
          side="left"
          className="p-0 w-[80%] max-w-xs border-r border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-2xl"
        >
          <NavBar />
        </SheetContent>
      </Sheet>
    </header>
  );
};

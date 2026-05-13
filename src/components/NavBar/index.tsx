import { useGlobalContext } from "@/context/global_context";
import { navOptionsList } from "@/data/navOptions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseNavbar from "../../../public/assets/closeNav.svg";
import LogoNav from "../../../public/assets/logo.png";

export const NavBar = () => {
  const { closeDrawer } = useGlobalContext();
  const pathName = usePathname();

  const allItems = [{ title: "PÁGINA INICIAL", page: "/" }, ...navOptionsList];

  return (
    <div className="relative w-full min-h-full bg-main flex flex-col rounded-r-2xl overflow-hidden">
      {/* Diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Accent line on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-tertiary via-white/20 to-tertiary/40" />

      {/* ── Close button ── */}
      <button
        onClick={closeDrawer}
        className="relative z-10 self-end m-4 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95"
        aria-label="Fechar menu"
      >
        <Image src={CloseNavbar} alt="Fechar" width={16} height={16} />
      </button>

      {/* ── Logo ── */}
      <div className="relative z-10 px-6 pb-4">
        <div className="h-[120px]">
          <Image
            src={LogoNav}
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mx-6 h-px bg-white/15 mb-6" />

      {/* ── Nav links ── */}
      <nav className="relative z-10 flex flex-col px-4 gap-1 flex-1">
        {allItems.map((elem, index) => {
          const isActive = pathName === elem.page;
          return (
            <Link
              key={elem.title}
              href={elem.page}
              onClick={closeDrawer}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-150 active:scale-[0.98]
                ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {/* Active indicator dot */}
              <span
                className={`
                  w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all
                  ${isActive ? "bg-tertiary scale-100" : "bg-white/0 scale-0"}
                `}
              />

              {/* Index number */}
              <span className="text-[10px] font-black tabular-nums text-white/20 w-4 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-black uppercase text-lg tracking-[0.08em] flex-1">
                {elem.title}
              </span>

              {/* Arrow */}
              {isActive && (
                <span className="text-white/40 text-xs font-black">→</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="relative z-10 mx-6 h-px bg-white/15 mt-6 mb-4" />

      {/* ── Footer ── */}
      <div className="relative z-10 px-6 pb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/25">
          © 2023 · Todos os direitos reservados
        </span>
      </div>
    </div>
  );
};

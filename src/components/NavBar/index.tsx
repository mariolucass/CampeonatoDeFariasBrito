import { useGlobalContext } from "@/context/global_context";
import { navOptionsList } from "@/data/navOptions";
import Image from "next/image";
import Link from "next/link";
import CloseNavbar from "../../assets/closeNav.svg";
import LogoNav from "../../assets/logo.png";

export const NavBar = () => {
  const { closeDrawer } = useGlobalContext();
  const renderNavigation = navOptionsList.map((elem) => (
    <li key={elem.title}>
      <Link href={elem.page} className="text-2xl" onClick={closeDrawer}>
        {elem.title}
      </Link>
    </li>
  ));

  return (
    <div className="w-full min-h-full bg-main z-50 flex flex-col gap-3 rounded-r-[12px] lg:hidden">
      <div
        className="absolute right-0 p-4 flex justify-center"
        onClick={closeDrawer}
      >
        <Image src={CloseNavbar} alt="CloseNavbar" />
      </div>

      <div className="mt-16 h-[168px] p-4">
        <Image
          src={LogoNav}
          alt="LogoNav"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="w-[105px] h-[1px] bg-white self-center"></div>

      <ul className="flex flex-col p-4 gap-4 text-white text-xl">
        {renderNavigation}
      </ul>

      <div className="w-[105px] h-[1px] bg-white self-center"></div>

      <div className="flex flex-col p-4 gap-4 text-white text-xl">
        <Link href={"/"} className="text-2xl" onClick={closeDrawer}>
          PÁGINA INICIAL
        </Link>
      </div>

      <div className="absolute bottom-5 p-4 pt-6 text-sm text-white text-center">
        <span>TODOS OS DIREITOS RESERVADOS. 2023</span>
      </div>
    </div>
  );
};

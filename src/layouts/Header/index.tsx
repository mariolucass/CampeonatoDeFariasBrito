"use client";

import { NavBar } from "@/components/NavBar";
import { useGlobalContext } from "@/context/global_context";
import { navOptionsList } from "@/data/navOptions";
import { Drawer } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Burguer from "../../assets/burguer.svg";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { drawerState, openDrawer, closeDrawer } = useGlobalContext();

  const items = [
    {
      component: Logo,
      title: "PÁGINA INICIAL",
      description: "Dashboard",
      page: "/",
    },
    ...navOptionsList,
  ].map((elem, index) => (
    <li
      key={elem.title}
      className={
        pathName === elem.page ? "hover:scale-110 mb-2" : "hover:scale-110"
      }
    >
      <Link href={elem.page} className="text-2xl">
        {elem.title}
      </Link>

      {pathName === elem.page ? (
        <div className="h-1 w-full justify-end items-end flex">
          <div className="bg-white w-[40px] h-1 rounded-lg " />
        </div>
      ) : (
        <></>
      )}
    </li>
  ));

  return (
    <header className="w-full bg-main p-6 flex  lg:justify-around">
      <Image
        src={Burguer}
        alt="logo"
        width={30}
        height={30}
        className="lg:hidden cursor:pointer"
        onClick={openDrawer}
      />

      <Image
        src={Logo}
        alt="logo"
        className="cursor-pointer ml-12 lg:ml-0"
        onClick={() => router.push("/")}
      />

      <Drawer
        open={drawerState}
        onClose={closeDrawer}
        className="w-1/2 rounded-r-[12px] lg:hidden"
      >
        <NavBar />
      </Drawer>

      <ul className="hidden lg:flex lg:gap-8 lg:font-bold lg:text-white lg:items-center lg:justify-center">
        {items}
      </ul>
    </header>
  );
};

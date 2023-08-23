"use client";

import Image from "next/image";

import { useGlobalContext } from "@/context/global_context";
import FooterLogo from "../../assets/footerLogo.svg";

export const Footer = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();
  return (
    <footer className="flex-col w-full justify-center relative bottom-0">
      <div className=" flex w-full bg-footer items-center justify-center">
        <span className="font-bold">TODOS OS DIREITOS RESERVADOS. 2023</span>
      </div>

      <div className="flex w-full justify-center my-4">
        <div className="w-50 p-4">
          <Image
            alt="footerLogo"
            src={FooterLogo}
            width={size.width! < 1024 ? 252 : 308}
          />
        </div>
      </div>
    </footer>
  );
};

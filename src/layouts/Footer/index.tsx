"use client";

import Image from "next/image";

import FooterLogo from "../../assets/footerLogo.svg";

export const Footer = () => {
  return (
    <footer className="flex-col w-full justify-center relative bottom-0">
      <div className=" flex w-full bg-footer items-center justify-center">
        <span className="font-bold">TODOS OS DIREITOS RESERVADOS. 2023</span>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-50 p-4">
          <Image alt="" src={FooterLogo} />
        </div>
      </div>
    </footer>
  );
};

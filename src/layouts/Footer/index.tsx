import Image from "next/image";

import ArrowFooter from "../../assets/arrowFooter.svg";
import FooterLogo from "../../assets/footerLogo.svg";

export const Footer = () => {
  return (
    <footer className="flex-col w-full justify-center">
      <div className=" flex w-full bg-footer items-center justify-center">
        <span className="font-bold">TODOS OS DIREITOS RESERVADOS. 2023</span>
      </div>

      <div className="flex justify-end absolute lg:w-9/12 w-11/12">
        <div className="flex relative w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] bg-main p-2 justify-center items-center inset-0 bottom-20 lg:left-0 rounded-[64px]">
          <Image
            src={ArrowFooter}
            alt="arrow"
            layout="fit"
            width={32}
            height={32}
          />
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-50 p-4">
          <Image alt="" src={FooterLogo} />
        </div>
      </div>
    </footer>
  );
};

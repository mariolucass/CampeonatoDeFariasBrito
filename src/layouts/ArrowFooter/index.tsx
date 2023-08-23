"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowFooterIcon from "../../assets/arrowFooter.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ArrowFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="flex fixed bottom-10 z-50 lg:w-9/12 w-11/12 justify-end">
        <div
          className="flex relative w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] bg-main p-2 justify-center items-center inset-0 bottom-20 lg:left-0 rounded-[64px] cursor-pointer"
          onClick={() => scrollToTop()}
        >
          <Image
            src={ArrowFooterIcon}
            alt="arrow"
            layout="fit"
            width={32}
            height={32}
          />
        </div>
      </div>
    )
  );
};

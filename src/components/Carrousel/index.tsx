"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../public/assets/img1.jpeg";
import img2 from "../../../public/assets/img2.jpeg";
import img3 from "../../../public/assets/img3.jpeg";
import img4 from "../../../public/assets/img4.jpeg";
import img5 from "../../../public/assets/img5.jpeg";

const useWindowSize = () => {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return; // Exit if running on the server or non-browser environment
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
};

export const CarrouselPageMain = () => {
  const size = useWindowSize();

  const listImgs = [
    { name: "image1", image: img1 },
    { name: "image2", image: img2 },
    { name: "image3", image: img3 },
    { name: "image4", image: img4 },
    { name: "image5", image: img5 },
  ];

  const renderSwiperSlide = listImgs.map((elem) => (
    <SwiperSlide
      key={elem!.name}
      className="h-full rounded-lg lg:w-full lg:h-max lg:flex lg:justify-center lg:items-center"
    >
      <Image
        src={elem!.image}
        alt={elem!.name}
        className="h-full w-full rounded-lg lg:w-full object-cover lg:h-full lg:m-auto drop-shadow-lg"
      />
    </SwiperSlide>
  ));

  return (
    <div className="flex w-9/12 lg:w-full">
      {size.width! < 1024 ? (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Navigation]}
          navigation={true}
          className="w-full arrows-black"
          initialSlide={2}
        >
          {renderSwiperSlide}
        </Swiper>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          navigation={true}
          className="w-full arrows-black"
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          {renderSwiperSlide}
        </Swiper>
      )}
    </div>
  );
};

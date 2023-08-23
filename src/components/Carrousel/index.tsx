"use client";

import { useGlobalContext } from "@/context/global_context";
import { imgsWeekends } from "@/data/imageWeekends";
import Image from "next/image";
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarrouselPageMain = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();
  const renderSwiperSlide = imgsWeekends.map((elem) => (
    <SwiperSlide
      key={elem!.name}
      className="h-full rounded-lg lg:w-full lg:min-h-max lg:flex lg:justify-center lg:items-center "
    >
      <Image
        src={elem!.image}
        alt={elem!.name}
        className="h-full w-full rounded-lg lg:w-full object-cover lg:h-full lg:m-auto drop-shadow-lg"
      />
    </SwiperSlide>
  ));

  return (
    <div className="flex w-9/12 lg:w-full lg:min-h-[480px]">
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
          autoplay={true}
          centeredSlides={true}
          slidesPerView={2}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          navigation={true}
          className="w-full arrows-black"
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
        >
          {renderSwiperSlide}
        </Swiper>
      )}
    </div>
  );
};

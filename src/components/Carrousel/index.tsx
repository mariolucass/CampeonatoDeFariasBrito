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
// Swiper CSS is imported once in globals.css — no duplicate here.
export const CarrouselPageMain = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();
  const renderSwiperSlide = imgsWeekends.map((elem) => (
    <SwiperSlide
      key={elem!.name}
      className="h-full rounded-lg lg:w-full lg:min-h-max lg:flex lg:justify-center lg:items-center "
    >
      {/* Fill + sizes: browser fetches only the right-sized image for the slot */}
      <div className="relative w-full h-full min-h-[300px] lg:min-h-[480px]">
        <Image
          src={elem!.image}
          alt={elem!.name}
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="rounded-lg object-cover drop-shadow-lg"
        />
      </div>
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
          initialSlide={3}
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
          initialSlide={3}
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

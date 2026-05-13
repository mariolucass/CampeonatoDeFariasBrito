import { useGlobalContext } from "@/context/global_context";
import { Picture } from "@/interfaces/image_interface";
import { getPictures } from "@/services/images_service";
import { handleDateWithMoment } from "@/utils/handleDate";
import Image from "next/image";
import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS is now imported once in globals.css to avoid render-blocking
// duplicate stylesheet loading during client hydration.
export const WeekendPictures = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    getPictures({ pictures, setPictures });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDesktop = size.width! >= 1024;

  const renderImageList = pictures.map((elem) => (
    <SwiperSlide key={elem.id} className="h-full">
      <div className="group h-full flex flex-col gap-0 rounded-2xl overflow-hidden border border-current border-opacity-[0.08] bg-bgtwo mx-1">
        {/* Image */}
        <div className="relative overflow-hidden flex-1 min-h-[220px] lg:min-h-[280px]">
          <Image
            src={elem.image}
            alt={elem.image}
            fill
            sizes="(max-width: 1024px) 95vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Date badge floating on image */}
          <div className="absolute bottom-3 left-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              {handleDateWithMoment(elem.date)}
            </span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  if (!pictures.length) {
    return (
      <div className="w-full flex items-center justify-center min-h-[280px]">
        <span className="text-xs font-black uppercase tracking-widest text-[#515154]">
          Carregando fotos...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={isDesktop ? 3 : 1}
        spaceBetween={isDesktop ? 16 : 0}
        className="w-full weekend-swiper"
        style={{
          paddingBottom: "40px",
        }}
      >
        {renderImageList}
      </Swiper>

      <style jsx global>{`
        .weekend-swiper .swiper-pagination-bullet {
          background: var(--color-main, #e07b39);
          opacity: 0.3;
          width: 6px;
          height: 6px;
        }
        .weekend-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        .weekend-swiper .swiper-button-prev,
        .weekend-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          background: var(--color-main, #e07b39);
          border-radius: 12px;
          top: 45%;
        }
        .weekend-swiper .swiper-button-prev::after,
        .weekend-swiper .swiper-button-next::after {
          font-size: 14px;
          font-weight: 900;
          color: white;
        }
        .weekend-swiper .swiper-button-prev:hover,
        .weekend-swiper .swiper-button-next:hover {
          opacity: 0.85;
          transform: translateY(-1px);
          transition: all 0.15s ease;
        }
        .weekend-swiper .swiper-button-disabled {
          opacity: 0.2 !important;
        }
      `}</style>
    </div>
  );
};

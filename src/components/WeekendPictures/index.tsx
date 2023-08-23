import { useGlobalContext } from "@/context/global_context";
import { imgsWeekends } from "@/data/imageWeekends";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const WeekendPictures = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();
  const renderImageList = imgsWeekends.map((elem) => (
    <SwiperSlide
      key={elem.name}
      className="h-full flex justify-center items-center w-[108px]"
    >
      <div className="flex flex-col w-9/12 mx-auto text-center gap-2 justify-center items-center">
        <Image
          src={elem.image}
          alt={elem.name}
          className="rounded-2xl"
          height={272}
          width={308}
        />
        <span className="m-auto w-full">{elem.description}</span>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="flex w-10/12 lg:w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="lg:h-[200px] h-[156px] arrows-2 arrows-3 w-full "
        slidesPerView={size.width! < 1024 ? 1 : 3}
      >
        {renderImageList}
      </Swiper>
    </div>
  );
};

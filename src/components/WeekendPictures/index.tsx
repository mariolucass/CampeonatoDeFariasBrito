import { useGlobalContext } from "@/context/global_context";
import { Picture } from "@/interfaces/image_interface";
import { getPictures } from "@/services/images_service";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const WeekendPictures = () => {
  const { useWindowSize } = useGlobalContext();
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    getPictures({ pictures, setPictures });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const size = useWindowSize();

  const renderImageList = pictures.map((elem) => {
    const handleDate = () => {
      moment.locale("pt-br");
      const time = moment(elem.date, "YYYY-MM-DD")
        .format("LLLL")
        .replace(",", " -")
        .replace("às", " -")
        .replace("de 2023", "")
        .slice(0, -7)
        .toUpperCase();
      return time;
    };

    return (
      <SwiperSlide
        key={elem.id}
        className="h-full flex justify-center items-center w-[108px]"
      >
        <div className="flex flex-col w-9/12 mx-auto text-center gap-2 justify-center items-center">
          <Image
            src={elem.image}
            alt={elem.image}
            className="rounded-2xl"
            height={200}
            width={308}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />

          <span className="m-auto w-full">{handleDate()}</span>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex w-10/12 lg:w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className=" h-[272px] arrows-2 arrows-3 w-full  lg:h-[360px]"
        slidesPerView={size.width! < 1024 ? 1 : 3}
      >
        {renderImageList}
      </Swiper>
    </div>
  );
};

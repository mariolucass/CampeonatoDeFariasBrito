import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
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

export const WeekendPictures = () => {
  const size = useWindowSize();
  const listImgs = [
    { name: "image1", image: img1, description: "10 E 11 DE AGOSTO" },
    { name: "image2", image: img2, description: "10 E 11 DE AGOSTO" },
    { name: "image3", image: img3, description: "10 E 11 DE AGOSTO" },
    { name: "image4", image: img4, description: "10 E 11 DE AGOSTO" },
    { name: "image5", image: img5, description: "10 E 11 DE AGOSTO" },
  ];

  const renderImageList = listImgs.map((elem) => (
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
        className="lg:h-[200px] arrows-2 arrows-3 w-full "
        slidesPerView={size.width! < 1024 ? 1 : 3}
      >
        {renderImageList}
      </Swiper>
    </div>
  );
};

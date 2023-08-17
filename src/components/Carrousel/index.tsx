"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../public/assets/img1.jpeg";
import img2 from "../../../public/assets/img2.jpeg";
import img3 from "../../../public/assets/img3.jpeg";
import img4 from "../../../public/assets/img4.jpeg";
import img5 from "../../../public/assets/img5.jpeg";

export const CarrouselPageMain = () => {
  const listImgs = [
    { name: "image1", image: img1 },
    { name: "image2", image: img2 },
    { name: "image3", image: img3 },
    { name: "image4", image: img4 },
    { name: "image5", image: img5 },
  ];

  // const headersList = headers();
  // const userAgent = headersList.get("user-agent");

  //  Let's check if the device is a mobile device
  // let isMobileView = userAgent!.match(
  //   /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  // );

  const renderSwiperSlide = listImgs.map((elem) => (
    <SwiperSlide
      key={elem!.name}
      className="h-full rounded-lg lg:w-full lg:h-max lg:flex lg:justify-center lg:items-center "
    >
      <Image
        src={elem!.image}
        alt={elem!.name}
        className="h-full w-full rounded-lg lg:w-full object-cover lg:h-full lg:m-auto"
      />
    </SwiperSlide>
  ));

  // if (isMobileView) {
  // return (
  //   <div className="flex w-9/12 lg:w-full">
  //     <Swiper
  //       effect={"cards"}
  //       grabCursor={true}
  //       modules={[EffectCards, Autoplay, Navigation]}
  //       navigation={true}
  //       className="w-full arrows-black"
  //       initialSlide={2}
  //     >
  //       {renderSwiperSlide}
  //     </Swiper>
  //   </div>
  // );

  return (
    <div className="flex w-9/12 lg:w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        navigation={true}
        className="w-full arrows-black"
        initialSlide={3}
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
    </div>
  );
};

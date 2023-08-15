import Image from "next/image";

import { Autoplay, EffectCards, Navigation } from "swiper/modules";
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

  const renderSwiperSlide = listImgs.map((elem) => (
    <SwiperSlide key={elem!.name} className="rounded-lg">
      <Image src={elem!.image} alt={elem!.name} className="rounded-lg " />
    </SwiperSlide>
  ));

  return (
    <div className="flex w-9/12 swiper-content">
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
    </div>
  );
};

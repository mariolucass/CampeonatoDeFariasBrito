import Image from "next/image";
import img1 from "../../../public/assets/img1.jpeg";
import img2 from "../../../public/assets/img2.jpeg";
import img3 from "../../../public/assets/img3.jpeg";
import img4 from "../../../public/assets/img4.jpeg";
import img5 from "../../../public/assets/img5.jpeg";

export const WeekendPictures = () => {
  const listImgs = [
    { name: "image1", image: img1 },
    { name: "image2", image: img2 },
    { name: "image3", image: img3 },
    { name: "image4", image: img4 },
    { name: "image5", image: img5 },
  ];

  return (
    <ul className="flex gap-8 px-11 justify-start lg:w-full lg:items-left">
      <li className="h-full m-w-[300px]">
        <Image
          src={img1}
          alt="img1"
          className="rounded-lg"
          height={272}
          width={308}
        />
        <span>10 E 11 DE AGOSTO</span>
      </li>

      <li className=" h-full m-w-[300px]">
        <Image
          src={img2}
          alt="img2"
          className="rounded-lg m-h-[272px]"
          height={272}
          width={308}
        />
        <span>10 E 11 DE AGOSTO</span>
      </li>

      <li className=" h-full m-w-[300px]">
        <Image
          src={img3}
          alt="img3"
          className="rounded-lg"
          height={272}
          width={308}
        />
        <span>10 E 11 DE AGOSTO</span>
      </li>

      <li className=" h-full m-w-[300px]">
        <Image
          src={img4}
          alt="img4"
          className="rounded-lg"
          height={272}
          width={308}
        />
        <span>10 E 11 DE AGOSTO</span>
      </li>
    </ul>
  );
};

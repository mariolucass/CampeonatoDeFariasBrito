import { useMatchesContext } from "@/context/matches_context";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Vasco from "../../assets/escudo.png";

interface RenderTeamInMatch {
  name: string;
}

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

export const TableInDashboard = () => {
  const size = useWindowSize();
  const { matches } = useMatchesContext();

  const listFiltered = matches.slice(0, 4);

  const listTeamsFiltered = [
    "Pedro Fernandes",
    "Meninos da Vila",
    "Atlético Lázio",
  ];
  const teamsChanged = ["P. Fernandes", "M. da Vila", "Atl. Lázio"];

  const filterList = listFiltered.map((elem) => {
    if (listTeamsFiltered.includes(elem.visitant.name)) {
      const index = listTeamsFiltered.indexOf(elem.visitant.name);
      elem.visitant.name = teamsChanged[index];
      return elem;
    }

    if (listTeamsFiltered.includes(elem.principal.name)) {
      const index = listTeamsFiltered.indexOf(elem.principal.name);
      elem.principal.name = teamsChanged[index];
      return elem;
    }

    return elem;
  });

  const RenderPrincipal = ({ name }: RenderTeamInMatch) => {
    return (
      <div className="m-w-2/3 rounded-lg flex flex-col justify-center items-center">
        <Image src={Vasco} alt="Vasco" height={48} width={48} />

        <span className="w-full text-base text-center px-1 font-bold lg:text-xl">
          {name}
        </span>
      </div>
    );
  };

  const RenderVisitant = ({ name }: RenderTeamInMatch) => {
    return (
      <div className="m-w-2/3 rounded-lg flex flex-col justify-center items-center">
        <Image src={Vasco} alt="Vasco" height={48} width={48} />

        <span className="w-full text-base text-center px-1 font-bold lg:text-xl">
          {name}
        </span>
      </div>
    );
  };

  const renderMatches = filterList.map((elem, index) => {
    const handleDate = () => {
      moment.locale("pt-br");
      const time = moment(elem.date, "YYYY-MM-DDTHH:mm")
        .format("LLLL")
        .replace(",", " -")
        .replace("às", " -")
        .replace("de 2023", "")
        .toUpperCase();

      return time;
    };

    return (
      <SwiperSlide
        key={index}
        className="flex flex-col w-full bg-bgone mt-3 lg:w-1/3"
      >
        <h3 className="flex w-full justify-center font-bold relative top-2 mb-4">
          {handleDate()}
        </h3>

        <div className="flex justify-center p-2 w-full">
          <RenderPrincipal name={elem.principal.name.toUpperCase()} />

          <div className="w-1/3 text-4xl p-1 h-[32px] my-auto text-black flex justify-around items-center font-bold">
            <span>X</span>
          </div>

          <RenderVisitant name={elem.visitant.name.toUpperCase()} />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex lg:w-11/12 h-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="h-full arrows-2"
        slidesPerView={size.width! < 1024 ? 1 : 2}
      >
        {renderMatches}
      </Swiper>
    </div>
  );
};

import { useGlobalContext } from "@/context/global_context";
import { useMatchesContext } from "@/context/matches_context";
import { RenderTeamInMatch } from "@/interfaces/teams_interface";
import { getMatches } from "@/services/matches_service";
import { changeNameTeamsInMatches } from "@/utils/changeNameTeams";
import { Spinner } from "@material-tailwind/react";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const TableInDashboard = () => {
  const { useWindowSize } = useGlobalContext();
  const size = useWindowSize();

  const { matches, setMatches } = useMatchesContext();
  useEffect(() => {
    getMatches({ matches, setMatches });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listFiltered = matches.slice(18);
  const filterList = listFiltered.map((elem) => changeNameTeamsInMatches(elem));

  const RenderPrincipal = ({ name, image }: RenderTeamInMatch) => {
    return (
      <div className="m-w-2/3 rounded-lg flex flex-col justify-center items-center">
        <div className="w-[48px] h-[48px]">
          <Image
            src={
              image
                ? image
                : "https://live.staticflickr.com/65535/53133352780_be09a37cd2_n.jpg"
            }
            className="multiplyimage"
            alt="crestTeam"
            width={48}
            height={48}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <span className="w-full text-base text-center px-1 font-bold lg:text-xl">
          {name}
        </span>
      </div>
    );
  };

  const RenderVisitant = ({ name, image }: RenderTeamInMatch) => {
    return (
      <div className="m-w-2/3 rounded-lg flex flex-col justify-center items-center">
        <div className="w-[48px] h-[48px]">
          <Image
            src={
              image
                ? image
                : "https://live.staticflickr.com/65535/53133352780_be09a37cd2_n.jpg"
            }
            className="multiplyimage"
            alt="crestTeam"
            width={48}
            height={48}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

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
        className="flex flex-col w-full bg-bgone mt-4 lg:w-1/3"
      >
        <h3 className="flex w-full justify-center font-bold relative top-2 mb-4">
          {handleDate()}
        </h3>

        <div className="flex justify-center p-2 w-full">
          <RenderPrincipal
            name={elem.principal.name.toUpperCase()}
            image={elem.principal.crest}
          />

          <div className="w-1/3 text-4xl p-1 h-[32px] my-auto text-black flex justify-around items-center font-bold">
            <span>X</span>
          </div>

          <RenderVisitant
            name={elem.visitant.name.toUpperCase()}
            image={elem.visitant.crest}
          />
        </div>
      </SwiperSlide>
    );
  });

  return !matches.length ? (
    <div className="flex items-start gap-8 text-bgmodal p-16">
      <Spinner className="h-12 w-12" />
    </div>
  ) : (
    <div className="flex lg:w-11/12 w-full h-full">
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

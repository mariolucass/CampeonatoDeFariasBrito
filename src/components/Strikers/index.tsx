import { usePlayersContext } from "@/context/players_context";
import Image from "next/image";
import ArtilhariaNoInfoIcon from "../../assets/artilhariaNoInfo.svg";

export const Strikers = () => {
  const { players } = usePlayersContext();
  const baseClassLi =
    "flex w-full justify-between px-2 h-[32px] items-center text-xs lg:text-xl";

  const baseClassSpan = "flex justify-center";

  const renderStrikers = [
    {
      id: "",
      nickname: "JOG",
      matches_played: "PJ",
      goals: "GOLS",
      team: {
        name: "TIME",
      },
    },
    ...players.reverse(),
  ].map((elem, index) => (
    <li
      key={elem.id}
      className={
        index % 2 == 0
          ? `${index == 0 && "font-bold"} ${baseClassLi} bg-bgone`
          : `${baseClassLi} bg-bgtwo`
      }
    >
      <div className="flex lg:gap-8 h-[26px] items-center">
        <span className="flex justify-center w-[18px] lg:w-[80px] ">
          {index != 0 ? `${index}º` : "POS"}
        </span>

        <span className="ml-4 flex w-[56px] font-bold justify-left lg:w-[80px] lg:ml-0">
          {elem.nickname}
        </span>

        <span className="flex w-[56px] font-bold justify-left lg:w-[80px]">
          {elem.team.name}
        </span>

        {index !== 0 && (
          <div className="justify-left">
            {/* <Image
              src={Neymar}
              alt={elem.nickname}
              height={40}
              width={40}
              className="rounded-lg"
            /> */}
          </div>
        )}
      </div>

      <div className="flex gap-2 h-[26px] items-center">
        <span className={` ${baseClassSpan} w-[32px] lg:w-[72px]`}>
          {elem.matches_played}
        </span>
        <span className={`${baseClassSpan} w-[32px] lg:w-[40px]`}>
          {elem.goals}
        </span>
      </div>
    </li>
  ));

  return !players.length ? (
    <div className="w-2/3 flex flex-col justify-center items-center gap-4 p-8">
      <Image src={ArtilhariaNoInfoIcon} alt="noInfo" width={400} height={400} />
      <span className="font-bold">Ainda sem informações!</span>
    </div>
  ) : (
    <ul className="w-2/3 m-auto">{renderStrikers}</ul>
  );
};

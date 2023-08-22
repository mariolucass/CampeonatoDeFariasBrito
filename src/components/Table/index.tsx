"use client";

import { useMatchesContext } from "@/context/matches_context";
import { Spinner } from "@material-tailwind/react";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import Vasco from "../../assets/escudo.png";

interface RenderTeamInMatch {
  name: string;
}

export const Table = () => {
  const { matches } = useMatchesContext();

  const listTeamsFiltered = [
    "Pedro Fernandes",
    "Meninos da Vila",
    "Atlético Lázio",
  ];
  const teamsChanged = ["P. Fernandes", "M. da Vila", "Atl. Lázio"];

  const filteredMatches = matches.map((elem) => {
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
      <div className="w-5/12 flex justify-end items-right self-center">
        <div className="w-1/3 border-4 border-main rounded-lg max-w-[64px] flex justify-center items-center">
          <Image src={Vasco} alt="Vasco" height={48} width={48} />
        </div>

        <div className="w-2/3 flex p-0 border-y-4 border-main lg:h-[32px] self-center">
          <span className="w-full text-base text-center px-1 font-bold lg:text-xl">
            {name}
          </span>
        </div>
      </div>
    );
  };

  const RenderVisitant = ({ name }: RenderTeamInMatch) => {
    return (
      <div className="w-5/12 flex justify-start items-right self-center">
        <div className="w-2/3 flex p-0 border-y-4 border-main lg:h-[32px] self-center">
          <span className="w-full text-base text-center px-1 font-bold lg:text-xl">
            {name}
          </span>
        </div>

        <div className="w-1/3 border-4 border-main rounded-lg max-w-[64px] flex justify-center items-center">
          <Image src={Vasco} alt="Vasco" height={48} width={48} />
        </div>
      </div>
    );
  };

  const liBaseClass = "flex flex-col w-full ";

  const renderMatches = filteredMatches.map((elem, index) => {
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

    const handleDiffDate = () => {
      moment.locale("pt-br");
      const dateNow = new Date();

      return moment(elem.date).isBefore(dateNow);
    };

    const gameIsOver = handleDiffDate();

    return (
      <li
        key={index}
        className={
          index % 2 === 0
            ? `${liBaseClass} bg-bgtwo `
            : `${liBaseClass} bg-bgone`
        }
      >
        <h3 className="flex w-full justify-center font-bold relative top-2">
          {handleDate()}
        </h3>

        <div className="flex justify-center p-2 pt-0 w-full">
          <RenderPrincipal name={elem.principal.name} />

          <div className="w-2/12 bg-main text-2xl p-1 h-[32px] my-auto text-white flex justify-around items-center font-bold">
            {gameIsOver ? (
              <>
                <span>{elem.goals_principal}</span>
                <span>X</span>
                <span>{elem.goals_visitant}</span>
              </>
            ) : (
              <span>X</span>
            )}
          </div>

          <RenderVisitant name={elem.visitant.name} />
        </div>
      </li>
    );
  });

  return !matches.length ? (
    <div className="flex items-start justify-center gap-8 text-bgmodal p-16 min-h-[500px]">
      <Spinner className="h-12 w-12" />
    </div>
  ) : (
    <ul className="flex flex-col w-11/12 m-auto justify-center items-center py-4 max-w-3xl">
      {renderMatches}
    </ul>
  );
};

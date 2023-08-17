"use client";

import { usePlayersContext } from "@/context/players_context";
import { useTeamsContext } from "@/context/teams_context";
import Image from "next/image";
import Arrow from "../../../assets/arrow.svg";
import Vasco from "../../../assets/escudo.png";

const EquipesPage = () => {
  const { teams } = useTeamsContext();
  const { players } = usePlayersContext();

  const renderTeams = teams.map((elem) => (
    <>
      <li
        key={elem.id}
        className="bg-bgtwo p-4 rounded-lg flex justify-between text-center items-center"
        data-dropdown-toggle="dropdown"
      >
        <div className="w-[104px] h-[56px]">
          <Image
            src={Vasco}
            alt="vasco"
            objectFit="contain"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <span className="text-2xl font-bold w-60 text-left">{elem.name}</span>

        <div>
          <Image src={Arrow} alt="arrow" height={7} width={14} />
        </div>
      </li>

      <div id="dropdown">
        <ul className="hidden">
          <li></li>
        </ul>
      </div>
    </>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
        <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white mt-12">
          EQUIPES 1ª DIVISÃO
        </h1>

        <ul className="flex flex-col gap-4 w-9/12 my-8">{renderTeams}</ul>
      </section>
    </main>
  );
};

export default EquipesPage;

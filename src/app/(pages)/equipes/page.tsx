"use client";

import { Player, Team } from "@/interfaces/global";
import { api } from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "../../../assets/arrow.svg";
import Vasco from "../../../assets/escudo.png";

const EquipesPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

  const getTeams = async () => {
    if (!teams.length) {
      const teams = await api.get("/teams");
      setTeams(teams.data);
    }
  };

  useEffect(() => {
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(teams);
  //   const listTeams = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
  //   const listPlayers = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];

  //   const renderPlayers = players.map((elem) => (
  //     <li key={elem.id}>
  //       <span></span>
  //     </li>
  //   ));

  const renderTeams = teams.map((elem) => (
    <li
      key={elem.id}
      className="bg-bgtwo p-4 rounded-lg flex justify-between text-center items-center"
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
  ));

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white mt-12">
        EQUIPES 1ª DIVISÃO
      </h1>

      <ul className="flex flex-col gap-4 w-9/12 my-8">{renderTeams}</ul>
    </main>
  );
};

export default EquipesPage;

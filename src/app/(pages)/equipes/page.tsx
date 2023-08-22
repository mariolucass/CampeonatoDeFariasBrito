"use client";

import { PlayersCards } from "@/components/PlayersCards";
import { SectionTitle } from "@/components/SectionTitle";
import { useTeamsContext } from "@/context/teams_context";
import { teams_data } from "@/data/teams_data";
import { Card, Collapse, Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import Arrow from "../../../assets/arrowMatches.svg";
import Vasco from "../../../assets/escudo.png";

type OpenState = { [key: string]: boolean };

const EquipesPage = () => {
  const { teams } = useTeamsContext();

  const defaultOpenState: OpenState = teams_data.reduce((acc, team) => {
    acc[team.name] = false;
    return acc;
  }, {} as OpenState);

  const [collapse, setCollapse] = useState<OpenState>(defaultOpenState);
  const [expandedTeam, setExpandedTeam] = useState("");

  const toggleCollapse = (teamName: string) => {
    setCollapse((prevState) => ({
      ...prevState,
      [teamName]: !prevState[teamName],
    }));

    setExpandedTeam(teamName);
  };

  const renderTeams = teams.map((elem) => {
    return (
      <li key={elem.name} className="cursor-pointer">
        <div
          className="bg-bgtwo p-4 rounded-lg flex justify-between text-center items-center active:rounded-none"
          onClick={() => toggleCollapse(elem.name)}
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
        </div>
        {expandedTeam === elem.name ? (
          <Collapse open={collapse[elem.name]}>
            <Card className="w-full bg-bgtwo flex flex-col p-2 gap-4 rounded-none">
              <h1 className="w-2/3 mx-auto  p-1 text-2xl text-black bg-bgone flex justify-center items-center rounded-lg">
                JOGADORES
              </h1>

              <PlayersCards teamId={elem.id} />

              <h1 className="w-2/3 mx-auto p-1 text-2xl text-black  bg-bgone flex justify-center items-center rounded-lg">
                COMISSÃO TÉCNICA
              </h1>

              <PlayersCards teamId={elem.id} isCommitte />
            </Card>
          </Collapse>
        ) : (
          <></>
        )}
      </li>
    );
  });

  return (
    <main className="flex flex-col gap-4 justify-center items-center w-full">
      <SectionTitle />

      <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
        <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white lg:mt-4">
          EQUIPES 1ª DIVISÃO
        </h1>

        {!teams.length ? (
          <div className="flex items-start gap-8 text-bgmodal p-16 min-h-[500px]">
            <Spinner className="h-12 w-12" />
          </div>
        ) : (
          <ul className="flex flex-col gap-4 w-10/12 lg:w-2/3 mb-12 ">
            {renderTeams}
          </ul>
        )}
      </section>
    </main>
  );
};

export default EquipesPage;

"use client";

import { PlayersCards } from "@/components/PlayersCards";
import { SectionTitle } from "@/components/SectionTitle";
import { useTeamsContext } from "@/context/teams_context";
import { downloadFicha } from "@/data/downloadData";
import { teamsData } from "@/data/teamsData";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { getTeams } from "@/services/teams_service";
import { Card, Collapse, Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "../../../assets/arrowMatches.svg";
import DownloadIcon from "../../../assets/download.svg";

type OpenCollapseState = { [key: string]: boolean };

const EquipesPage = () => {
  const { teams, setTeams } = useTeamsContext();
  useEffect(() => {
    getTeams({ teams, setTeams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultOpenState: OpenCollapseState = teamsData.reduce((acc, team) => {
    acc[team.name] = false;
    return acc;
  }, {} as OpenCollapseState);

  const [collapse, setCollapse] = useState<OpenCollapseState>(defaultOpenState);
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
          <div className="w-[104px] h-[56px] flex justify-center">
            <Image
              src={
                elem.crest
                  ? elem.crest
                  : "https://live.staticflickr.com/65535/53133352780_be09a37cd2_n.jpg"
              }
              className="multiplyimage"
              alt="crestTeam"
              width={48}
              height={48}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          <span className="text-2xl font-bold w-60 text-left ml-6 lg:ml-0">
            {elem.name}
          </span>

          <div className="w-[104px] flex justify-center">
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
    <ContainerTransition>
      <main className="flex flex-col gap-4 justify-center items-center w-full">
        <SectionTitle />

        <section className="flex flex-col w-3/4 m-auto justify-center items-center text-center p-4">
          <a className="w-full" href={downloadFicha} download="ficha.pdf">
            <button className="bg-tertiary w-10/12 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-2 lg:text-xl">
              <Image src={DownloadIcon} alt="Download" />
              BAIXAR FICHA DE INSCRIÇÃO
            </button>
          </a>
        </section>

        <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
          <h1 className="bg-main text-2xl p-2 w-10/12 text-center text-white lg:mt-0">
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
    </ContainerTransition>
  );
};

export default EquipesPage;

"use client";

import { api } from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Vasco from "../../assets/escudo.png";
import { Match } from "../../interfaces/global";

export const Table = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  const getMatches = async () => {
    if (!matches.length) {
      const matches = await api.get("/matches/");
      setMatches(matches.data);
    }
  };

  useEffect(() => {
    getMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const liBaseClass = "flex w-2/3 justify-center";

  const renderMatches = matches.map((elem, index) => (
    <li key={index} className={`${liBaseClass} `}>
      <div className="flex justify-center items-center">
        <div className="border-4 border-main rounded-lg">
          <Image src={Vasco} alt="Vasco" height={64} width={64} />
        </div>

        <div className="w-[204px] flex p-0 border-y-4 border-main">
          <span className="w-full text-2xl text-left px-4">
            {elem.principal.name}
          </span>
        </div>
      </div>

      <div className="bg-main text-2xl p-2 w-2/3 text-white flex justify-between items-center">
        <span>0</span>
        <span>X</span>
        <span>0</span>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[204px] flex p-0 border-y-4 border-main ">
          <span className="w-full text-2xl text-right px-4">
            {elem.visitant.name}
          </span>
        </div>

        <div className="border-4 p-2 border-main rounded-lg">
          <Image src={Vasco} alt="Vasco" height={64} width={64} />
        </div>
      </div>
    </li>
  ));

  return (
    <ul className="flex flex-col w-1/3 m-auto justify-center items-center gap-4">
      {renderMatches}
    </ul>
  );
};

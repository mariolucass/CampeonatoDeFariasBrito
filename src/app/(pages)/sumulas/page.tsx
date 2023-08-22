"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { sumulasData } from "@/data/sumulas";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import Image from "next/image";
import { useState } from "react";
import SumulasNoInfoIcon from "../../../assets/sumulasNoInfo.svg";

const SumulasPage = () => {
  const [sumulas, setSumulas] = useState(sumulasData);

  const renderSumulas = sumulas.map((elem, index) => {
    return (
      <section
        className="w-full max-w-7xl margin-auto flex flex-col items-center"
        key={index}
      >
        <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white lg:mt-4">
          JOGOS DOS DIAS 26 E 27 DE AGOSTO
        </h1>
      </section>
    );
  });

  return (
    <ContainerTransition>
      <main className="flex flex-col justify-center items-center gap-4 w-full ">
        <SectionTitle />

        <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
          <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white lg:mt-4">
            SÚMULAS
          </h1>

          {!sumulas.length ? (
            <div className="w-2/3 flex flex-col justify-center items-center gap-4 lg:p-8 ">
              <Image
                src={SumulasNoInfoIcon}
                alt="noInfo"
                width={400}
                height={400}
              />
              <span className="font-bold">Ainda sem informações!</span>
            </div>
          ) : (
            <ul>{renderSumulas}</ul>
          )}
        </section>
      </main>
    </ContainerTransition>
  );
};

export default SumulasPage;

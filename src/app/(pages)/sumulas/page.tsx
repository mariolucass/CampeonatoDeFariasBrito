"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { sumulasData } from "@/data/sumulas";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import { useState } from "react";
import SumulasNoInfoIcon from "../../../assets/sumulasNoInfo.svg";

const SumulasPage = () => {
  const [sumulas] = useState(sumulasData);

  const renderSumulas = sumulas.map((elem, index) => {
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

    const bgLi = index % 2 === 0 ? "bg-bgtwo" : "bg-bgtwo";

    return (
      <section
        className={`w-full max-w-7xl margin-auto flex flex-col items-center pb-4 ${bgLi}`}
        key={index}
      >
        <div className={`w-full flex flex-col justify-center items-center`}>
          <h1 className=" text-2xl pt-2  text-center text-black font-bold">
            {`${elem.principal}
          ${elem.goals_principal} X ${elem.goals_visitant}
          ${elem.visitante}`}
          </h1>

          <span className="pb-2 text-center">{handleDate()}</span>
        </div>

        <div className="w-2/3 flex flex-col justify-center gap-4 lg:flex-row">
          <Image src={elem.image1} alt="image1" width={300} height={400} />
          <Image src={elem.image2} alt="image2" width={300} height={400} />
        </div>
      </section>
    );
  });
  return (
    <ContainerTransition>
      <main className="flex flex-col justify-center items-center gap-4 w-full ">
        <SectionTitle />

        <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
          <h1 className="bg-main text-2xl p-2 w-10/12 text-center text-white lg:mt-4">
            DIA 27 DE AGOSTO
          </h1>

          {!sumulas.length ? (
            <div className="w-2/3 flex flex-col justify-center items-center gap-4 lg:p-8 py-12">
              <Image
                src={SumulasNoInfoIcon}
                alt="noInfo"
                width={400}
                height={400}
              />
              <span className="font-bold">Ainda sem informações!</span>
            </div>
          ) : (
            <ul className="w-10/12 max-w-7xl flex flex-col pb-8">
              {renderSumulas}
            </ul>
          )}
        </section>
      </main>
    </ContainerTransition>
  );
};

export default SumulasPage;

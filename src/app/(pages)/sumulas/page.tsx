"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { sumulasData } from "@/data/sumulas";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";

const SumulasPage = () => {
  const sumulasDays = Object.keys(sumulasData);

  return (
    <ContainerTransition>
      <main className="flex flex-col justify-center items-center gap-4 w-full ">
        <SectionTitle />

        <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
          {sumulasDays.map((elem) => {
            return (
              <>
                <h1
                  className="bg-main text-2xl p-2 w-10/12 text-center text-white lg:mt-4"
                  key={elem}
                >
                  DIA {elem.toUpperCase()}
                </h1>
                <ul className="w-10/12 max-w-7xl flex flex-col pb-8">
                  {sumulasData[elem as keyof typeof sumulasData]!.map(
                    (elem, index) => {
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
                          <div
                            className={`w-full flex flex-col justify-center items-center`}
                          >
                            <h1 className=" text-2xl pt-2  text-center text-black font-bold">
                              {elem.goals_principal == elem.goals_visitant
                                ? `${elem.principal}
                              (${elem.goals_penalty_principal})
                              ${elem.goals_principal} X ${elem.goals_visitant}
                              (${elem.goals_penalty_visitant})
                              ${elem.visitante}`
                                : `${elem.principal}
                              ${elem.goals_principal} X ${elem.goals_visitant}
                              ${elem.visitante}`}
                            </h1>

                            <span className="pb-2 text-center">
                              {handleDate()}
                            </span>
                          </div>

                          <div className="w-2/3 flex flex-col justify-center gap-4 lg:flex-row">
                            <Image
                              src={elem.image1}
                              alt="image1"
                              width={300}
                              height={400}
                            />
                            <Image
                              src={elem.image2}
                              alt="image2"
                              width={300}
                              height={400}
                            />
                          </div>

                          {elem.principal === "CARIUTABA" &&
                          elem.visitante === "JUVENTUDE" ? (
                            <span className="mt-4 text-center">
                              (Correção de súmula: o autor do segundo gol da
                              equipe do Cariutaba foi marcado por Silvestre dos
                              Santos (07))
                            </span>
                          ) : (
                            <></>
                          )}
                        </section>
                      );
                    }
                  )}
                </ul>
              </>
            );
          })}
        </section>
      </main>
    </ContainerTransition>
  );
};

export default SumulasPage;

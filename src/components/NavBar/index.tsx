import Image from "next/image";
import Link from "next/link";
import Ms from "../../assets/logos/MsProjects.svg";
import Rights from "../../assets/logos/Rights.svg";

export const NavBar = () => {
  const listNavigation = [
    { title: "TABELA", page: "/tabela" },
    { title: "CLASSIFICAÇÃO", page: "/classificacao" },
    { title: "REGULAMENTO", page: "/regulamento" },
    { title: "SÚMULAS", page: "/sumulas" },
    { title: "EQUIPES", page: "/equipes" },
    { title: "ARTILHARIA", page: "/artilharia" },
    { title: "PÁGINA INICIAL", page: "/" },
  ];

  const renderNavigation = listNavigation.map((elem) => (
    <li key={elem.title}>
      <Link href={elem.page} className="text-2xl">
        {elem.title}
      </Link>
    </li>
  ));

  return (
    <div className="w-full min-h-full bg-bgmodal absolute top-0 left-0 right-0 z-40 flex">
      <div className="w-1/2 min-h-full bg-main z-50 flex flex-col gap-3 rounded-r-[12px]">
        <div></div>

        <div className="w-[105px] h-[1px] bg-white self-center"></div>

        <ul className=" flex flex-col p-4 gap-4 text-white text-xl">
          {renderNavigation}
        </ul>

        <div className="w-[105px] h-[1px] bg-white self-center"></div>

        <div className="flex flex-col w-full gap-2 justify-center items-center self-end">
          <Image src={Ms} alt={"MsProjects"} width={128} height={128} />
          <Image src={Rights} alt={"Rights"} width={128} height={128} />
        </div>
      </div>
    </div>
  );
};

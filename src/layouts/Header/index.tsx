"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Burguer from "../../assets/burguer.svg";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";

export const Header = () => {
  const router = useRouter();

  const ListNavBar = () => {
    const listItems = [{}, {}, {}, {}];

    const items = listItems.map((elem, index) => (
      <li key={index}>
        <div></div>
      </li>
    ));

    return <ul>{items}</ul>;
  };

  return (
    <header className="w-full bg-main p-6 flex justify-between">
      <Image src={Burguer} alt="logo" width={30} height={30} />

      <Image
        src={Logo}
        alt="logo"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <Image src={Search} alt="logo" width={30} height={30} />
    </header>
  );
};

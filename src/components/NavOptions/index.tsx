import { navOptionsList } from "@/data/navOptions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NavOptions = () => {
  const router = useRouter();
  const liClassDefault =
    "h-[176px] w-2/5 p-4 rounded-[14px] text-white flex flex-col justify-between max-w-xs cursor-pointer hover:drop-shadow-xl hover:scale-110 transition ease-in-out delay-150 ";

  return (
    <ul className="flex flex-wrap gap-8 justify-center lg:flex-col lg:w-full lg:h-[408px] lg:items-center">
      {navOptionsList.map((elem, index) => (
        <li
          key={index}
          className={
            index % 2 != 0
              ? `${liClassDefault} bg-tertiary`
              : `${liClassDefault} bg-main`
          }
          onClick={() => router.push(elem.page)}
        >
          <div className="w-[48px] h-[48px]">
            <Image
              src={elem.component}
              alt={elem.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full">
            <h3 className="text-xl">{elem.title}</h3>
            <span
              className={`h[12px] text-xs leading-[0.1em] font-light lg:text-base `}
            >
              {elem.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

import Image from "next/image";
import ArtilhariaIcon from "../../../assets/pages/artilharia.svg";

const ArtilhariaPage = () => {
  return (
    <main className="flex flex-col gap-4 justify-center items-center w-full">
      <section className="flex flex-col w-full justify-center items-center p-6 bg-bgtwo ">
        <div className="w-full flex justify-center items-center">
          <Image
            src={ArtilhariaIcon}
            alt="Artilharia"
            className="white-svg"
            width={64}
            height={64}
          />
        </div>
        <h1 className="text-4xl font-bold">ARTILHARIA </h1>
        <span className="text-sm">Confira os artilheiros do campeonato</span>
      </section>

      <section className="flex w-full flex-col max-w-5xl">
        <h1 className="flex bg-main mt-4 text-2xl w-3/4 m-auto justify-center items-center text-white py-1">
          ARTILHARIA
        </h1>

        <span className="w-3/4 m-auto text-center text-xs">
          Ao final do campeonato o artilheiro ganhará um troféu e cem reais. Se
          houver empate no número de gols, o jogador mais velho se consagrará
          artilheiro do campeonato!
        </span>
      </section>
    </main>
  );
};

export default ArtilhariaPage;

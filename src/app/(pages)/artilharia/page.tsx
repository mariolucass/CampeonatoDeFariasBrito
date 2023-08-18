import { SectionTitle } from "@/components/SectionTitle";

const ArtilhariaPage = () => {
  return (
    <main className="flex flex-col gap-4 justify-center items-center w-full">
      <SectionTitle />

      <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
        <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white lg:mt-4">
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

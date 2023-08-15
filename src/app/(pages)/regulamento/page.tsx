import { Regulamento } from "@/layouts/Regulamento";
import Image from "next/image";
import DownloadIcon from "../../../assets/download.svg";
import RegulamentoIcon from "../../../assets/pages/regulamento.svg";

const RegulamentoPage = () => {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col justify-center items-center p-6 bg-bgtwo">
        <div>
          <Image src={RegulamentoIcon} alt="Regulamento" />
        </div>
        <h1 className="text-4xl font-bold">REGULAMENTO </h1>
        <span className="text-sm">Regulamento do campeonato - 1ª divisão</span>
      </section>

      <section className="w-10/12 m-auto">
        <Regulamento />
      </section>

      <a
        href="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        download="test_image"
      >
        <button className="bg-main w-1/2 m-auto text-white p-2 flex items-center gap-1 rounded justify-center">
          <Image src={DownloadIcon} alt="Download" />
          BAIXAR REGULAMENTO
        </button>
      </a>
    </main>
  );
};

export default RegulamentoPage;

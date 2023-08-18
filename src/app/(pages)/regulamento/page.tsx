import { SectionTitle } from "@/components/SectionTitle";
import { Regulamento } from "@/layouts/Regulamento";
import Image from "next/image";
import DownloadIcon from "../../../assets/download.svg";

const RegulamentoPage = () => {
  return (
    <main className="flex flex-col gap-4">
      <SectionTitle />

      <section className="w-10/12 m-auto max-w-5xl margin-auto h-[400px] overflow-y-auto">
        <Regulamento />
      </section>

      <a
        href="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        download="test_image"
      >
        <button className="bg-main w-1/2 m-auto text-white p-2 flex items-center gap-1 rounded justify-center max-w-xs  my-4">
          <Image src={DownloadIcon} alt="Download" />
          BAIXAR REGULAMENTO
        </button>
      </a>
    </main>
  );
};

export default RegulamentoPage;

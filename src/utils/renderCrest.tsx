import { defaultCrest } from "@/data/teamsData";
import Image from "next/image";

export const RenderCrest = (image: string) => {
  return (
    <Image
      src={image ? image : defaultCrest}
      className="multiplyimage"
      alt="crestTeam"
      width={48}
      height={48}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
};

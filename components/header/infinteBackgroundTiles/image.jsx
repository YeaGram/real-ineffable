import Image from "next/image";

export default function ImageTiles({ tilesIndex }) {
  return (
    <span className="relative  flex items-center content-center w-[460px] h-[270px]">
      <Image
        src={`/background/Palet${tilesIndex}.png`}
        alt="img"
        layout="fill"
        objectFit="cover"
      />
    </span>
  );
}

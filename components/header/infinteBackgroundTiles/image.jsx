import Image from "next/image";

export default function ImageTiles({ tilesIndex }) {
  return (
    <span className="relative  flex items-center content-center w-[460px] h-[270px]">
      <Image
        src={`/palet${tilesIndex}.PNG `}
        alt="img"
        layout="fill"
        objectFit="cover"
      />
    </span>
  );
}

import Marquee from "react-fast-marquee";
import ImageTiles from "./image";

export default function InfinteTilesBackground({ mSpeed, mDelay }) {
  const imageTiles = [];
  const imageCount = 9;

  for (let i = 0; i < imageCount; i++) {
    imageTiles.push(<ImageTiles key={i + 1} tilesIndex={i + 1} />);
  }

  return (
    <Marquee
      gradient={false}
      speed={mSpeed}
      delay={mDelay}
      className="overflow-hidden flex w-screen items-center "
    >
      {imageTiles}
    </Marquee>
  );
}

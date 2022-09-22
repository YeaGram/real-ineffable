import Marquee from "react-fast-marquee";
import ImageTiles from "./image";

export default function InfinteTilesBackground({ mSpeed, mDelay }) {
  // const window =
  // <span className="h-"></span>;
  // const tilescount = 5;
  // const output = [];

  // const randomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // for (let i = 0; i < tilescount; i++) {
  //   output.push(
  //     <ImageTiles
  //       key={i}
  //
  //       itemTilesStyle={itemTilesStyle}
  //       tilesIndex={1}
  //     />
  //   );
  // }

  return (
    <Marquee
      gradient={false}
      speed={mSpeed}
      delay={mDelay}
      className="overflow-hidden flex w-screen items-center "
    >
      <ImageTiles tilesIndex={1} />
      <ImageTiles tilesIndex={2} />
      <ImageTiles tilesIndex={3} />
      <ImageTiles tilesIndex={4} />
      <ImageTiles tilesIndex={5} />
      <ImageTiles tilesIndex={6} />
      <ImageTiles tilesIndex={7} />
      <ImageTiles tilesIndex={8} />
      <ImageTiles tilesIndex={9} />
    </Marquee>
  );
}

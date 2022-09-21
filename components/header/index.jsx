import NavigationBar from "./nav";
import NavigationItems from "./navmenu";
import Image from "next/image";
import InfinteTilesBackground from "./infinteBackgrounTiles";
export default function Header() {
  const classs = "flex w-52 p-1 m-1";

  return (
    <div className=" w-screen h-[90vh] relative bg-header ">
      <span className="absolute block inset-0 bg-header z-10 opacity-70 backdrop-blur-sm"></span>
      <NavigationBar />
      <div className="relative w-full h-full flex flex-col overflow-x-hidden justify-between">
        <InfinteTilesBackground classs={classs} mSpeed="15" />
        <InfinteTilesBackground classs={classs} mSpeed="20" />
        <InfinteTilesBackground classs={classs} mSpeed="10" />
        <InfinteTilesBackground classs={classs} mSpeed="16" />
        <InfinteTilesBackground classs={classs} mSpeed="50" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-[20] ">
        <div className=" flex flex-col items-center justify-between sm:h-36">
          <div className="relative block w-60 h-32 sm:w-72 sm:h-60 sm:mb-5">
            <Image
              src="/title.svg"
              alt="title"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <ul className="flex flex-col sm:flex-row">
            <NavigationItems url="#" title="Home" />
            <NavigationItems url="#" title="About" />
            <NavigationItems url="#" title="Gallery" />
          </ul>
        </div>
      </div>
    </div>
  );
}

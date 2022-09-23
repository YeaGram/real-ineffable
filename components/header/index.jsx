import NavigationBar from "./nav";
import NavigationItems from "./navmenu";
import Image from "next/image";
import InfinteTilesBackground from "./infinteBackgroundTiles";

export default function Header({ FormHandle }) {
  return (
    <header className=" min-h-[35rem] h-[90vh] max-h-[40rem] relative bg-header overflow-x-hidden">
      <span className="absolute block inset-0 bg-header z-20 opacity-[85%]"></span>
      <span className="absolute block inset-0 bg-transparent z-10 opacity-90 backdrop-blur-[1px]"></span>
      <NavigationBar FormHandle={FormHandle} />
      <div className="relative w-full h-full flex flex-col overflow-x-hidden justify-evenly">
        <InfinteTilesBackground mSpeed="15" />
        <InfinteTilesBackground mSpeed="50" />
        <InfinteTilesBackground mSpeed="20" />
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
          <ul className="flex flex-col sm:flex-row items-center w-full">
            <NavigationItems url="#" title="Home" />
            <NavigationItems url="#" title="About" />
            <NavigationItems url="#" title="Gallery" />
          </ul>
        </div>
      </div>
    </header>
  );
}

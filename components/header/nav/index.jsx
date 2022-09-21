import Image from "next/image";
export default function NavigationBar() {
  return (
    <div className="flex fixed z-[20] left-0 right-0 justify-between px-10 py-3 shadow-mainDrop items-center bg-white">
      <div className="relative w-10 h-10">
        <Image src="/mainLogo.svg" layout="fill" alt="logo" />
      </div>
      <div>
        <p className="font-OpenSans text-main font-semibold">Member Login</p>
      </div>
    </div>
  );
}

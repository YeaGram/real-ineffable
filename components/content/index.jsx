export default function Content() {
  return (
    <main className="h-screen w-screen  sm:px-10 md:px-28 lg:px-44 xl:px-52">
      <div className="bg-white h-full">
        <div className="pt-20 flex flex-col items-center">
          <h2 className="font-Pacifico text-4xl sm:text-6xl md:text-7xl text-center">
            Selamat Datang!
          </h2>
          <p className="font-OpenSans w-full px-20 text-center mt-10 text-gray-700 italic tracking-tight">
            Ini adalah website sederhana yang dibangun untuk menyimpan gambar
            dan melihat kenangan.
          </p>
        </div>
        <div className="px-20 flex flex-col items-center [&>*]:my-2 my-10">
          <span className="block w-full border-b-8 border-black"></span>
          <span className="block w-[90%] border-b-[6px] border-black"></span>
        </div>
      </div>
    </main>
  );
}

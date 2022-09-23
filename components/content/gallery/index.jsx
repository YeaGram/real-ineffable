export default function GalleryContent() {
  return (
    <main className="h-screen w-screen  sm:px-10 md:px-28 lg:px-44 xl:px-52">
      <div className="bg-white h-full">
        <div className="pt-20 flex flex-col items-center">
          <h2 className="font-Pacifico text-4xl sm:text-6xl md:text-7xl text-center">
            Galeri
          </h2>
          <p className="font-OpenSans w-full px-20 text-center mt-10 text-gray-700 italic tracking-tight">
            Foto foto kalian, kalau mau nambah tinggal upload aja, kalau enggak
            work, Berarti fiturnya belum tersedia😉.
            <span className="italic font-light opacity-75">~ eaeaea.</span>
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

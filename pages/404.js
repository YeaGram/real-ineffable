import Head from "next/head";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-gray-300">
      <Head>
        <title>Ineffable</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-screen h-screen [&>*]:my-1 flex flex-col justify-center items-start sm:items-center px-10 sm:p-0">
        <p className="font-Poppins font-bold text-main text-xl">404!</p>
        <h2 className="font-Poppins text-4xl -tracking-wider text-gray-900">
          Hmm.. Sepertinya Ada Yang <span className="font-bold">Salah!</span>
        </h2>
        <p className="font-OpenSans italic text-main/70">
          Periksa Url Yang Anda Masukkan atau Klik Navigasi Yang Ada.
        </p>
      </div>
    </div>
  );
}

import AboutParagraft from "./about";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-footer font-Poppins w-screen pb-10 flex justify-center px-20 sm:px-10 md:px-28 lg:px-44 xl:px-52">
      <div className="w-full flex flex-col items-center max-w-3xl">
        <p
          id="about"
          className="font-Poppins tracking-[1.5rem] uppercase text-white text-5xl font-bold mt-20"
        >
          About
        </p>
        <div className="flex flex-col sm:flex-row text-white font-Poppins font-normal text-sm mt-10">
          <AboutParagraft />
        </div>
        <div className="w-full text-white text-xs">
          <span className="block w-full border-b-4 border-white my-5"></span>
          <p>
            Made With <span className="text-rose-500">❤</span> By YeaGrams
            <span className="italic font-light opacity-75">
              ~ member of ineffable.
            </span>
          </p>
          <ul>
            <Link href="https://nextjs.org/">
              <a className="cursor-pointer block" target="_blank">
                Using <strong>NextJS</strong>
              </a>
            </Link>

            <Link href="https://tailwindcss.com/">
              <a className="cursor-pointer block" target="_blank">
                Styled using <strong>TailwindCSS</strong>
              </a>
            </Link>

            <Link href="https://firebase.google.com/">
              <a className="cursor-pointer block" target="_blank">
                Database using Google <strong>Firebase</strong>
              </a>
            </Link>
          </ul>
          <div className="flex flex-col items-end mt-5">
            <p className="text-lg font-bold">Thanks</p>
            <p className="italic font-light opacity-75">
              ~ copyright YeaGram 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

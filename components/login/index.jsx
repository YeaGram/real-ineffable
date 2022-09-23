import InputItem from "./inputItem";
import { MdClose } from "react-icons/md";

export default function LoginForm({ FormState, FormHandle }) {
  return (
    <div
      className={`${
        FormState ? "block" : "hidden"
      } fixed inset-0 flex items-center justify-center z-[40] backdrop-blur-sm backdrop-brightness-50`}
    >
      <div className="relative">
        <form className="flex flex-col items-center bg-slate-300 p-12 rounded-md shadow-mainDrop">
          <p className="block mb-5 font-Poppins font-bold text-4xl drop-shadow-sm text-main">
            Login
          </p>
          <InputItem
            type="text"
            placeholder="masukkan nis"
            title="Nis"
            name="userNis"
          />
          <InputItem
            type="password"
            placeholder="masukkan password"
            title="Password"
            name="userPw"
          />
          <div className="w-full flex justify-end my-5">
            <button
              type="submit"
              className="block py-1 px-5 bg-main text-white font-Poppins rounded-sm"
            >
              Login
            </button>
          </div>
        </form>
        <button onClick={FormHandle}>
          <span className="absolute top-0 left-0 border-2 border-main/60 p-1 m-2 rounded-full">
            <MdClose className=" text-xl font-bold text-main " />
          </span>
        </button>
      </div>
    </div>
  );
}

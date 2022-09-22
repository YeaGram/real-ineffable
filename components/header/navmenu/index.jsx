import Link from "next/link";
export default function NavigationItems({ title, url }) {
  return (
    <li className="py-2 px-7 w-3/4 text-center  my-2 sm:my-0 border-2 rounded-sm transition-all hover:border-main mx-0 sm:mx-8 hover:bg-main shadow-[1px_1px_5px_black] backdrop-blur-sm bg-transparent">
      <Link href={url}>
        <a className="text-white ">{title}</a>
      </Link>
    </li>
  );
}

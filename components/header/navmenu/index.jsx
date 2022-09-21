import Link from "next/link";
export default function NavigationItems({ title, url }) {
  return (
    <li className="py-2 px-5 my-2 sm:my-0 border-2 rounded-sm transition-all hover:border-main mx-8 hover:bg-main">
      <Link href={url}>
        <a className="text-white ">{title}</a>
      </Link>
    </li>
  );
}

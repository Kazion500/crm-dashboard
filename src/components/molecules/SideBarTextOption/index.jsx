import Link from "next/link";

export default function SideBarTextOption() {
  return (
    <div>
      <ul className="font-medium">
        <li className="hover:border-yellow-500 active:ring-2 cursor-pointer rounded-sm px-4">
          <Link href="/intergrations">
            <a className="py-2.5 inline-block hover:text-yellow-500">
              Intergration
            </a>
          </Link>
        </li>
        <li className="active:ring-2 rounded-sm px-4 cursor-pointer">
          <Link href="/intergrations">
            <a className="py-2.5 inline-block">Insights</a>
          </Link>
        </li>
        <li className="active:ring-2 rounded-sm px-4 cursor-pointer">
          <Link href="/intergrations">
            <a className="py-2.5 inline-block">Orders</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

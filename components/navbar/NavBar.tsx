import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItem = [
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Pricing",
    path: "/pricing",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon size={24} className="mr-2" />

        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItem.map((item) => (
        <ActiveLink key={item.text} {...item} />
      ))}
    </nav>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../../public/netflix_logo.svg";

import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

const LinkDisplay = ({ name, href }: LinkProps) => {
  const pathName = usePathname();

  const activeStyles = "text-white font-semibold underline text-sm";
  const normalStyles = "text-gray-300 font-normal text-sm";
  return (
    <Link
      className={pathName === href ? activeStyles : normalStyles}
      href={href}
    >
      {name}
    </Link>
  );
};

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link) => (
            <li key={link.name}>
              <LinkDisplay name={link.name} href={link.href} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}

//--------------------------
// // NavLink.js

// export default function NavLink({href, isActive, children}) {
//     return (
//       <Link
//         href={href}
//         className={`nav-link ${isActive ? 'active' : ''}`}
//       >
//         {children}
//       </Link>
//     );
//   }

//   // Logo.js

//   export default function Logo() {
//     return (
//       <Link href="/">
//         <Image src="/logo.png"/>
//       </Link>
//     );
//   }

//   // Navbar.js

//   import { usePathname } from 'next/navigation';

//   import NavLink from './NavLink';
//   import Logo from './Logo';

//   export default function Navbar() {

//     const path = usePathname();

//     return (
//       <nav>
//         <Logo />

//         <NavLink href="/" isActive={path === '/'}>
//           Home
//         </NavLink>

//         <NavLink href="/about" isActive={path === '/about'}>
//           About
//         </NavLink>

//         <NavLink href="/contact" isActive={path === '/contact'}>
//           Contact
//         </NavLink>
//       </nav>
//     );
//   }

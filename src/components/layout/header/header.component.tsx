import * as React from "react";
import {useRouter} from "next/router";

import {UnstyledLink} from "@components/atoms";

const links = [
   {href: "/favorite", label: "Favorite"},
   {href: "/anime", label: "Anime"},
   {href: "/manga", label: "Manga"},
   {href: "/sign-up", label: "Sign Up"},
];

const HeaderComponent = (): JSX.Element => {
   const {pathname} = useRouter();
   return (
      <header className={`${pathname === "/" && "fixed w-full z-50"} bg-white`}>
         <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-6 px-4 text-gray-700">
            <div>
               <UnstyledLink
                  className="md:p-4 py-2 block font-bold text-4xl text-indigo-600 hover:text-indigo-300"
                  href="/">
                  MangaReader
               </UnstyledLink>
            </div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               id="menu-button"
               className="h-6 w-6 cursor-pointer md:hidden block text-black"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
               />
            </svg>
            <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
               <ul className="text-2xl text-black md:flex">
                  {links.map(({href, label}) => (
                     <li key={`${href}${label}`}>
                        <UnstyledLink
                           href={href}
                           className="mx-8 p-4 rounded-lg hover:bg-black hover:text-white hover:font-semibold">
                           {label}
                        </UnstyledLink>
                     </li>
                  ))}
               </ul>
            </div>
         </nav>
      </header>
   );
};

export default HeaderComponent;

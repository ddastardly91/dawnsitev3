"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";

import { FaDiscord } from "react-icons/fa6";

export default function Navbar() {
   const path = usePathname();

   return (
      <Container>
         <nav className="py-5 mx-5">
            <div className="flex items-center justify-between pb-12">
               <div className="text-slate-800">v3.0.0</div>
               <div>
                  <Link
                     href="https://discord.gg/dawnpz"
                     target="_blank"
                     className="flex items-center gap-3 transition-colors duration-200 text-slate-300 hover:text-slate-100"
                  >
                     <span>Join the Discord</span>
                     <FaDiscord size={26} />
                  </Link>
               </div>
            </div>
            <div>
               <Image
                  src="/assets/banner-h.png"
                  alt="DOTD Banner Horizontal"
                  width={1280}
                  height={260}
                  draggable={false}
               />
            </div>
            <div className="p-2.5 mt-14 mb-3 rounded-lg bg-slate-700/30 backdrop-blur-sm border-2 border-slate-50/5">
               <ul className="flex items-center justify-around gap-4 text-lg text-slate-300">
                  <li
                     className={`w-full py-4 text-center ${
                        path === "/"
                           ? "link-selected"
                           : "link-not-selected"
                     }`}
                  >
                     <Link
                        href="/"
                        className="font-semibold"
                     >
                        Home
                     </Link>
                  </li>
                  <li
                     className={`w-full py-4 text-center ${
                        path === "/staff"
                           ? "link-selected"
                           : "link-not-selected"
                     }`}
                  >
                     <Link
                        href="/staff"
                        className="font-semibold"
                     >
                        Staff
                     </Link>
                  </li>
                  <li
                     className={`w-full py-4 text-center ${
                        path === "/play"
                           ? "link-selected"
                           : "link-not-selected"
                     } `}
                  >
                     <Link
                        href="/play"
                        className="font-semibold"
                     >
                        Play
                     </Link>
                  </li>
                  <li
                     className={`w-full py-4 text-center ${
                        path === "/patreon"
                           ? "link-selected"
                           : "link-not-selected"
                     }`}
                  >
                     <Link
                        href="/"
                        className="font-semibold"
                     >
                        Patreon
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </Container>
   );
}

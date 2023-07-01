import Link from "next/link";
import Container from "./Container";
import { FaDiscord } from "react-icons/fa6";
import { GiRaiseZombie } from "react-icons/gi";
import { BiCopy } from "react-icons/bi";

export default async function Footer() {
   const res = await fetch(
      "https://api.battlemetrics.com/servers/19049251",
      { next: { revalidate: 240 } }
   );
   const data = await res.json();

   return (
      <footer className="w-full border-t-2 bg-slate-800 border-slate-200/5">
         <Container className="flex items-center justify-between py-10">
            <div className="flex flex-col justify-center gap-5">
               <div className="flex items-center gap-5 cursor-pointer">
                  <FaDiscord size={54} />
                  <div className="flex flex-col">
                     <span className="flex flex-row items-center gap-3 text-lg font-semibold">
                        Discord Community
                        <BiCopy />
                     </span>
                     <Link
                        href="https://discord.gg/dawnpz"
                        target="_blank"
                        className="text-slate-400"
                     >
                        https://discord.gg/dawnpz
                     </Link>
                  </div>
               </div>
               <div className="flex items-center gap-5 cursor-pointer">
                  <GiRaiseZombie size={54} />
                  <div className="flex flex-col">
                     <span className="flex flex-row items-center gap-3 text-lg font-semibold">
                        Community Server
                        <BiCopy />
                     </span>
                     <span className="text-slate-400">
                        {data.data.attributes.players}/
                        {data.data.attributes.maxPlayers}{" "}
                        people currently playing.
                     </span>
                  </div>
               </div>
               <div></div>
            </div>
            <div>
               <div>
                  <h2 className="text-xl font-semibold">
                     Navigation
                  </h2>
                  <ul className="flex flex-col gap-2 mt-2">
                     <li className="hover:text-slate-600">
                        <Link href="/">Home</Link>
                     </li>
                     <li className="hover:text-slate-600">
                        <Link href="/">Staff</Link>
                     </li>
                     <li className="hover:text-slate-600">
                        <Link href="/">Play</Link>
                     </li>
                     <li className="hover:text-slate-600">
                        <Link href="/">Patreon</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
         <div className="py-2 bg-slate-600 text-slate-400">
            <Container className="flex flex-row items-center justify-between">
               <p>
                  Copyright &copy; 2023 - Dawn of the Dead -
                  Project Zomboid Community
               </p>
               <p>
                  <Link
                     href="https://github.com/ddastardly91"
                     target="_blank"
                  >
                     Made with 💖 by DDastardly
                  </Link>
               </p>
            </Container>
         </div>
      </footer>
   );
}

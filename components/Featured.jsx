import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

export default function Featured() {
   return (
      <div className="w-full p-4 transition-colors duration-300 border-2 rounded-lg cursor-pointer bg-slate-700/30 hover:bg-slate-700/50 text-slate-800 border-slate-200/5">
         <div className="w-full">
            <div className="overflow-hidden rounded-lg max-h-[400px]">
               <Image
                  src="/assets/featured.jpg"
                  alt="Featured Image"
                  width={1280}
                  height={320}
                  draggable={false}
                  className="object-cover"
               />
            </div>
            <div className="mt-2 rounded-lg">
               <div className="text-slate-100">
                  <h2 className="w-full text-4xl font-bold text-center py-7">
                     July Newsletter
                  </h2>
                  <p className="text-lg text-center">
                     Survivors, brace yourselves! July's
                     newsletter has arrived, read this to
                     find out what happened in June and
                     what's to come in July on the Dawn of
                     the Dead Community server!
                  </p>
               </div>
               <div className="pt-3 px-3 mt-10 border-t-[1px] border-slate-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Image
                        src="/assets/placeholder.jpg"
                        alt="Placeholder Image"
                        width={32}
                        height={32}
                        draggable={false}
                        className="rounded-full"
                     />
                     <span className="font-semibold text-slate-400">
                        DDastardly
                     </span>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaCalendar className="text-slate-400" />
                     <span className="ml-1 text-slate-400">
                        {new Date().toDateString()}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

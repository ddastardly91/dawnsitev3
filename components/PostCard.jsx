import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

export default function PostCard() {
   return (
      <div className="p-4 transition-colors duration-300 border-2 rounded-lg cursor-pointer bg-slate-700/30 text-slate-800 hover:bg-slate-700/50 border-slate-200/5">
         <div className="overflow-hidden rounded-lg max-h-[200px]">
            <Image
               src="/assets/featured.jpg"
               alt="Featured Image"
               width={640}
               height={220}
               className="object-cover"
               draggable={false}
            />
         </div>
         <div className="text-slate-100">
            <h2 className="w-full py-5 text-2xl font-bold text-center">
               New Event
            </h2>
            <p className="text-center">
               Survivors unite! Thrilling event coming soon
               on our Project Zomboid server. Prepare to
               conquer the undead and prove your survival
               skills! 🧟‍♂️🔥 Stay tuned for updates!
            </p>
            <div className="px-3 pt-3 mt-5 border-t-[1px] border-slate-500/20 flex items-center justify-between">
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
   );
}

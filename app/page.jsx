import Featured from "@/components/Featured";
import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="mb-10">
         <Image
            src="/assets/bg-abstract-1.png"
            alt="Abstract Background"
            width={1280}
            height={1280}
            draggable={false}
            className="absolute top-72 z-[-1] animate-spin-slow"
         />
         <Image
            src="/assets/bg-abstract-2.png"
            alt="Abstract Background"
            width={1024}
            height={1024}
            draggable={false}
            className="absolute top-full z-[-1] animate-spin-slow"
         />
         <main className="mx-5">
            <Link href="/posts/2023-07-01-first-post">
               <Featured />
            </Link>
            <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-2">
               <PostCard />
               <PostCard />
               <PostCard />
               <PostCard />
               <PostCard />
               <PostCard />
            </div>
            <div className="w-full my-5 text-center">
               <button className="px-10 py-4 transition-colors duration-300 border-2 rounded-lg bg-slate-700 border-slate-200/5 hover:bg-slate-500">
                  All Posts...
               </button>
            </div>
         </main>
      </div>
   );
}

import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Script from "next/script";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${rubik.className} bg-slate-900 text-slate-100`}
         >
            <Navbar />
            <Container>{children}</Container>
            <Footer />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
         </body>
      </html>
   );
}

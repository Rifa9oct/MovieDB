import Header from "@/components/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1D1E28] text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

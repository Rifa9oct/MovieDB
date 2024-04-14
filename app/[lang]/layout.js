import Header from "@/components/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { lang } }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1D1E28] text-white`}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside lang={lang} />
          {children}
        </div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}

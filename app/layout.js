import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aside from "./components/Aside";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1D1E28] text-white`}>
        <Header />
        {children}
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside />
        </div>
        <Footer />
      </body>
    </html>
  );
}

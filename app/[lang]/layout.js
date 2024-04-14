import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { lang, id } }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1D1E28] text-white`}>
        {children}
      </body>
    </html>
  );
}

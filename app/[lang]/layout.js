import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../globals.css";

export default function RootLayout({ children, params: {lang}}) {

  return (
    <html lang="en">
      <body className="bg-[#1D1E28] text-white">
        <Header />
        {children}
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside lang={lang} />
        </div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}

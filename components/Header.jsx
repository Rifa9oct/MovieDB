import Link from "next/link";
import Image from "next/image";
import logo from "../components/gallery/logo.svg";
import ring from "../components/gallery/ring.svg";
import sun from "../components/gallery/sun.svg";
import shoppingCart from "../components/gallery/shopping-cart.svg";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    return (
        <div className="container flex items-center justify-between space-x-10 py-6">
            <Link href="/">
                <Image src={logo} width={139} height="auto" alt="" />
            </Link>

            <ul className="flex items-center space-x-5">
                <li>
                    <Link className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                        <Image src={ring} width={24} height={24} alt="" />
                    </Link>
                </li>
                <li>
                    <Link className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                        <Image src={sun} width={24} height={24} alt="" />
                    </Link>
                </li>
                <li>
                    <Link className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                        <Image src={shoppingCart} width={24} height={24} alt="" />
                    </Link>
                </li>
                <li>
                    <LanguageSwitcher/>
                </li>
            </ul>
        </div>
    );
};

export default Header;
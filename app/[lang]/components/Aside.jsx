import Image from "next/image";
import Link from "next/link";
import trending from "../components/gallery/trending.svg";
import newRelease from "../components/gallery/newRelease.svg";
import commingSoon from "../components/gallery/commingSoon.svg";
import favourite from "../components/gallery/favourite.svg";
import watchLater from "../components/gallery/watchLater.svg";
import { getDictionary } from "../dictionaries/dictionaries";

const Aside = async ({lang}) => {
    const dict = await getDictionary(lang);
    
    return (
        <div>
            <ul className="space-y-2">
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <Image src={trending} width={24} height={24} alt=""/>
                            <span>{dict.Trending}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src={newRelease} width={24} height={24} alt=""/>
                            <span>{dict.NewReleases}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src={commingSoon} width={24} height={24} alt=""/>
                            <span>{dict.ComingSoon}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src={favourite} width={24} height={24} alt=""/>
                            <span>{dict.Favourites}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src={watchLater} width={24} height={24} alt=""/>
                            <span>{dict.WatchLater}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Aside;
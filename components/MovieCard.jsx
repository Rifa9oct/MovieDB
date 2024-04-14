import Image from "next/image";
import Link from "next/link";
import star from "../components/gallery/star.svg";
import tag from "../components/gallery/tag.svg";

const MovieCard = ({ movie, dict }) => {

    return (
        <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image className="w-full object-cover" src={movie.poster_path} width={355} height={428} style={{ aspectRatio: '355/428' }} alt="" />
            <div className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.overview.slice(0, 90)}...</p>
                <div className="flex items-center space-x-1 mb-5">
                    <Image src={star} width={14} height="auto" alt="" />
                    <Image src={star} width={14} height="auto" alt="" />
                    <Image src={star} width={14} height="auto" alt="" />
                    <Image src={star} width={14} height="auto" alt="" />
                    <Image src={star} width={14} height="auto" alt="" />
                </div>
                <Link className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="./modal.html">
                    <Image src={tag} width={14} height={14} alt="" />
                    <span>{dict.Details}</span>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
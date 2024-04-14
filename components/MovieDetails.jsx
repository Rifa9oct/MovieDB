import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getMovies } from "@/app/[lang]/loadMoviesData/loadMoviesData";
import Image from "next/image";

const MovieDetails = async ({ id, lang }) => {
    const dict = await getDictionary(lang);
    const movies = await getMovies();
    const { results } = movies;
    const movie = results?.find(item => item.id === parseInt(id));

    return (
        <>
            <div>
                <Image className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                    src={movie?.backdrop_path} width={1222} height={500} alt="" />
            </div>

            <div className="grid grid-cols-12 py-12 gap-8">
                <div className="col-span-2">
                    <Image src={movie?.poster_path} width={355} height={428} alt="" />
                </div>
                <div className="col-span-8">
                    <h2 className="font-bold text-slate-300 text-2xl">{movie?.title}</h2>
                    <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>{dict.ReleaseDate} : {movie?.release_date}</li>
                        <li>{dict.AverageVote} : {movie?.vote_average}</li>
                        <li>{dict.VoteCount} : {movie?.vote_count}</li>
                        <li>{dict.Popularity} : {movie?.popularity}</li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {dict.StreamInHD}
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {dict.DownloadInHD}
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
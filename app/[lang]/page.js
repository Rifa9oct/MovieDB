import MovieCard from "@/components/MovieCard";
import { getDictionary } from "./dictionaries/dictionaries";
import { getMovies } from "./loadMoviesData/loadMoviesData";

export const metadata = {
  title: "Home Page",
  description: "Home page content",
};

export default async function Home({params: { lang }}) {
  const dict = await getDictionary(lang);
  const response = await fetch("http://localhost:3000/api/movies");
  const photos = await response.json();
  console.log("hello");

  const movies = await getMovies();
  const { results } = movies;

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
          results.map(movie => <MovieCard key={movie.id} movie={movie} dict={dict}/>)
        }
      </div>
    </div>
  );
}

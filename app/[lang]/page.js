import MovieCard from "@/components/MovieCard";
import { getDictionary } from "./dictionaries/dictionaries";
import { getMovies } from "./loadMoviesData/loadMoviesData";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import Header from "@/components/Header";

export const metadata = {
  title: "Home Page",
  description: "Home page content",
};

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const movies = await getMovies();
  const { results } = movies;

  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Aside lang={lang} />

        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {
              results.map(movie => <MovieCard key={movie.id} movie={movie} dict={dict} />)
            }
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}

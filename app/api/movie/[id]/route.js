import movieList from "@/app/data/movieList";

export async function GET(_request, { params }) {
    const movieId = parseInt(params.id);
    const movie = movieList.results.find(movie => movie.id === movieId);

    return Response.json(movie);
}


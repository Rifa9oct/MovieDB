import movieList from "@/app/data/movieList";

export async function GET(_request, { params }) {
    const movieId = parseInt(params.id);
    const movie = movieList.results.find(movie => movie.id === movieId);

    return Response.json(movie);
}

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = parseInt(params.id);
    const movieIndex = movieList.results.findIndex(movie => movie.id === movieId);
    movieList.results[movieIndex].title = movie.title;

    return Response.json(movieList.results[movieIndex]);
}

export async function DELETE(_request, { params }) {
    const movieId = parseInt(params.id);
    const movieIndex = movieList.results.findIndex(movie => movie.id === movieId);
    const movieToDelete = movieList.results[movieIndex];
    movieList.results.splice(movieIndex, 1);

    return Response.json(movieToDelete);
}
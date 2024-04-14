import movieList from "@/app/data/movieList";

export async function GET() {
    return Response.json(movieList);
}
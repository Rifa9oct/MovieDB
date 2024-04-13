import "server-only";

const movies = () => import("./data.json").then((module) => module.default);

export const getMovies = async () => movies();
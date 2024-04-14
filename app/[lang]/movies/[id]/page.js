import Aside from '@/components/Aside';
import MovieDetails from '@/components/MovieDetails';
import React from 'react';
import { getMovies } from '../../loadMoviesData/loadMoviesData';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';

const Movie = async ({ params: { id, lang } }) => {
    const movies = await getMovies();
    const { results } = movies;

    const notMatchedId = results.find(movie => movie.id === parseInt(id));
    if(!notMatchedId){
        notFound();
    }

    return (
        <>
        <Header/>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Aside lang={lang} />

                <div>
                    <MovieDetails id={id} lang={lang} />
                </div>
            </div>
        </>
    );
};

export default Movie;
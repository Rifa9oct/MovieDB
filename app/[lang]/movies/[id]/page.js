import Aside from '@/components/Aside';
import MovieDetails from '@/components/MovieDetails';
import React from 'react';

const Movie = ({ params: { id, lang } }) => {
    return (
        <>
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
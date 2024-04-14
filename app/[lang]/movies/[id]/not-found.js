"use client"

import { usePathname } from "next/navigation";

const MovieNotFound = () => {
const pathname = usePathname();
const unmatchedId = pathname.split("/")[3];
    return (
        <div>
            <h1 className='flex justify-center items-center h-screen text-3xl'>404 | This movie with  {unmatchedId} id was not found!</h1>
        </div>
    );
};

export default MovieNotFound;
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const MovieNotFound = () => {
    const pathname = usePathname();
    const unmatchedId = pathname.split("/")[3];
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <h1 className='text-3xl'>404 | This movie with  {unmatchedId} id was not found!🙁</h1>
            <Link href="/">
                <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 mt-7 text-white font-semibold rounded-lg hover:scale-105">Go Home</button>
            </Link>
        </div>
    );
};

export default MovieNotFound;
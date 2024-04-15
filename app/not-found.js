import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src="/error.png" width={700} height={700} alt="" />
            <h1 className="text-center font-medium text-2xl mt-8">Sorry, We can not find that page!🙁</h1>
            <div className="mt-5">
                <Link href="/">
                    <button className="bg-red-500 hover:bg-red-600 py-2 px-4 text-white font-semibold rounded-lg hover:scale-105">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
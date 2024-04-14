import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="notFound flex flex-col items-center justify-center h-screen">
            <Image className="w-full" src="/error.jpg" width={1440} height={500} alt="" />
            <h1 className="text-center font-extrabold text-4xl mt-5">We cannot find that page!</h1>
            <div className="mt-5">
                <Link href="/">
                    <button className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-lg hover:scale-105">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
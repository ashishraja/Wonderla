import Image from 'next/image';
import { CiImageOn } from "react-icons/ci";

export default function HeroPage() {
    return (
        <div className="bg-black">
            <div style={{ position: "relative", width: '100%', height: 'calc(100dvh - 71.31px - 83.25px)' }}>
                <Image
                    src="https://www.savaari.com/blog/wp-content/uploads/2024/01/Wonderla-Bangalore-1-1.webp"
                    layout="fill"
                    objectFit="fill"
                    alt="main-image"
                    className="opacity-20"
                />
                <div className="absolute inset-0 flex top-0 flex-col items-center justify-between text-center">
                    <div className="flex justify-center items-center">
                        <h1 className="text-white text-2xl px-12 pt-12 font-bold">Largest Amusement Park Chain in India</h1>
                    </div>
                    <div className="w-full p-6 pr-0">
                        <h2 className="text-white text-left text-lg font-semibold mb-4">Our Parks & Resorts</h2>
                        <div className="flex no-scrollbar space-x-4 overflow-x-auto">
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-gray-300 rounded-md flex flex-col gap-10 items-center justify-center">
                                <span className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-[1px] rounded-br-md rounded-tl-md">Resort + Park</span>
                                <CiImageOn />
                                <span>Bengaluru</span>
                            </div>
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-gray-300 rounded-md flex flex-col gap-10 items-center justify-center">
                            <span className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-[1px] rounded-br-md rounded-tl-md"> Park</span>
                                <CiImageOn />
                                <span>Kochi</span>
                            </div>
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-gray-300 rounded-md flex flex-col gap-10 items-center justify-center">
                            <span className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-[1px] rounded-br-md rounded-tl-md">Park</span>
                                <CiImageOn />
                                <span>Hyderabad</span>
                            </div>
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-gray-300 rounded-md flex flex-col gap-10 items-center justify-center">
                            <span className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-[1px] rounded-br-md rounded-tl-md">Park</span>
                                <CiImageOn />
                                <span>Bhubaneswar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
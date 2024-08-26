import { CiImageOn } from "react-icons/ci";

export default function HeroPage2() {
    return (
        <div className="bg-black">
            <div style={{ position: "relative", width: '100%', height: 'calc(100dvh - 71.31px - 83.25px)' }}>
                <div className="absolute inset-0 flex top-0 flex-col items-center text-center">
                    <div className="flex justify-center items-center">
                        <h1 className="text-white text-3xl px-12 pt-12 font-bold">Join Chikku Monkey on a Virtual Tour</h1>
                    </div>
                    <p className="text-white text-xs px-20 pt-4 font-bold">Join Chikku Monkey on a fun virtual tour of Wonderla-explore rides and hidden gems! </p>
                    <div className="w-full p-4 pr-0">
                        <h2 className="text-white text-center mt-4 text-lg font-semibold mb-4">Select A Location</h2>
                        <div className="flex no-scrollbar space-x-4 overflow-x-auto">
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-white rounded-md flex flex-col gap-10 items-center justify-center">
                                <CiImageOn />
                                <span>Bengaluru</span>
                            </div>
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-white rounded-md flex flex-col gap-10 items-center justify-center">
                                <CiImageOn />
                                <span>Kochi</span>
                            </div>
                            <div className="flex-shrink-0 pt-16 relative w-28 h-40 bg-white rounded-md flex flex-col gap-10 items-center justify-center">
                                <CiImageOn />
                                <span>Hyderabad</span>
                            </div>
                            <div className="flex-shrink-0 pt-16 pr-2 relative w-28 h-40 bg-white rounded-md flex flex-col gap-10 items-center justify-center">
                                <CiImageOn />
                                <span>Bhubaneswar</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="absolute bottom-10 p-4 rounded-lg font-bold text-black bg-white w-[90%]">Experience Wonderla</button>
                </div>
            </div>
        </div>
    );
}
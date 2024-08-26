import { CiImageOn } from "react-icons/ci";

export default function HeroPage4() {
    return (
        <div className="mt-8 p-2 pt-10 pr-0 bg-black">
            <div style={{ position: "relative", width: '100%', height: '105vh' }}>
                <div className="absolute inset-0 flex top-0 flex-col items-center">
                    <div className="flex flex-col p-4 justify-start">
                        <h1 className="text-white text-3xl  font-bold">Fun Merchandise</h1>
                        <p className="text-white text-xs pt-2 w-[78%] font-bold">Discover exclusive merchandise and souvenirs at Wonderla's shop-take the fun home with you!</p>
                    </div>
                    <div className="w-full p-4 pr-0 ">
                        <div className="flex no-scrollbar space-x-2 overflow-x-auto">
                            <div className="flex-shrink-0 relative w-[95%] pt-8  h-48 rounded-md flex flex-col justify-evenly " style={{ backgroundColor: "#2d2d2a" }}>
                                <div className="flex justify-center items-center">
                                    <CiImageOn className="text-2xl text-gray-400" />
                                </div>
                                <div className="flex flex-col pl-8 justify-start">
                                    <span className="text-xs text-white">Woman Costumes</span>
                                    <span className="text-2xl text-white">Shop Before</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative w-[95%] pt-8  h-48 rounded-md flex flex-col justify-evenly " style={{ backgroundColor: "#2d2d2a" }}>
                                <div className="flex justify-center items-center">
                                    <CiImageOn className="text-2xl text-gray-400" />
                                </div>
                                <div className="flex flex-col pl-8 justify-start">
                                    <span className="text-xs text-white">Woman Costumes</span>
                                    <span className="text-2xl text-white">Shop Before</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative w-[95%] pt-8  h-48 rounded-md flex flex-col justify-evenly " style={{ backgroundColor: "#2d2d2a" }}>
                                <div className="flex justify-center items-center">
                                    <CiImageOn className="text-2xl text-gray-400" />
                                </div>
                                <div className="flex flex-col pl-8 justify-start">
                                    <span className="text-xs text-white">Woman Costumes</span>
                                    <span className="text-2xl text-white">Shop Before</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap p-4 gap-3">
                        <div className="h-60 rounded-md justify-between flex flex-col border-2 border-white border-solid " style={{ width:"187px" }}>
                            <div className="h-[80%] flex justify-center items-center" style={{ backgroundColor: "#2d2d2a" }}>
                                <CiImageOn className="text-white text-2xl"/>
                            </div>
                            <div className="text-white p-2 flex flex-col justify-center items-center">
                                <span>Men Costumes</span>
                                <span>Starting at $234</span>
                            </div>
                        </div>
                        <div className="h-60 rounded-md justify-between flex flex-col border-2 border-white border-solid " style={{ width:"187px" }}>
                            <div className="h-[80%] flex justify-center items-center" style={{ backgroundColor: "#2d2d2a" }}>
                                <CiImageOn className="text-white text-2xl"/>
                            </div>
                            <div className="text-white p-2 flex flex-col justify-center items-center">
                                <span>Men Costumes</span>
                                <span>Starting at $234</span>
                            </div>
                        </div>
                        <div className="h-60 rounded-md justify-between flex flex-col border-2 border-white border-solid " style={{ width:"187px" }}>
                            <div className="h-[80%] flex justify-center items-center" style={{ backgroundColor: "#2d2d2a" }}>
                                <CiImageOn className="text-white text-2xl"/>
                            </div>
                            <div className="text-white p-2 flex flex-col justify-center items-center">
                                <span>Men Costumes</span>
                                <span>Starting at $234</span>
                            </div>
                        </div>
                        <div className="h-60 rounded-md justify-between flex flex-col border-2 border-white border-solid " style={{ width:"187px" }}>
                            <div className="h-[80%] flex justify-center items-center" style={{ backgroundColor: "#2d2d2a" }}>
                                <CiImageOn className="text-white text-2xl"/>
                            </div>
                            <div className="text-white p-2 flex flex-col justify-center items-center">
                                <span>Men Costumes</span>
                                <span>Starting at $234</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="absolute bottom-10 p-4 rounded-lg font-bold text-black bg-white w-[90%]">View Complete Shop</button>
                </div>
            </div>
        </div>
    );
}
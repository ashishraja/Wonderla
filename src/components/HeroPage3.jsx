import { CiImageOn } from "react-icons/ci";

export default function HeroPage3() {
    return (
        <div className="bg-slate-300">
            <div style={{ position: "relative", width: '100%', height: '55vh' }}>
                <div className="absolute px-4 inset-0 flex top-0 flex-col text-left pl-6">
                    <div className="flex justify-start">
                        <h1 className="text-black text-3xl pt-12 font-bold flex flex-col"><span>Convenience</span><span>Facilities</span></h1>
                    </div>
                    <p className="text-black text-xs pt-4 flex flex-col"><span>Convenience facilities to provide you </span><span>with a seamless experience </span></p>
                    <span className="flex justify-center items-center pt-20 text-3xl"><CiImageOn /></span>
                </div>
                <div className="flex justify-center items-center">
                    <button className="absolute bottom-10 p-4 rounded-lg font-bold text-white bg-black w-[90%]">Explore Facilities</button>
                </div>
            </div>
        </div>
    );
}
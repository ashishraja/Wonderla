import DotSlider from "./Carousel";
import { CiImageOn } from "react-icons/ci";
import OffersCarousel from "./OffersCarousel";
import HeroPage2 from "./HeroPage2";
import DotSlider2 from "./DotSlider2";
import HeroPage3 from "./HeroPage3";
import HeroPage4 from "./HeroPage4";
import GroupBooking from "./GroupBooking";
import StayWonderla from "./StayWonderla";
import VideoTestimonials from "./videoTestimonials";

export default function SignatureRides() {
    return (
        <div className="mb-[10vh]">
            <div className="mb-[25px] pl-6 pr-0 pt-8 container max-w-full mx-auto">
                <h1 className="text-3xl font-bold">Signature Rides</h1>
                <div className="flex gap-3 justify-start items-center mt-6 ">
                    <p className="p-3 px-10 rounded-md bg-black text-white">Land</p>
                    <p className="p-3 px-10 rounded-md bg-slate-400 text-white">Water</p>
                    <p className="p-3 px-10 rounded-md bg-slate-400 text-white">Kids</p>
                </div>
                <DotSlider />
                <div className='pr-6'>
                    <button className="bg-black text-white p-4 rounded-md mt-6 w-[100%]">View All Rides</button>
                </div>
                <div className="flex justify-start gap-4 mt-12 items-center">
                    <p className="bg-gray-200 p-6 rounded-full"><CiImageOn /></p>
                    <p className="bg-gray-200 p-6 rounded-full"><CiImageOn /></p>
                    <p className="bg-gray-200 p-6 rounded-full"><CiImageOn /></p>
                    <p className="bg-gray-200 p-6 rounded-full"><CiImageOn /></p>
                    <p className="bg-gray-200 p-6 rounded-full"><CiImageOn /></p>
                </div>
                <OffersCarousel />
                <div className='pr-6'>
                    <button className="bg-black text-white p-4 rounded-md mt-6 w-[100%]">View All Offers</button>
                </div>
            </div>
            <HeroPage2 />
            <div className="p-4 pt-8 pl-6 pr-6">
                <h1 className="text-3xl font-bold">Special Delicacies</h1>
                <div className="flex justify-center gap-8 my-8 items-center">
                    <p className="bg-gray-200 p-10 rounded-full"><CiImageOn /></p>
                    <p className="bg-gray-200 p-10 rounded-full"><CiImageOn /></p>
                    <p className="bg-gray-200 p-10 rounded-full"><CiImageOn /></p>
                </div>
                <button className="bg-black text-white w-[100%] p-4 py-5 rounded-lg"> View Wonderla Restaurants</button>
            </div>
            <div className="p-4 pr-0 pt-8 pl-6">
                <h1 className="text-3xl font-bold ">Tickets & Packages</h1>
                <p className="text-xs w-[45%] pt-2">Special packages to enhance your fun experience </p>
                <div className="mb-[25px] pr-0 container max-w-full mx-auto">
                    <DotSlider2 />
                    <div className='pr-6'>
                        <button className="bg-black text-white p-4 rounded-md mt-6 w-[100%]">Book Packages and Save 20%</button>
                    </div>
                </div>
            </div>
            <HeroPage3 />
            <HeroPage4 />
            <GroupBooking />
            <StayWonderla />
            <VideoTestimonials />
        </div>
    )
}


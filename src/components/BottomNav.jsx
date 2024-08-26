import { CiImageOn } from "react-icons/ci";

export default function BottomNav(){
  return (
    <div className="bg-gray-200 gap-3 p-4 pl-6 flex justify-between fixed bottom-0 w-[100%] z-10">
      <div className="flex text-[12.5px] items-center justify-center">
        <div className="flex flex-col gap-1 justify-center items-center"> 
          <CiImageOn className="text-xl" /> 
          <span>Locations</span>
        </div>
      </div>
      <div className="flex text-[12.5px] gap-10 bg-white text-black p-2 px-4 rounded-md">
        <div className="flex flex-col gap-1 justify-center items-center">
          <CiImageOn className="text-xl" /> 
          <span>Book Tickets</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <CiImageOn className="text-xl" /> 
          <span>Rides</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <CiImageOn className="text-xl" /> 
          <span>Offers %</span>
        </div>
      </div>
    </div>
  );
}

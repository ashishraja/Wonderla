import { MdOutlineShoppingBag } from "react-icons/md";
import Image from 'next/image';
export default function HeaderNav() {
  return (
    <div className="bg-white text-black p-4 pl-6 py-2 flex justify-between sticky w-[100%] top-0 z-10 ">
      <div>
        <Image
          src="https://res.cloudinary.com/simplotel/image/upload/x_-1,y_101,w_843,h_389,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/wonderla-amusement-parks-resort/Dark_logo_ijroaw"
          alt="Logo"
          width={120}
          height={50}
        />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p className="p-2 bg-gray-300 rounded-full">
          <span>
            <MdOutlineShoppingBag />
          </span>
        </p>
        <p className="bg-black px-4 py-2 text-white rounded-full">Book Tickets</p>
      </div>
    </div>
  );
}

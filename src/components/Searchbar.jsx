import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineAudio } from "react-icons/ai";

function Searchbar() {
  return (
    <div className="bg-[#f8f1ee] pt-6 pb-4 px-4 ">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 bg-white py-2 rounded-full shadow-sm">
        <div className="w-5 h-5 text-[#c05e36] hover:scale-110 transition-transform duration-200 cursor-pointer">
          <IoSearchOutline className="w-5 h-5" />
        </div>

        <div className="w-[95%]">
          <input
            type="text"
            placeholder="કિર્તન શોધો"
            className="bg-transparent outline-none w-[95%] text-[#c05e36] placeholder-[#c05e36] focus:ring-0 xs:ps-4 sm:ps-2"
          />
        </div>

        <div className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#c05e36]/20">
          <AiOutlineAudio className="w-5 h-5 text-[#c05e36]" />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;

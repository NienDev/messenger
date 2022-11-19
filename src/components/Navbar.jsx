import React from "react";
import Search from "./SearchBar";
export default function Navbar() {
  return (
    <div className="w-screen h-[60px] text-[#E7E9ED] bg-[#242526] border-b-[1px] border-gray-600 flex items-center justify-between px-4">
      <div className="flex w-[400px] items-center">
        <img
          src="/imgs/facebook.svg"
          alt="icon"
          className="bg-transparent mr-4 h-[32px] w-[32px] rounded-full"
        />
        <Search />
      </div>
      <div className="flex gap-24 flex-1 ml-24">
        <img className="w-[32px] h-[32px]" src="imgs/home.svg" alt="icon" />
        <img className="w-[32px] h-[32px]" src="imgs/tv.svg" alt="icon" />
        <img className="w-[32px] h-[32px]" src="imgs/group.svg" alt="icon" />
        <img className="w-[32px] h-[32px]" src="imgs/puzzle.svg" alt="icon" />
      </div>
      <div className="flex gap-2">
        <img
          className="w-[32px] h-[32px] bg-[#4E4F50] p-[8px] rounded-full"
          src="imgs/dots.svg"
          alt="icon"
        />
        <img
          className="w-[32px] h-[32px] bg-[#4E4F50] p-[8px] rounded-full"
          src="imgs/bell.svg"
          alt="icon"
        />
        <img
          className="w-[32px] h-[32px] object-cover object-center rounded-full"
          src="imgs/her.jpg"
          alt="user-image"
        />
      </div>
    </div>
  );
}

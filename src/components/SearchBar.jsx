import React from "react";

export default function SearchBar() {
  return (
    <div className="flex bg-[#3A3B3C] rounded-full px-4 py-2 gap-4 w-[300px]">
      <img src="/imgs/magnifier.svg" alt="icon" className="h-[24px] w-[24px]" />
      <input
        className="bg-transparent w-full focus:outline-none"
        type="text"
        placeholder="Tìm kiếm trên Facebook"
      />
    </div>
  );
}

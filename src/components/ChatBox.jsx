import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";
export default function ChatBox(props) {
  const { setCurrentChatFriendID } = useContext(DataContext);
  return (
    <div
      className="flex gap-2 text-[#e4e6eb] p-2 rounded-[10px] hover:bg-[#3a3b3c] cursor-pointer"
      onClick={() => {
        setCurrentChatFriendID(props.id);
      }}
    >
      <img
        className="h-[60px] w-[60px] rounded-full object-cover object-center"
        src={props.img}
        alt="user-image"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-lg ">{props.name}</h1>
        <p className="font-light text-[#b0b3b8]">latest msg</p>
      </div>
    </div>
  );
}

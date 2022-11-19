import React from "react";
import ChatBox from "./ChatBox";
import { DataContext } from "../context/dataContext";
import { useContext } from "react";
import { info } from "autoprefixer";
export default function SideChat() {
  const { currentUserID, getMsgData, getUserInfo } = useContext(DataContext);
  const msgData = getMsgData(currentUserID);
  const friends = msgData[0].friends;

  return (
    <div className="w-[350px] bg-[#242526] h-[90%] p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#e4e6eb]">Chat</h1>
        <div className="flex gap-2">
          <img
            className="h-[40px] w-[40px] bg-[#4E4F50] rounded-[50%] p-2"
            src="/imgs/3dots.svg"
            alt="icon"
          />
          <img
            className="h-[40px] w-[40px] bg-[#4E4F50] rounded-[50%] p-2 "
            src="/imgs/meeting.svg"
            alt="icon"
          />
          <img
            className="h-[40px] w-[40px] bg-[#4E4F50] rounded-[50%] p-2 "
            src="/imgs/note.svg"
            alt="icon"
          />
        </div>
      </div>

      <div className="flex bg-[#3A3B3C] rounded-full px-4 py-2 gap-4 w-full mt-4 mb-2">
        <img
          src="/imgs/magnifier.svg"
          alt="icon"
          className="h-[24px] w-[24px]"
        />
        <input
          className="bg-transparent w-full focus:outline-none"
          type="text"
          placeholder="Tìm kiếm trên Facebook"
        />
      </div>

      <button className="p-1 pb-2 px-3 rounded-full font-semibold bg-[#3C4D63] text-[#4280CD]">
        Hộp Thư
      </button>

      <div className="h-[460px] mt-2 overflow-y-auto pr-2">
        {friends.map((friend) => {
          const info = getUserInfo(friend.id);
          return (
            <ChatBox
              key={friend.id}
              id={friend.id}
              img={info[0].img}
              name={info[0].name}
            />
          );
        })}
      </div>
    </div>
  );
}

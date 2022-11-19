import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";
export default function MainChat() {
  const { currentChatFriendID, currentUserID, getMsgs, getUserInfo } =
    useContext(DataContext);

  const msgsObj = getMsgs(currentUserID, currentChatFriendID);
  const msgs = msgsObj[0]?.msgs;
  const friendInfo = getUserInfo(currentChatFriendID);
  // console.log(friendInfo);
  return (
    <div className="flex-1 px-2 h-screen bg-[#242526]">
      <div className="h-[60px] bg-transparent] shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={friendInfo[0].img}
            alt="user-image"
            className="h-[32px] w-[32px] rounded-full object-cover object-center"
          />
          <h1 className="font-semibold text-lg text-[#e4e6eb]">
            {friendInfo[0].name}
          </h1>
        </div>
        <div className="flex gap-4">
          <img
            className="h-[24px] w-[24px]"
            src="/imgs/phone.svg"
            alt="phone-icon"
          />
          <img
            className="h-[24px] w-[24px]"
            src="/imgs/video.svg"
            alt="video-icon"
          />
          <img
            className="h-[24px] w-[24px]"
            src="/imgs/info.svg"
            alt="info-icon"
          />
        </div>
      </div>

      <div className="mt-2 flex gap-4 flex-col h-[540px] overflow-y-auto">
        <div className="mr-auto ml-0 text-[#e4e6eb] w-[80%] p-2 rounded-r-xl rounded-tl-xl bg-[#3a3b3c]   whitespace-normal ">
          <span>
            nietranfjadlkjfkla sdjflkdjsan nien nien ienienoi enioe noe e Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium corrupti labore cupiditate atque at magni dolor expedita
            perspiciatis. Ab pariatur magni aliquam quos eligendi inventore
            provident eos molestias officia? Aliquam provident itaque sit
            sapiente cumque laudantium ducimus hic odit a modi, deserunt ipsum
            fuga doloribus, harum illum molestiae, aspernatur possimus
            reiciendis amet nostrum iusto ab magnam facere repellat. Nesciunt.
          </span>
        </div>

        <div className="ml-auto mr-0 text-[#e4e6eb] w-[80%] p-2 rounded-l-xl rounded-tr-xl bg-[#3a3b3c]   whitespace-normal ">
          <span>
            nietranfjadlkjfkla sdjflkdjsan nien nien ienienoi enioe noe e Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium corrupti labore cupiditate atque at magni dolor expedita
            perspiciatis. Ab pariatur magni aliquam quos eligendi inventore
            provident eos molestias officia? Aliquam provident itaque sit
            sapiente cumque laudantium ducimus hic odit a modi, deserunt ipsum
            fuga doloribus, harum illum molestiae, aspernatur possimus
            reiciendis amet nostrum iusto ab magnam facere repellat. Nesciunt.
          </span>
        </div>
        <div className="ml-auto mr-0 text-[#e4e6eb] w-[80%] p-2 rounded-l-xl rounded-tr-xl bg-[#3a3b3c]   whitespace-normal ">
          <span>
            nietranfjadlkjfkla sdjflkdjsan nien nien ienienoi enioe noe e Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium corrupti labore cupiditate atque at magni dolor expedita
            perspiciatis. Ab pariatur magni aliquam quos eligendi inventore
            provident eos molestias officia? Aliquam provident itaque sit
            sapiente cumque laudantium ducimus hic odit a modi, deserunt ipsum
            fuga doloribus, harum illum molestiae, aspernatur possimus
            reiciendis amet nostrum iusto ab magnam facere repellat. Nesciunt.
          </span>
        </div>

        <div className="ml-auto mr-0 text-[#e4e6eb] w-[80%] p-2 rounded-l-xl rounded-tr-xl bg-[#3a3b3c]   whitespace-normal ">
          <span>
            nietranfjadlkjfkla sdjflkdjsan nien nien ienienoi enioe noe e Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium corrupti labore cupiditate atque at magni dolor expedita
            perspiciatis. Ab pariatur magni aliquam quos eligendi inventore
            provident eos molestias officia? Aliquam provident itaque sit
            sapiente cumque laudantium ducimus hic odit a modi, deserunt ipsum
            fuga doloribus, harum illum molestiae, aspernatur possimus
            reiciendis amet nostrum iusto ab magnam facere repellat. Nesciunt.
          </span>
        </div>
      </div>
    </div>
  );
}

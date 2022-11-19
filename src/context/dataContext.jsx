import data from "../data/data.json";
import { createContext, useState } from "react";

export const DataContext = createContext();

export const getUserInfo = (id) => {
  const userInfo = data.UserInfo.filter((user) => {
    return user.id === id;
  });
  return userInfo;
};

const getMsgData = (id) => {
  const msgData = data.userMsg.filter((user) => user.id === id);
  return msgData;
};

const getMsgs = (currentUserID, currentChatFriendID) => {
  const msgData = getMsgData(currentUserID);
  const friends = msgData[0].friends;
  const currentFriendMsgs = friends.filter(
    (friend) => friend.id === currentChatFriendID
  );
  return currentFriendMsgs;
};

export const DataContextProvider = ({ children }) => {
  const [currentUserID, setCurrentUserID] = useState("U1");
  const [currentChatFriendID, setCurrentChatFriendID] = useState(
    getMsgData(currentUserID)[0].friends[0].id
  );
  // console.log(getMsgData(currentUserID)[0].friends[0].oid);

  return (
    <DataContext.Provider
      value={{
        currentUserID,
        getMsgData,
        getUserInfo,
        currentChatFriendID,
        setCurrentChatFriendID,
        setCurrentUserID,
        getMsgs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

import React from "react";

const ChatMessage = ({name, message}) => {

  return (
    <div className="flex items-center shadow-sm p-1 m-1">
    <div>
      <img className="h-8"
        alt="chat user"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
      />
    </div>
    <span className="font-bold px-2">{name}</span>
    <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;

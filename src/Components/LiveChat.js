import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  
  const [liveMesssage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(25) + "😍",
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
    <div className="p-2 ml-6 w-96 h-[450px] border border-gray-300 rounded-xl bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c,i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMessage({
        name: "Varsha Prajapati",
        message: liveMesssage,
      }))
      setLiveMessage("")
    }} className="p-2 ml-6 w-96 border border-gray-400 rounded-xl">
        <input className="h-10 w-72 border border-gray-500" type="text" value={liveMesssage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className="bg-cyan-800 hover:bg-cyan-500 text-cyan-50 font-semibold px-2 ml-3 h-10 w-16 rounded-lg">Send</button>
    </form>
    </>
  );
};

export default LiveChat;

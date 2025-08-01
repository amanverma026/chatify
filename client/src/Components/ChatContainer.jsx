import React, { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formateMessageTime } from "../lib/utils";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();
  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooths" });
    }
  }, []);

  return selectedUser ? (
    <div className="h-full overflow-scroll realtive backdrop-blur-lg">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={selectedUser?.profilePic || assets.avatar_icon}
          alt="profile picture"
          className="w-8 rounded-full"
        />
        <p className="text-white text-lg flex-1 flex items-center gap-2 ">
          {selectedUser.fullName}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img
          onClick={() => {
            setSelectedUser(null);
          }}
          src={assets.arrow_icon}
          alt="icon"
          className="md:hidden max-w-7 cursor-pointer"
        />
        <img
          src={assets.help_icon}
          alt="help icon"
          className="max-md:hidden max-w-5"
        />
      </div>
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((msg, index) => {
          return (
            <div
              key={index}
              className={`flex item-end gap-2 justify-end ${
                msg.senderId !== "680f50e4f10f3cd28382ecf9" &&
                "flex-row-reverse"
              }`}
            >
              {msg.image ? (
                <img
                  src={msg.image}
                  alt=""
                  className="max-w[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
                />
              ) : (
                <p
                  className={`p-2 max-w-[200px] md:text-sum font-light rounded-lg mb-8 break-all bg-violet-300/20 text-white ${
                    msg.senderId === "680f50e4f10f3cd28382ecf9"
                      ? "rounded-br-none"
                      : "rounded-bl-nonex"
                  }`}
                >
                  {msg.text}
                </p>
              )}
              <div className="text-center text-xs flex flex-col justify-end">
                <img
                  src={
                    msg.senderId === "680f50e4f10f3cd28382ecf9"
                      ? assets.avatar_icon
                      : assets.profile_martin
                  }
                  alt=""
                  className="w-7 rounded-full "
                />
                <p className="text-gray-500 mt-0.5">
                  {formateMessageTime(msg.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
        <div className="" ref={scrollEnd}></div>
      </div>

      {/* ------- bottom area ------- */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400 bg-transparent"
          />

          <input type="file" id="image" accept="image/png, image/jpeg" hidden />

          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="Upload"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>

        <img
          src={assets.send_button}
          alt="Send"
          className="w-7 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center gap-2  text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} alt="" className="max-w-16" />
      <p className="text-lg text-white font-medium">Chat anywhere,anytime</p>
    </div>
  );
};

export default ChatContainer;

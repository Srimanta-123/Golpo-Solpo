import Message from "./Message";
import User from "./User";
import { IoIosSend } from "react-icons/io";
import React from "react";


const MessageContainer = () => {
    return (
        <div className="h-screen w-full flex flex-col">
            <div className="p-3 border-b border-b-white/10">
                <User />
            </div>

            <div className="h-full overflow-y-auto p-3">
                <Message />
            </div>

            <div className="w-full p-3 flex gap-2">
                <input
                    type="text"
                    placeholder="Type here ..."
                    className="input input-bordered input-primary w-full"
                />
                <button className="btn btn-square btn-outline btn-primary">
                    <IoIosSend />
                </button>
            </div>
        </div>
    );
};

export default MessageContainer;

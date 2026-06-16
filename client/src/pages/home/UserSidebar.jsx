import User from "./User";
import { IoSearch } from "react-icons/io5"; // Importing from Ionicons
import React from "react";


const UserSidebar = () => {
    return (
        <div className="max-w-[20em] w-full h-screen flex flex-col border-r border-r-white/10 ">
          
            <h1 className="bg-black mx-3 rounded-lg mt-3 px-2 py-1 text-[#7480FF] text-xl font-semibold">Golpo Solpo</h1>

          
            <div className="p-3">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <IoSearch />
                </label>
            </div>

            <div className="h-full overflow-y-auto px-3">
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />    
            </div>

            <div className="flex items-center justify-between p-3 border-t border-t-white/10">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <button class="btn btn-primary btn-sm px-4">Logout</button>
            </div>
        </div>
    );
};

export default UserSidebar;

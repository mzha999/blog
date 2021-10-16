import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU"
        alt=""
        className="round-full border p-[2px] w-16 h-16"
      />

      <div className="flex-1 mx-4">
          <h2 className="font-bold">KKKKK</h2>
          <h3 className="text-sm text-gray-400">Welcome to my Blog</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;

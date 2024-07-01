import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold my-7 text-center">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avator}
          alt="profile-image"
          className="rounded-full w-24 h-24 cursor-pointer self-center"
        />
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border rounded-lg p-3 focus:outline-none"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border rounded-lg p-3 focus:outline-none"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border rounded-lg p-3 focus:outline-none"
        />
        <button className="uppercase bg-slate-700 text-white cursor-pointer rounded-lg p-3 hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex items-center justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete your account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;

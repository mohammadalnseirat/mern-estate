import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          id="email"
          placeholder="email"
          className="p-3 rounded-lg focus:outline-none"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="p-3 rounded-lg focus:outline-none"
        />
        <button className="uppercase bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex items-center gap-2 mt-4">
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700  underline font-semibold ">
            Sign up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

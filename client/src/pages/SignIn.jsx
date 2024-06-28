import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // state for changing the input:
  const [formData, setFormData] = useState({});
  // state for loading:
  const [loading, setLoading] = useState(false);
  // state for error message:
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // handle change the input:
  const handChangeInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // handle submit:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // create response:
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      // convert data to json:
      const data = await res.json();
      // ckeck if data.success === false
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      // if success:
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          id="email"
          placeholder="email"
          className="p-3 rounded-lg focus:outline-none"
          onChange={handChangeInput}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="p-3 rounded-lg focus:outline-none"
          onChange={handChangeInput}
        />
        <button
          disabled={loading}
          className="uppercase bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SignIn;

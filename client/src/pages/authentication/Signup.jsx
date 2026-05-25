import React, { useState } from "react";

import { FaUser, FaGithub } from "react-icons/fa";
import { IoKeySharp, IoEyeOutline, IoEyeOffOutline, IoMailOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";





const Signup = () => {


// const [signupData , setsignupData] = useState({ username : "" , email : "" , password : "" , confirmPassword : ""});

// function handleChange(e){ 
//   //console.log(e.target.name);

//   setsignupData((prev) => 
//     ({...prev,
//     [e.target.name]: e.target.value})); 
      
// };

















  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    // PAGE WRAPPER — change bg-base-300 to change page background
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">

      {/* CARD — change max-w-sm for width */}
      <div className="w-full max-w-sm bg-base-100 rounded-2xl shadow-xl overflow-hidden">

        {/* TOP COLOR BAR — change from-primary via-secondary to-accent */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

        <div className="p-8 flex flex-col gap-6">

          {/* HEADING — change text here */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-base-content">
              Create account
            </h1>
            <p className="text-sm text-base-content/50">
              Sign up to get started today
            </p>
          </div>

          <div className="flex flex-col gap-4">

            {/* USERNAME INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                Username
              </label>
              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <FaUser className="text-base-content/40 shrink-0" size={13} />
                <input
                  type="text"
                  name="username"
                  className="grow text-sm"
                  placeholder="Choose a username"
                  value={signupData.username}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* EMAIL INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                Email
              </label>
              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                {/* icon — swap IoMailOutline with any react-icon */}
                <IoMailOutline className="text-base-content/40 shrink-0" size={15} />
                <input
                  type="email"
                  name="email"
                  className="grow text-sm"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* PASSWORD INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                Password
              </label>
              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <IoKeySharp className="text-base-content/40 shrink-0" size={15} />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="grow text-sm"
                  placeholder="••••••••"
                  value={signupData.password}
                  onChange={handleChange}
                />
                {/* EYE TOGGLE — remove button to disable show/hide */}
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="text-base-content/40 hover:text-base-content transition-colors"
                >
                  {showPass ? <IoEyeOffOutline size={17} /> : <IoEyeOutline size={17} />}
                </button>
              </label>
            </div>

            {/* CONFIRM PASSWORD INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                Confirm Password
              </label>
              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <IoKeySharp className="text-base-content/40 shrink-0" size={15} />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  className="grow text-sm"
                  placeholder="••••••••"
                  value={signupData.confirmPassword}
                  onChange={handleChange}
                />
                {/* EYE TOGGLE — remove button to disable show/hide */}
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="text-base-content/40 hover:text-base-content transition-colors"
                >
                  {showConfirm ? <IoEyeOffOutline size={17} /> : <IoEyeOutline size={17} />}
                </button>
              </label>
            </div>

          </div>

          {/* SUBMIT BUTTON — add onClick handler here, change btn-primary for color */}
          <button
            className="btn btn-primary w-full rounded-xl font-semibold tracking-wide"
            // add: onClick={} disabled={}
          >
            Create account
          </button>

          {/* DIVIDER — remove this + oauth block if not needed */}
          {/* <div className="divider text-xs text-gray-200 my-0">
            or continue with
          </div> */}

          {/* OAUTH BUTTONS — remove any button you don't need */}
          {/* <div className="grid grid-cols-2 gap-3">
            <button className="btn btn-outline btn-sm rounded-xl gap-2 font-normal">
              <FcGoogle size={16} /> Google
            </button>
            <button className="btn btn-outline btn-sm rounded-xl gap-2 font-normal">
              <FaGithub size={16} /> GitHub
            </button>
          </div> */}

          {/* LOGIN LINK — change /login to your route */}
          <p className="text-center text-sm text-base-content/50">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;

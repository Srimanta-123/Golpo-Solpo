import React, { useState, useEffect } from "react";

import { FaUser } from "react-icons/fa";
import { IoKeySharp, IoEyeOutline, IoEyeOffOutline, IoMailOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";




const Signup = () => {


  // Hooks for navigation, dispatching actions, and accessing authentication state

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);





  // State to hold signup form data

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });


  // Redirect to home page if user is already authenticated

  // useEffect(() => {
  //   if (isAuthenticated) navigate("/");
  // }, [isAuthenticated]);





  // Function to handle input changes in the signup form

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };





  // Function to handle signup form submission

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and confirm password do not match");
    }

    const response = await dispatch(registerUserThunk(signupData));

    console.log(response);

    if (registerUserThunk.fulfilled.match(response)) {
      navigate("/");
    }

    // if (response?.payload?.success) {
    //   navigate("/");
    // }
  };




  // State to toggle password visibility

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(true);





  // JSX for the signup page

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


           {/* FULLNAME INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">
              {/* <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                fullname
              </label> */}
              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <FaUser className="text-base-content/40 shrink-0" size={13} />
                <input
                  type="text"
                  name="fullName"
                  className="grow text-sm"
                  placeholder="Choose a Fullname"
                  value={signupData.fullName}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            {/* USERNAME INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">
              {/* <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                Username
              </label> */}
              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <FaUser className="text-base-content/40 shrink-0" size={13} />
                <input
                  type="text"
                  name="username"
                  className="grow text-sm"
                  placeholder="Choose a username"
                  value={signupData.username}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            

            {/* PASSWORD INPUT — add value, onChange here */}
            <div className="flex flex-col gap-1">

              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <IoKeySharp className="text-base-content/40 shrink-0" size={15} />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="grow text-sm"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleInputChange}
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

              <label className="input input-bordered focus-within:input-primary flex items-center gap-3">
                <IoKeySharp className="text-base-content/40 shrink-0" size={15} />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  className="grow text-sm"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleInputChange}
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


            {/* GENDER */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                Gender
              </label>

              <div className="flex gap-4">

                <label className="label cursor-pointer gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={signupData.gender === "male"}
                    onChange={handleInputChange}
                    className="radio radio-primary"
                  />
                  <span>Male</span>
                </label>

                <label className="label cursor-pointer gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={signupData.gender === "female"}
                    onChange={handleInputChange}
                    className="radio radio-primary"
                  />
                  <span>Female</span>
                </label>

              </div>
            </div>

          </div>

          {/* SUBMIT BUTTON — add onClick handler here, change btn-primary for color */}
          <button
            className="btn btn-primary w-full rounded-xl font-semibold tracking-wide"
            onClick={handleSignup}
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

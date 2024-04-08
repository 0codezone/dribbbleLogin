import React from "react";
import logo from "../assets/logo.png";
import sideImg from "../assets/signupSide.png";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/createProfile");
  };

  return (
    <div className="w-full h-screen flex">
      <section className=" h-full bg-yellow-300 md:min-w-[400px] hidden md:flex flex-col justify-between px-8">
        <div>
          <img src={logo} alt="#" width={100} />
          <h2 className="font-bold text-xl text-orange-800 ">
            Discover the world's top <br />
            Designer & Creative
          </h2>
        </div>

        <div className="mb-[60px]">
          <img src={sideImg} alt="#" width={400} />
          <p className="text-sm mt-[20px] text-orange-800">
            Art by <span>Mohit Darji</span>
          </p>
        </div>
      </section>

      <section className="h-full w-full p-4">
        <div className="w-full py-6">
          <p className="text-sm float-right px-5">
            Already a member? <span className="text-purple-800">Sign in</span>
          </p>
        </div>
        <div className="w-full flex justify-center items-center py-3 mt-5 px-4 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Sign up to Dribble
            </h2>
            <p className="text-red-500 text-xs py-3">
              Username has been already taken
            </p>
            <form>
              <div className="flex gap-3 py-2 w-full">
                <div className="flex flex-col w-full">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="outline-none border-none pl-2 p-1 bg-gray-400/30 rounded w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="outline-none border-none pl-2 p-1 bg-red-400/50 rounded placeholder:text-red-500 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label>email</label>
                <input
                  type="text"
                  placeholder="email"
                  className="outline-none border-none pl-2 p-1 bg-gray-400/30 rounded w-full"
                />
              </div>
              <div className="flex flex-col py-2">
                <label>password</label>
                <input
                  type="text"
                  placeholder="6+ characters"
                  className="outline-none border-none pl-2 p-1 bg-gray-400/30 rounded w-full"
                />
              </div>
              <div className="flex gap-2 items-start py-5 text-sm">
                <input type="checkbox" className="mt-1" />
                <p className="sm:max-w-[400px] text-xs sm:text-sm">
                  Creating an account mean's you're okay with out{" "}
                  <span className="text-purple-800">
                    Term of Service. Privacy Policy.
                  </span>{" "}
                  and our default{" "}
                  <span className="text-purple-800">
                    Notification Settigns.
                  </span>
                </p>
              </div>
              <div className="py-2">
                <button
                  className="bg-pink-500 text-white px-5 py-1 rounded-md"
                  onClick={handleSignup}
                >
                  Create Account
                </button>
              </div>
            </form>
            <p className="text-xs py-2 mt-2 text-gray-600">
              This site is protected by reCAPTCHA and the Google <br />
              <span className="text-purple-800 font-bold">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-purple-800 font-bold">
                Term of Services{" "}
              </span>
              apply
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupForm;

import React from "react";
import logo from "../assets/logo.png";
import sideImg from "../assets/signupSide.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState(false); // State for name input error
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    // Basic validation checks
    if (!name.trim()) {
      setNameError(true);
      setError("Please enter your name.");
      return;
    } else {
      setNameError(false);
    }

    if (!username.trim()) {
      setUsernameError(true);
      setError("Please enter a username.");
      return;
    } else {
      setUsernameError(false);
    }

    if (!email.trim()) {
      setEmailError(true);
      setError("Please enter your email.");
      return;
    } else {
      setEmailError(false);
    }

    if (!password.trim()) {
      setError("Please enter a password.");
      return;
    }

    // Additional password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/\d/.test(password)) {
      setError("Password must contain at least one digit.");
      return;
    }

    // if (!/[!@#$%^&*()-_=+{};:'",.<>?/|\\[\]`~]/.test(password)) {
    //   setError("Password must contain at least one special character.");
    //   return;
    // }

    if (!agreeTerms) {
      setError("Please agree to the terms of service.");
      return;
    }

    // If all validations pass, navigate to the next page
    setError("");
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Sign up to Dribble
            </h2>
            {error && <p className="text-red-500 text-xs py-3">{error}</p>}
            <form onSubmit={handleSignup}>
              <div className="flex gap-3 py-2 w-full">
                <div className="flex flex-col w-full">
                  <label className="ml-2 text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`outline-none pl-2 p-1 bg-gray-200 rounded w-full ${
                      nameError ? "border-red-500 border" : "border-none"
                    }`}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="ml-2 text-sm">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`outline-none pl-2 p-1 bg-gray-200 rounded w-full ${
                      usernameError ? "border border-red-500" : "border-none"
                    } `}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="ml-2 text-sm">Email</label>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`outline-none pl-2 p-1 bg-gray-200 rounded w-full ${
                    emailError ? "border border-red-500" : "border-none"
                  }`}
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="ml-2 text-sm">Password</label>
                <input
                  type="text"
                  placeholder="6+ characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none border-none pl-2 p-1 bg-gray-200 rounded w-full"
                />
              </div>
              <div className="flex gap-2 items-start py-5 text-sm">
                <input
                  type="checkbox"
                  value={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.value)}
                  className="mt-1"
                />
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
                  type="submit"
                  className="bg-pink-500 text-white px-5 py-1 rounded-md"
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

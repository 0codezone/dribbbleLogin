import React from "react";
import logo from "../assets/logo.png";
import workImg from "../assets/workf.png";
import { useNavigate } from "react-router-dom";

const Role = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/verification");
  };
  return (
    <div className="w-full min-h-screen">
      <section className="w-full px-8 ">
        <img src={logo} alt="#" width={100} />
      </section>
      <section className="flex flex-col justify-center items-center w-full md:gap-10 gap-5  px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            What brings you to Dribbble?
          </h2>
          <p className="text-xs text-gray-600 my-4">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-center gap-5">
          <div className="border border-gray-200 rounded-lg p-4 text-center flex flex-col items-center group hover:border-pink-500">
            <img
              src={workImg}
              alt=""
              width={100}
              className="group-hover:-translate-y-10 group-hover:z-[99]"
            />

            <p className="my-1 md:max-w-[200px] w-full text-xs text-gray-600 hidden group-hover:flex">
              I'm a designer looking to share my work
            </p>
            <p className="my-2 md:max-w-[200px] w-full">
              I'm a designer looking to share my work
            </p>
            <input type="checkbox" />
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center flex flex-col items-center group hover:border-pink-500">
            <img
              src={workImg}
              alt=""
              width={100}
              className="group-hover:-translate-y-10 group-hover:z-[99]"
            />

            <p className="my-1 md:max-w-[200px] w-full text-xs text-gray-600 hidden group-hover:flex">
              I'm a designer looking to share my work
            </p>
            <p className="my-2 md:max-w-[200px] w-full">
              I'm a developer seeking inspiration
            </p>
            <input type="checkbox" />
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center flex flex-col items-center group hover:border-pink-500">
            <img
              src={workImg}
              alt=""
              width={100}
              className="group-hover:-translate-y-10 group-hover:z-[99]"
            />

            <p className="my-1 md:max-w-[200px] w-full text-xs text-gray-600 hidden group-hover:flex">
              I'm a designer looking to share my work
            </p>
            <p className="my-2 md:max-w-[200px] w-full">
              I'm looking to hire designers
            </p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="py-3 md:mt-8 mt-4">
          <button
            className="bg-[#fb3745] text-white px-5 py-1 rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Role;

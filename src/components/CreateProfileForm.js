import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const CreateProfileForm = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/role");
  };
  return (
    <div className="w-full min-h-screen">
      <section className="w-full px-8 ">
        <img src={logo} alt="#" width={100} />
      </section>
      <section className="flex justify-center w-full">
        <div className="px-8 ">
          <h2 className="text-2xl md:text-3xl font-bold">
            Welcome! Let's create your profile
          </h2>
          <p className="text-sm text-gray-600 py-2">
            Let others get to know you better! You can also do this later.
          </p>
          <form>
            <p className="text-lg mt-4 md:mt-8 font-bold">Add an Avatar</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-2 md:my-4 md:items-center">
              <div className="w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full border-2 border-gray-300 border-dotted flex items-center justify-center overflow-hidden">
                <img src="#" alt="#" className="rounded-full object-cover" />
              </div>
              <div>
                <input type="file" className="outline-none" />
                <p className="text-sm text-gray-600 py-2">
                  Or choose one of our default avatars
                </p>
              </div>
            </div>
            <div className="w-full">
              <p className="text-lg mt-4 md:mt-8 font-bold">
                Add your Location
              </p>
              <input
                type="text"
                placeholder="Enter Your location"
                className="outline-none border-b mt-2 w-full"
              />
            </div>
            <div className="py-3 mt-8">
              <button
                className="bg-pink-500 text-white px-5 py-1 rounded-md"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateProfileForm;

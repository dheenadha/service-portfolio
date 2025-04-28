import React from "react";
import investor1 from "../assets/investor1.jpg";
import investor2 from "../assets/investor2.jpg";
import { PiBuildings } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Investors = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-blue-500/70 mb-12">Investors</h1>
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-12">
        {/* Card 1 */}
        <div className="w-full sm:w-[300px] h-[25rem] bg-[#fff] rounded-2xl border-[3px] border-blue-500/50 shadow-lg shadow-blue-500/100 transition-all duration-400 ease-in hover:-translate-y-6 hover:border-blue-500/75 hover:rounded-[6rem_0_6rem_0] flex flex-col items-center justify-center p-6">
          <div>
            <div className="flex justify-center rounded-full bg-blue-500/50 mb-6">
              <img
                src={investor1}
                alt="Person 1"
                className="w-36 h-36 rounded-full object-cover mt-2 border-4 border-blue-500 shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-gray-800 text-xl font-semibold mb-2 shadow-sm border-[2px] border-blue-500/25 bg-blue-500/25 rounded-xl w-44 text-center shadow-blue-500/75">
            G.Saranya
          </h2>
          <div className="flex ">
            <span className="mt-1">
              <MdOutlineEmail />
            </span>
            <p className="text-black text-base mb-1">Sagoinvest@gmail.com</p>
          </div>

          <div className="flex text-lg mb-1">
            <span className="mt-1">
              <PiBuildings />
            </span>
            <p className="text-black text-base text-center ">SG Groups</p>
          </div>

          <div className="flex">
            <span className="mt-1">
              <FaLocationDot />
            </span>
            <p>Vellore</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[300px] h-[25rem] bg-[#fff] rounded-2xl border-[3px] border-blue-500/50 shadow-lg shadow-blue-500/100 transition-all duration-400 ease-in hover:-translate-y-6 hover:border-blue-500/75 hover:rounded-[6rem_0_6rem_0] flex flex-col items-center justify-center p-6">
          <div className="flex justify-center rounded-full bg-blue-500/50 mb-6">
            <img
              src={investor2}
              alt="Person 2"
              className="w-36 h-36 rounded-full object-cover mt-2 border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h2 className="text-gray-800 text-xl font-semibold mb-2 shadow-sm border-[2px] border-blue-500/25 bg-blue-500/25 rounded-xl w-44 text-center shadow-blue-500/75">
            A.Kathiravan
          </h2>

          <div className="flex ">
            <span className="mt-1">
              <MdOutlineEmail />
            </span>
            <p className="text-black text-base mb-1">asaikathir@gmail.com</p>
          </div>

          <div className="flex text-lg mb-1">
            <span className="mt-1">
              <PiBuildings />
            </span>
            <p className="text-black text-base text-center">
              Sri Durgaiamman Constructions
            </p>
          </div>

          <div className="flex">
            <span className="mt-1">
              <FaLocationDot />
            </span>
            <p>Kallakurichi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;

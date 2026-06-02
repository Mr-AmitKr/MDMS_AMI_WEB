import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const MeterDetailsMap = () => {
  return (
    <div className="bg-[#151921] rounded-xl p-4">
      <h3 className="text-white text-sm mb-3">
        Meter Details On Map
      </h3>

      <p className="text-xs text-gray-400 mb-2">
        Search Location
      </p>

      <div className="relative">
        <IoSearch className="absolute left-3 top-3 text-gray-500" />

        <input
          type="text"
          placeholder="Enter a location"
          className="w-full bg-[#2a2f3a] border border-[#3d4450] rounded-md py-2 pl-10 pr-3 text-white text-sm outline-none"
        />
      </div>

      <div className="mt-4 h-[180px] rounded-lg bg-gradient-to-b from-slate-300 to-slate-400 flex flex-col items-center justify-center">
        <MdLocationPin
          size={40}
          className="text-blue-700"
        />

        <p className="text-gray-700 text-xs mt-2">
          Map view of meter locations
        </p>
      </div>
    </div>
  );
};

export default MeterDetailsMap;
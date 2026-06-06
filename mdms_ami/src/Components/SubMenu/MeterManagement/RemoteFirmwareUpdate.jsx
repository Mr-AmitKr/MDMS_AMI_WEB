import React from 'react'
import { useState } from "react";

const RemoteFirmwareUpdate = () => {
     const [activeTab, setActiveTab] = useState("meter");

  return (
    <div>
            <h1 className="text-xl text-white font-light tracking-wider px-4 py-4">Remote Firmware Update</h1>
           
<div className="flex items-end space-x-1 bg-[#1c1e27] border-b border-gray-800 p-1 rounded-t-lg">
  <button
    onClick={() => setActiveTab("meter")}
    className={`px-4 py-2 text-[13px] font-semibold rounded-t-lg transition-colors ${
      activeTab === "meter"
        ? "bg-[#12131a] text-white"
        : "text-gray-400 hover:text-gray-200"
    }`}
  >
    Meter Firmware Update
  </button>

  <button
    onClick={() => setActiveTab("comm")}
    className={`px-4 py-2 text-[13px] font-semibold rounded-t-lg transition-colors ${
      activeTab === "comm"
        ? "bg-[#12131a] text-white"
        : "text-gray-400 hover:text-gray-200"
    }`}
  >
    Comm Module Update
  </button>
</div>
<div className="bg-[#1c1e27] border border-gray-800 border-t-0 p-5 rounded-b-lg mb-8 shadow-md">
  <h2 className="text-[16px] text-[#f8f9fa] font-semibold mb-5">
  {activeTab === "meter"
    ? "Meter Firmware Update"
    : "Comm Module Update"}
</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
    
    {/* Firmware Version */}
    <div className="flex flex-col space-y-1.5">
      <label className="text-[#a0a4b8] text-[13px] font-medium">
        Firmware Version
      </label>

      <select className="bg-[#12131a] text-[#e2e8f0] border border-gray-700/80 rounded px-3 py-1.5 outline-none focus:border-[#007bff] transition-colors">
        <option>Select Firmware Version</option>
        <option>v1.0.5</option>
        <option>v2.0.2</option>
      </select>
    </div>

    {/* Upload Firmware */}
    <div className="flex flex-col space-y-1.5">
      <label className="text-[#a0a4b8] text-[13px] font-medium">
        Upload New Firmware
      </label>

      <div className="flex items-center gap-3">
        <label className="bg-[#12131a] border border-gray-700/80 hover:bg-[#1a1c23] text-[#e2e8f0] px-3 py-1.5 rounded text-[13px] cursor-pointer transition-colors shadow-sm">
          Choose File
          <input type="file" className="hidden" />
        </label>

        <span className="text-[#a0a4b8] text-[13px]">
          No File Chosen
        </span>
      </div>
    </div>

    {/* Selection Mode */}
    <div className="flex flex-col space-y-1.5">
      <label className="text-[#a0a4b8] text-[13px] font-medium">
        Selection Mode
      </label>

      <select className="bg-[#12131a] text-[#e2e8f0] border border-gray-700/80 rounded px-3 py-1.5 outline-none focus:border-[#007bff] transition-colors">
        <option>Unicast (Single Meter)</option>
        <option>Multicast</option>
        <option>Broadcast</option>
      </select>
    </div>

    {/* Target Meter */}
    <div className="flex flex-col space-y-1.5">
      <label className="text-[#a0a4b8] text-[13px] font-medium">
        Target Meter
      </label>

      <input
        type="text"
        placeholder="e.g., Meter_001, Group_A"
        className="bg-[#12131a] text-[#e2e8f0] border border-gray-700/80 rounded px-3 py-1.5 outline-none focus:border-[#007bff] transition-colors"
      />
    </div>

    {/* Schedule Type */}
    <div className="flex flex-col space-y-1.5">
      <label className="text-[#a0a4b8] text-[13px] font-medium">
        Schedule Type
      </label>

      <select className="bg-[#12131a] text-[#e2e8f0] border border-gray-700/80 rounded px-3 py-1.5 outline-none focus:border-[#007bff] transition-colors">
        <option>Select</option>
        <option>Immediate</option>
        <option>Scheduled</option>
      </select>
    </div>

    {/* Schedule Date */}
    <div className="flex flex-col space-y-1.5">
      <label className="text-[#a0a4b8] text-[13px] font-medium">
        Schedule Time
      </label>

      <input
        type="date"
        className="bg-[#12131a] text-[#e2e8f0] border border-gray-700/80 rounded px-3 py-1.5 outline-none focus:border-[#007bff] transition-colors"
      />
    </div>

    {/* Spacer */}
    <div className="hidden md:block"></div>

    {/* Button */}
    <div className="flex items-end md:justify-end mt-2 md:mt-0">
      <button className="w-full md:w-auto bg-[#007bff] hover:bg-blue-600 text-white font-medium py-1.5 px-6 rounded transition-colors text-sm shadow">
        Update Firmware
      </button>
    </div>
  </div>
</div>  
    </div>
    
  )
}

export default RemoteFirmwareUpdate

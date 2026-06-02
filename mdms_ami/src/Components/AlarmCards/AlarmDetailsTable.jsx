import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import AlarmDetailsTableData from "../AlarmCard/AlarmDetailsTableData";

const AlarmDetailsTable = () => {
  
    
  
  
  return (
    <div className="bg-[#2d303a] rounded-xl border border-[#3d4450] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[#3d4450]">
        <h4 className="text-white text-sm">
          Alarm Details Tables
        </h4>

        <select className="bg-[#2a2f3a] border-1 border-amber-50 text-white px-3 py-2 rounded-md text-sm">
          <option>Hourly</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
        <AlarmDetailsTableData/>
      
    </div>
  );
};

export default AlarmDetailsTable;

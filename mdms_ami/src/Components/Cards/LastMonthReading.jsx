import React from 'react'
import LastMonthCharts from '../Charts.jsx/LastMonthCharts';

const LastMonthReading = () => {
    const cradDesign = () => {
    return " flex bg-gray-900 rounded-2xl px-4 py-4 bg-gradient-to-r from-gray-800 to-gray-500 shadow-[0_0_8px_rgba(100,110,110,0.6)] h-69 w-59 ";
  };  
  const headingDesign = () =>{
    return "text-[16px] font-thin tracking-wide text-white ";
  };
  return (
    <div className="min-w-[260px]">
      <div className={cradDesign()}>
        <div>
          <h4 className={headingDesign()}>
            Reading Last Month
          </h4>
          <h1 className="text-[25px] font-bold text-gray-300  ">12,913 kwh</h1>
          <h2 className="text-[16px] font-bold text-green-700">ONL: 0</h2>
          <h2 className="text-[16px] font-bold text-red-700">OFL: 0</h2>
        </div>
        <div className="relative w-[70px] h-[80px] shrink-0 mt-12">
          <svg
            className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="40" fill="none"  stroke="#ef4444" strokeWidth="5"  strokeDasharray="246.04953662915258 5.277875658030853" strokeDashoffset="0"></circle>
             <circle cx="48" cy="48" r="40" fill="none"  stroke="#22c55e" strokeWidth="5"  strokeDasharray="5.277875658030853 246.04953662915258" strokeLinecap="round"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#22c55e] font-semibold text-sm leading-none">1.6%</span>
          </div>
        </div>
      </div>
      <LastMonthCharts/>
      </div>
  )
}

export default LastMonthReading

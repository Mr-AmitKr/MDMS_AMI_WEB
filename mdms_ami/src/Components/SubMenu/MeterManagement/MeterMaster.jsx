import React from "react";
import { FaEye } from "react-icons/fa";
import { MdRefresh , MdAnalytics , MdOutlineErrorOutline  } from "react-icons/md";  
import { GrValidate } from "react-icons/gr";
import { IoMdWifi } from "react-icons/io";

const meterData = [
  {
    id: 1,
    regDate: "2024-01-15",
    regTime: "10:30 AM",
    manf: "L&T",
    meterType: "Smart Meter",
    model: "LT-SM100",
    year: "2023",
    serialNo: "SN123456789",
    utility: "TNEB",
    status: "Enabled",
    location: "40.7128° N, 74.0060° W",
  },
  {
    id: 2,
    regDate: "2024-01-16",
    regTime: "11:00 AM",
    manf: "ABB",
    meterType: "Smart Meter",
    model: "ABB-SM200",
    year: "2023",
    serialNo: "SN987654321",
    utility: "TNEB",
    status: "Disabled",
  },
  {
    id: 3,
    regDate: "2024-01-17",
    regTime: "12:00 PM",
    manf: "Schneider",
    meterType: "Smart Meter",
    model: "SCH-SM300",
    year: "2023",
    serialNo: "SN555555555",
    utility: "TNEB",
    status: "Enabled",
  },
];

const MeterMaster = () => {
  return (
    <div className="pt-35 p-4 md:p-6">
      <h1 className="text-white text-2xl font-semibold mb-6">
        Meter Master
      </h1>
        <div>
          {/* Recent Meter Installations */}
             <div className="flex items-center gap-12">
               <div className=" shadow-emerald-900 shadow-[0_0_10px] space-x-1 w-70 h-100 bg-[#1c1e27] border-b border-gray-800 p-1 rounded-2xl mb-8 px-4 py-4">
                  <h1 className="text-gray-300 tracking-wider flex items-center gap-2 justify-center  text-[28px] font-bold mb-4"><MdOutlineErrorOutline className="text-gray-400 text-7xl" />Recent Meter Installations</h1>
                  <div className=" flex items-center border-b-1 border-gray-700 gap-4 mb-6">
                    <h4 className=" text-gray-400 font-extralight tracking-widest text-[13px] " >METER ID</h4>
                    <h2 className="text-white text-[20px] items-center gap-2 tracking-widest font-bold">{meterData[0].id}</h2>
                  </div>
                  <div className=" flex items-center border-b-1 border-gray-700 gap-4 mb-6">
                    <h4 className=" text-gray-400 font-extralight tracking-widest text-[13px] " >Install Date</h4>
                    <h2 className="text-white text-[20px] items-center gap-2 tracking-widest font-bold">{meterData[0].regDate}</h2>
                  </div>
                   <div className=" flex items-center border-b-1 border-gray-700 gap-4 mb-6">
                    <h4 className=" text-gray-400 font-extralight tracking-widest text-[13px] " >Install Time</h4>
                    <h2 className="text-white text-[20px] items-center gap-2 tracking-widest font-bold">{meterData[0].regTime}</h2>
                  </div>
                   <div className=" flex items-center border-b-1 border-gray-700 gap-4 mb-6">
                    <h4 className=" text-gray-400 font-extralight tracking-widest text-[13px] " >Location</h4>
                    <h2 className="text-white text-[20px] items-center gap-2 tracking-widest font-bold">{meterData[0].location}</h2>
                  </div>
          </div>
          {/* Quick Stats */}
            <div className=" shadow-emerald-900 shadow-[0_0_10px] space-x-1 w-70 h-100 bg-[#1c1e27] border-b border-gray-800 p-1 rounded-2xl mb-8 px-4 py-4">
                 <h1 className="text-gray-300 tracking-wider flex items-center gap-2 justify-center  text-[35px] font-bold mb-4"><MdAnalytics className="text-green-500 text-2xl" />Quick Stats</h1>
           
            <div className="flex items-center justify-center gap-6">
               <div className="flex flex-col justify-center gap-2 shadow-xl/80 bg-[#232429] w-30 h-40 rounded-2xl border border-gray-800 p-1 rounded-t-lg">
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-2 text-[12px] gap-2" >DAILY USE</h4>
                <h2 className="text-white text-4xl font-extrabold tracking-wider ml-2">24.5</h2>
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-2 text-[16px] gap-2" >kWh</h4>
            </div>
            <div className="flex flex-col justify-center gap-2 shadow-xl/80 bg-[#232429] w-30 h-40 rounded-2xl border border-gray-800 p-1 rounded-t-lg">
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-5 text-[12px] gap-2" >MONTHLY</h4>
                <h2 className="text-white text-4xl font-extrabold tracking-wider ml-2">24.5</h2>
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-2 text-[16px] gap-2" >kWh</h4>
            </div>
            </div>

                <div className=" space-x-1 w-60 h-20 mt-8 shadow-xl/80 bg-[#232429] border border-gray-800 p-1 rounded-2xl mb-4 px-4 py-4">
                    <div>
                       <h4 className="text-gray-400 font-extralight tracking-widest flex mb-2 ml-2 text-[13px] gap-2" >VALIDATION STATUS</h4>
                       <h2 className="text-gray-200 flex items-center gap-2 tracking-widest font-bold"><GrValidate className="text-green-500 text-2xl" />VEE Validated</h2>
                    </div>
                </div>  
             </div>
             {/*Communication Section */}
             <div className=" shadow-emerald-900 shadow-[0_0_10px] space-x-1 w-70 h-100 bg-[#1c1e27] border-b border-gray-800 p-1 rounded-2xl mb-8 px-4 py-4">
                 <h1 className="text-gray-300 tracking-wider flex items-center gap-2 justify-center  text-[26px] font-bold mb-4"><IoMdWifi className="text-green-500 text-7xl" />Communication</h1>
           
            <div className="flex items-center justify-center gap-6">
               <div className="flex flex-col justify-center gap-2 shadow-xl/80 bg-[#232429] w-30 h-40 rounded-2xl border border-gray-800 p-1 rounded-t-lg">
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-6 text-[12px] gap-2" >SIGNAL STRENGTH</h4>
                <h2 className="text-white text-4xl font-extrabold tracking-wider ml-2">-64</h2>
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-2 text-[16px] gap-2" >dBm</h4>
            </div>
            <div className="flex flex-col justify-center gap-2 shadow-xl/80 bg-[#232429] w-30 h-40 rounded-2xl border border-gray-800 p-1 rounded-t-lg">
                <h4 className="text-gray-400 w-10 font-extralight tracking-wider flex justify-center ml-5 text-[12px] gap-2" >RETRIES (24hr)</h4>
                <h2 className="text-white text-4xl font-extrabold tracking-wider ml-2">12</h2>
            </div>
            </div> 
             </div>

              </div>

             {/* Table Section */}
          </div>
      <div className="bg-[#1c1e27] border border-gray-800 rounded-lg p-5 shadow-md">
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            Show
            <select className="bg-[#12131a] border border-gray-700 text-white px-2 py-1 rounded">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>

          <div className="flex items-center gap-2">
            Search:
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#12131a] border border-gray-700 text-white px-3 py-1 rounded w-52 outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded border border-gray-700">
          <table className="w-full text-sm text-gray-300 whitespace-nowrap">
            <thead className="bg-[#2a2542] text-gray-100">
              <tr>
                {[
                  "SL_No",
                  "Reg.Date",
                  "Reg.Time",
                  "Manf.",
                  "Meter Type",
                  "Model",
                  "Manf. Year",
                  "Meter SI No",
                  "Pass",
                  "Utility Name",
                  "Status",
                  "Actions",
                  "Alarm Status",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 border-r border-[#3c375c] text-center font-medium"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {meterData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-700 hover:bg-[#252834] transition-colors"
                >
                  <td className="px-4 py-3 text-center">{item.id}</td>
                  <td className="px-4 py-3 text-center">{item.regDate}</td>
                  <td className="px-4 py-3 text-center">{item.regTime}</td>
                  <td className="px-4 py-3 text-center">{item.manf}</td>
                  <td className="px-4 py-3 text-center">
                    {item.meterType}
                  </td>
                  <td className="px-4 py-3 text-center">{item.model}</td>
                  <td className="px-4 py-3 text-center">{item.year}</td>
                  <td className="px-4 py-3 text-center">
                    {item.serialNo}
                  </td>
                  <td className="px-4 py-3 text-center">
                    ********
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.utility}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Enabled"
                          ? "bg-green-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    View/Edit
                  </td>

                  <td className="px-4 py-3 text-center">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">
                     <FaEye className="text-blue-400 cursor-pointer" size={18} />
<MdRefresh className="text-yellow-400 cursor-pointer" size={18} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-5 text-sm text-gray-300">
          <p>Showing 1 to 3 of 3 entries</p>

          <div className="flex items-center overflow-hidden rounded bg-white">
            <button className="px-4 py-2 text-gray-500 border-r">
              Previous
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white">
              1
            </button>

            <button className="px-4 py-2 text-black">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeterMaster;
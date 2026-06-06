import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";

const MeterAutoRegistration = () => {
  const [deviceId, setDeviceId] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
const [search, setSearch] = useState("");


  const meterData = [
    {
      deviceId: "DEV-1001",
      deviceType: "3-Phase CT",
      firmware: "FW-1.2.0",
      hardware: "HW-2.0",
      timestamp: "12-01-2025 10:15:20",
      communication: "4G/LTE",
      health: "98%",
      status: "Registered",
    },
    {
      deviceId: "DEV-1002",
      deviceType: "1-Phase",
      firmware: "FW-1.1.5",
      hardware: "HW-1.5",
      timestamp: "12-01-2025 11:00:10",
      communication: "RF Mesh",
      health: "85%",
      status: "Retrying",
    },
    {
      deviceId: "DEV-1003",
      deviceType: "3-Phase CT",
      firmware: "FW-1.2.0",
      hardware: "HW-2.0",
      timestamp: "12-01-2025 11:20:45",
      communication: "PLC",
      health: "45%",
      status: "Failed",
    },
    {
      deviceId: "DEV-1004",
      deviceType: "1-Phase",
      firmware: "FW-1.1.5",
      hardware: "HW-1.5",
      timestamp: "12-01-2025 12:10:00",
      communication: "4G/LTE",
      health: "100%",
      status: "Registered",
    },
    {
      deviceId: "DEV-1005",
      deviceType: "3-Phase CT",
      firmware: "FW-1.2.0",
      hardware: "HW-2.0",
      timestamp: "12-01-2025 13:05:30",
      communication: "RF Mesh",
      health: "70%",
      status: "Retrying",
    },
  ];

  const filteredData = meterData.filter((item) => {
    return (
      (deviceId === "" ||
        item.deviceId.toLowerCase().includes(deviceId.toLowerCase())) &&
      (deviceType === "" || item.deviceType === deviceType) &&
      (status === "" || item.status === status)
    );
  });

  const registeredCount = meterData.filter(
    (item) => item.status === "Registered"
  ).length;

  const retryingCount = meterData.filter(
    (item) => item.status === "Retrying"
  ).length;

  const failedCount = meterData.filter(
    (item) => item.status === "Failed"
  ).length;

  const getStatusColor = (status) => {
    switch (status) {
      case "Registered":
        return "bg-green-600";
      case "Retrying":
        return "bg-yellow-500 text-black";
      case "Failed":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="w-full min-h-screen p-5 text-white">
      <h1 className="text-2xl font-semibold mb-6">
        Meter Auto-Registration
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1c1e27] p-5 rounded-xl border-l-4 border-green-500">
          <p className="text-sm text-gray-400 uppercase">
            Registered Today
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {registeredCount}
          </h2>
        </div>

        <div className="bg-[#1c1e27] p-5 rounded-xl border-l-4 border-yellow-500">
          <p className="text-sm text-gray-400 uppercase">
            Retrying
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {retryingCount}
          </h2>
        </div>

        <div className="bg-[#1c1e27] p-5 rounded-xl border-l-4 border-red-500">
          <p className="text-sm text-gray-400 uppercase">
            Failed
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {failedCount}
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#1c1e27] p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Device ID"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            className="bg-[#12131a] border border-gray-700 rounded px-3 py-2"
          />

          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            className="bg-[#12131a] border border-gray-700 rounded px-3 py-2"
          >
            <option value="">All Types</option>
            <option value="3-Phase CT">3-Phase CT</option>
            <option value="1-Phase">1-Phase</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#12131a] border border-gray-700 rounded px-3 py-2"
          >
            <option value="">All Status</option>
            <option value="Registered">Registered</option>
            <option value="Retrying">Retrying</option>
            <option value="Failed">Failed</option>
          </select>

          <button className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2">
            Show Table
          </button>
        </div>
      </div>

     {/* Filters */}
<div className="mt-6 text-gray-200 bg-[#1c1e27] border border-gray-800 p-5 rounded-lg shadow-md">
  <div className="flex flex-wrap items-end gap-4 mb-4">

    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
        Device ID
      </label>
      <input
        type="text"
        value={deviceId}
        onChange={(e) => setDeviceId(e.target.value)}
        placeholder="Enter Device ID"
        className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-1.5 w-full outline-none focus:border-[#007bff]"
      />
    </div>

    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
        Device Type
      </label>
      <select
        value={deviceType}
        onChange={(e) => setDeviceType(e.target.value)}
        className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-1.5 w-full"
      >
        <option value="">All</option>
        <option value="3-Phase CT">3-Phase CT</option>
        <option value="1-Phase">1-Phase</option>
      </select>
    </div>

    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
        From
      </label>
      <input
        type="date"
        className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-1.5 w-full"
      />
    </div>

    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
        To
      </label>
      <input
        type="date"
        className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-1.5 w-full"
      />
    </div>

    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
        Status
      </label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-1.5 w-full"
      >
        <option value="">All</option>
        <option value="Registered">Registered</option>
        <option value="Retrying">Retrying</option>
        <option value="Failed">Failed</option>
      </select>
    </div>

    <div className="flex-1 min-w-[150px]">
      <button className="bg-[#007bff] hover:bg-blue-600 text-white text-sm w-full py-1.5 rounded">
        Show Table
      </button>
    </div>

  </div>

  {/* Top Controls */}
  <div className="flex justify-between items-center mb-4 flex-wrap gap-3 text-[13px] text-gray-300">

    <div className="flex items-center gap-2">
      Show
      <select className="bg-[#12131a] border border-gray-700 text-gray-200 px-2 py-1 rounded">
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
        className="bg-[#12131a] border border-gray-700 text-gray-200 px-3 py-1 rounded w-48"
      />
    </div>

  </div>

  {/* Table */}
  <div className="overflow-x-auto rounded border border-gray-700">
    <table className="w-full text-[13px] whitespace-nowrap">

      <thead className="bg-[#2a2542] text-white">
        <tr>
          {[
            "Device ID",
            "Device Type",
            "Firmware",
            "Hardware",
            "Timestamp",
            "Communication",
            "Health",
            "Status",
            "Action",
          ].map((heading) => (
            <th
              key={heading}
              className="px-5 py-3 text-center border-r border-[#3c375c]"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-[#1c1e27] text-gray-300">
        {filteredData.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-700 hover:bg-[#252834]"
          >
            <td className="px-5 py-3 text-center">{item.deviceId}</td>
            <td className="px-5 py-3 text-center">{item.deviceType}</td>
            <td className="px-5 py-3 text-center">{item.firmware}</td>
            <td className="px-5 py-3 text-center">{item.hardware}</td>
            <td className="px-5 py-3 text-center">{item.timestamp}</td>
            <td className="px-5 py-3 text-center">{item.communication}</td>
            <td className="px-5 py-3 text-center">{item.health}</td>

            <td className="px-5 py-3 text-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </td>

            <td className="px-5 py-3">
              <div className="flex justify-center gap-3">
                <FaEye className="text-blue-400 cursor-pointer text-lg" />
                <IoRefresh className="text-yellow-400 cursor-pointer text-lg" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-5 text-[13px] text-gray-300">
    <div>
      Showing 1 to {filteredData.length} of {meterData.length} entries
    </div>

    <div className="flex items-center bg-white rounded overflow-hidden text-sm">
      <button className="px-4 py-2 text-black border-r">
        Previous
      </button>

      <button className="px-4 py-2 bg-[#007bff] text-white">
        1
      </button>

      <button className="px-4 py-2 text-black border-l">
        Next
      </button>
    </div>
  </div>
</div>

      {/* Chart Placeholder */}
      <div className="mt-8 bg-[#1c1e27] rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Registration Analytics
        </h2>

        <div className="h-[300px] flex items-center justify-center text-gray-400">
          Apply filters to view chart
        </div>
      </div>
    </div>
  );
};

export default MeterAutoRegistration;
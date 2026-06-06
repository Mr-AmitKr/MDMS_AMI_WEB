
import {
  Server,
  CircleCheck,
  CircleX,
  TriangleAlert,
} from "lucide-react";

const NodeStatusMonitoring = () => {
    const nodeStatusData = [
  {
    nodeId: "DCU-001",
    status: "Online",
    lastCommunication: "19-07-2025 10:30:20",
    durationOffline: "-",
    location: "Pune Substation",
  },
  {
    nodeId: "Router-015",
    status: "Offline",
    lastCommunication: "19-07-2025 10:30:20",
    durationOffline: "11 hrs",
    location: "Mumbai Zone 2",
  },
  {
    nodeId: "AP-101",
    status: "Unstable",
    lastCommunication: "17-07-2025 10:30:20",
    durationOffline: "-",
    location: "Nagpur Central",
  },
  {
    nodeId: "Router-028",
    status: "Offline",
    lastCommunication: "16-07-2025 10:30:20",
    durationOffline: "8 hrs",
    location: "Thane Grid",
  },
  {
    nodeId: "AP-102",
    status: "Online",
    lastCommunication: "15-07-2025 10:30:20",
    durationOffline: "-",
    location: "Kolhapur Zone",
  },
];
 const getStatusStyle = (status) => {
  switch (status) {
    case "Online":
      return "bg-green-600 text-black";
    case "Offline":
      return "bg-red-600 text-black";
    case "Unstable":
      return "bg-yellow-500 text-black";
    default:
      return "bg-gray-600 text-white";
  }
};
  return (
    <div>
      <h1 className='text-white text-2xl font-light tracking-wider px-4 py-4'>Node Status Monitoring</h1>
      <div className="flex w-full gap-4 my-2 overflow-x-auto px-4">

  <div className="relative flex justify-between items-center bg-[#1D2126] p-4  rounded-xl min-w-[220px] lg:w-72 border-l-[5px] border-l-[#1E90FF]">
    <div className="flex flex-col pl-2">
      <p className="text-white text-[13px] font-bold tracking-wide uppercase pb-1 ">
        TOTAL NODES
      </p>
      <p className="text-gray-500 font-bold text-[15px]">150</p>
    </div>
    <Server className="h-10 w-10 text-[#1E90FF] bg-[#1E90FF]/10 rounded-full p-2 border border-[#1E90FF]/30" />
  </div>

  <div className="relative flex justify-between items-center bg-[#1D2126] p-4 rounded-xl min-w-[220px] lg:w-72 border-l-[5px] border-l-[#198754]">
    <div className="flex flex-col pl-2">
      <p className="text-white text-[13px] font-bold tracking-wide uppercase pb-1">
        ONLINE
      </p>
      <p className="text-gray-500 font-bold text-[15px]">120</p>
    </div>
    <CircleCheck className="h-10 w-10 text-[#198754] bg-[#198754]/10 rounded-full p-2 border border-[#198754]/30" />
  </div>

  <div className="relative flex justify-between items-center bg-[#1D2126] p-4 rounded-xl min-w-[220px] lg:w-72 border-l-[5px] border-l-[#DC3545]">
    <div className="flex flex-col pl-2">
      <p className="text-white text-[13px] font-bold tracking-wide uppercase pb-1">
        OFFLINE
      </p>
      <p className="text-gray-500 font-bold text-[15px]">25</p>
    </div>
    <CircleX className="h-10 w-10 text-[#DC3545] bg-[#DC3545]/10 rounded-full p-2 border border-[#DC3545]/30" />
  </div>

  <div className="relative flex justify-between items-center bg-[#1D2126] p-4 rounded-xl min-w-[220px] lg:w-72 border-l-[5px] border-l-[#FFBD0D]">
    <div className="flex flex-col pl-2">
      <p className="text-white text-[13px] font-bold tracking-wide uppercase pb-1">
        WARNING
      </p>
      <p className="text-gray-500 font-bold text-[15px]">5</p>
    </div>
    <TriangleAlert className="h-10 w-10 text-[#FFBD0D] bg-[#FFBD0D]/10 rounded-full p-2 border border-[#FFBD0D]/30" />
  </div>

</div>
        <div className="mt-6 bg-[#1c1e27] border border-gray-800 rounded-xl p-5 text-gray-200">

  {/* Filters */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-5">

    <div>
      <label className="block text-sm text-gray-400 mb-2">
        Node ID
      </label>
      <input
        type="text"
        placeholder="Enter Node ID"
        className="w-full bg-[#12131a] border border-gray-700 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-400 mb-2">
        From
      </label>
      <input
        type="date"
        className="w-full bg-[#12131a] border border-gray-700 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-400 mb-2">
        To
      </label>
      <input
        type="date"
        className="w-full bg-[#12131a] border border-gray-700 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-400 mb-2">
        Status
      </label>
      <select className="w-full bg-[#12131a] border border-gray-700 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500">
        <option>All</option>
        <option>Online</option>
        <option>Offline</option>
        <option>Unstable</option>
      </select>
    </div>

    <div className="flex items-end">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition">
        Show Table
      </button>
    </div>

  </div>

  {/* Table Controls */}
  <div className="flex flex-col md:flex-row justify-between gap-3 mb-4 text-sm">

    <div className="flex items-center gap-2">
      <span>Show</span>

      <select className="bg-[#12131a] border border-gray-700 rounded px-2 py-1 text-white">
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>

      <span>entries</span>
    </div>

    <input
      type="text"
      placeholder="Search..."
      className="bg-[#12131a] border border-gray-700 rounded px-3 py-1 text-white w-full md:w-60"
    />

  </div>

  {/* Table */}
  <div className="overflow-x-auto rounded-lg border border-gray-700">

    <table className="w-full min-w-[1000px] text-sm">

      <thead className="bg-[#252834] text-gray-200">
        <tr>
          {[
            "Node ID",
            "Status",
            "Last Communication",
            "Duration Offline",
            "Location",
          ].map((header) => (
            <th
              key={header}
              className="px-5 py-4 text-center border-r border-gray-700 last:border-r-0"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {nodeStatusData.map((row, index) => (
          <tr
            key={index}
            className="border-b border-gray-700 hover:bg-[#252834] transition"
          >
            <td className="px-5 py-3 text-center border-r border-gray-700">
              {row.nodeId}
            </td>

            <td className="px-5 py-3 text-center border-r border-gray-700">
              <span
                className={`px-4 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                  row.status
                )}`}
              >
                {row.status}
              </span>
            </td>

            <td className="px-5 py-3 text-center border-r border-gray-700">
              {row.lastCommunication}
            </td>

            <td className="px-5 py-3 text-center border-r border-gray-700">
              {row.durationOffline}
            </td>

            <td className="px-5 py-3 text-center">
              {row.location}
            </td>
          </tr>
        ))}
      </tbody>

    </table>

  </div>

  {/* Pagination */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5 text-sm">

    <p className="text-gray-400">
      Showing 1 to 5 of 5 entries
    </p>

    <div className="flex items-center overflow-hidden rounded-lg">

      <button className="px-4 py-2 bg-[#252834] text-gray-400">
        Previous
      </button>

      <button className="px-4 py-2 bg-blue-600 text-white">
        1
      </button>

      <button className="px-4 py-2 bg-[#252834] text-gray-400">
        Next
      </button>

    </div>

  </div>

</div>

<div className="bg-[#1c1e27] border border-gray-800 rounded-xl mt-6 p-5 mb-6">

  <div className="flex flex-wrap items-end gap-4">

    {/* Node ID */}
    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-2 font-medium">
        Node ID
      </label>

      <input
        type="text"
        placeholder="Enter Node ID"
        className="w-full bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700/80 rounded-lg px-3 py-2 outline-none focus:border-[#007bff] transition-colors"
      />
    </div>

    {/* Status */}
    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-2 font-medium">
        Status
      </label>

      <select className="w-full bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700/80 rounded-lg px-3 py-2 outline-none focus:border-[#007bff] transition-colors">
        <option>All</option>
        <option>Online</option>
        <option>Offline</option>
        <option>Unstable</option>
      </select>
    </div>

    {/* Region */}
    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-2 font-medium">
        Region
      </label>

      <select className="w-full bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700/80 rounded-lg px-3 py-2 outline-none focus:border-[#007bff] transition-colors">
        <option>All</option>
        <option>Pune</option>
        <option>Mumbai</option>
      </select>
    </div>

    {/* From Date */}
    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-2 font-medium">
        From
      </label>

      <input
        type="date"
        className="w-full bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700/80 rounded-lg px-3 py-2 outline-none focus:border-[#007bff] transition-colors"
      />
    </div>

    {/* To Date */}
    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-2 font-medium">
        To
      </label>

      <input
        type="date"
        className="w-full bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700/80 rounded-lg px-3 py-2 outline-none focus:border-[#007bff] transition-colors"
      />
    </div>

    {/* Time Period */}
    <div className="flex-1 min-w-[150px]">
      <label className="block text-[#a0a4b8] text-[13px] mb-2 font-medium">
        Time Period
      </label>

      <select className="w-full bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700/80 rounded-lg px-3 py-2 outline-none focus:border-[#007bff] transition-colors">
        <option>All</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>
    </div>

    {/* Button */}
    <div className="flex-1 min-w-[150px]">
      <button
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          text-sm
          py-2
          rounded-lg
          transition-all
          shadow-md
        "
      >
        Show Chart
      </button>
    </div>

  </div>
            <div className="mt-8 flex flex-col items-center justify-center py-12 border border-dashed border-gray-700 rounded-xl bg-[#12131a]">
  <p className="text-gray-400 text-sm font-medium">
    Apply filters to view chart
  </p>

  <p className="text-gray-500 text-xs mt-2">
    Select Node ID, Status, Region, or Date Range and click "Show Chart"
  </p>
</div>
</div>

    </div>
  )
}

export default NodeStatusMonitoring

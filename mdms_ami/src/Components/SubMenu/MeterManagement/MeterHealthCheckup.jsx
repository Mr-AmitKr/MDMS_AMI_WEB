import React from "react";
import {
  Activity,
  CircleCheck,
  CircleX,
  TriangleAlert,
  WifiOff,
  TrendingUp,
} from "lucide-react";
const healthStats = [
  {
    title: "Healthy Meters",
    value: "2,450",
    icon: CircleCheck,
    color: "#198754",
    trend: "+5%",
  },
  {
    title: "Offline",
    value: "120",
    icon: WifiOff,
    color: "#DC3545",
    trend: "-2%",
  },
  {
    title: "Warnings",
    value: "85",
    icon: TriangleAlert,
    color: "#FFBD0D",
    trend: "+3%",
  },
  {
    title: "Critical",
    value: "32",
    icon: CircleX,
    color: "#dc3545",
    trend: "+1%",
  },
];

const MeterHealthCheckup = () => {
  return (
    <div>
        <h1 className="text-white text-2xl font-medium mb-4 px-4 py-4 tracking-wider">Meter Health Check</h1>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-4 mb-6">
        {healthStats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative bg-[#1c1e27] border border-gray-800 rounded-xl p-5 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="absolute left-0 top-0 h-full w-1"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">
                    {item.title}
                  </p>

                  <h2 className="text-white text-3xl font-bold mt-2">
                    {item.value}
                  </h2>

                  <div className="flex items-center gap-2 mt-3">
                    <TrendingUp
                      size={14}
                      className={
                        item.trend.startsWith("-")
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    />

                    <span
                      className={`text-xs ${
                        item.trend.startsWith("-")
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {item.trend}
                    </span>

                    <span className="text-xs text-gray-500">
                      vs yesterday
                    </span>
                  </div>
                </div>

                <div
                  className="h-14 w-14 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${item.color}20`,
                  }}
                >
                  <Icon size={28} color={item.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Health Status */}
      <div className="px-4">
        <div className="bg-[#1c1e27] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-5">
            Meter Health Summary
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="bg-[#252834] rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                Communication Success Rate
              </p>
              <h4 className="text-green-400 text-2xl font-bold mt-2">
                98.5%
              </h4>
            </div>

            <div className="bg-[#252834] rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                Avg Response Time
              </p>
              <h4 className="text-blue-400 text-2xl font-bold mt-2">
                1.8 sec
              </h4>
            </div>

            <div className="bg-[#252834] rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                Voltage Anomalies
              </p>
              <h4 className="text-yellow-400 text-2xl font-bold mt-2">
                24
              </h4>
            </div>

            <div className="bg-[#252834] rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                Last Health Scan
              </p>
              <h4 className="text-white text-lg font-semibold mt-2">
                5 min ago
              </h4>
            </div>
          </div>
        </div>
      </div>

     {/* Health Check Table */}
<div className="bg-[#1c1e27] border border-gray-800 rounded-xl overflow-hidden mt-8 px-4 py-4">
  {/* Header */}
  <div className="p-5 border-b border-gray-800">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h3 className="text-white text-lg font-semibold">
          Meter Health Records
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Monitor device health, communication status and firmware details.
        </p>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search Meter ID..."
          className="bg-[#252834] border border-gray-700 rounded-lg px-4 py-2 text-white text-sm outline-none focus:border-blue-500"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm transition">
          Search
        </button>
      </div>
    </div>
  </div>

  {/* Filters */}
  <div className="p-5 border-b border-gray-800">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
      <select className="bg-[#252834] border border-gray-700 rounded-lg px-4 py-2 text-white">
        <option>All Status</option>
        <option>Healthy</option>
        <option>Warning</option>
        <option>Critical</option>
      </select>

      <select className="bg-[#252834] border border-gray-700 rounded-lg px-4 py-2 text-white">
        <option>All Locations</option>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Nagpur</option>
      </select>

      <select className="bg-[#252834] border border-gray-700 rounded-lg px-4 py-2 text-white">
        <option>Firmware Version</option>
        <option>FW-3.2</option>
        <option>FW-3.1</option>
        <option>FW-2.9</option>
      </select>

      <input
        type="date"
        className="bg-[#252834] border border-gray-700 rounded-lg px-4 py-2 text-white"
      />

      <button className="bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white">
        Apply Filters
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-[#252834] text-gray-300">
        <tr>
          <th className="px-5 py-4 text-left">Meter ID</th>
          <th className="px-5 py-4 text-center">Status</th>
          <th className="px-5 py-4 text-center">HW Version</th>
          <th className="px-5 py-4 text-center">FW Version</th>
          <th className="px-5 py-4 text-center">Location</th>
          <th className="px-5 py-4 text-center">Response Time</th>
          <th className="px-5 py-4 text-center">Last Communication</th>
          <th className="px-5 py-4 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {[
          {
            id: "SM12345678",
            status: "Healthy",
            hw: "HW-1.1",
            fw: "FW-3.2",
            location: "Pune",
            response: "1.2s",
            last: "5 min ago",
          },
          {
            id: "SM98765432",
            status: "Warning",
            hw: "HW-1.0",
            fw: "FW-3.1",
            location: "Mumbai",
            response: "3.4s",
            last: "25 min ago",
          },
          {
            id: "SM12345654",
            status: "Critical",
            hw: "HW-1.0",
            fw: "FW-2.9",
            location: "Nagpur",
            response: "Timeout",
            last: "2 hrs ago",
          },
        ].map((meter, index) => (
          <tr
            key={index}
            className="border-t border-gray-800 hover:bg-[#252834] transition"
          >
            <td className="px-5 py-4 text-white font-medium">
              {meter.id}
            </td>

            <td className="px-5 py-4 text-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  meter.status === "Healthy"
                    ? "bg-green-500/20 text-green-400"
                    : meter.status === "Warning"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {meter.status}
              </span>
            </td>

            <td className="px-5 py-4 text-center text-gray-300">
              {meter.hw}
            </td>

            <td className="px-5 py-4 text-center text-gray-300">
              {meter.fw}
            </td>

            <td className="px-5 py-4 text-center text-gray-300">
              {meter.location}
            </td>

            <td className="px-5 py-4 text-center text-gray-300">
              {meter.response}
            </td>

            <td className="px-5 py-4 text-center text-gray-300">
              {meter.last}
            </td>

            <td className="px-5 py-4">
              <div className="flex justify-center gap-3">
                <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
                  <Activity size={16} />
                </button>

                <button className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
                  View
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Footer */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-t border-gray-800">
    <p className="text-sm text-gray-400">
      Showing 1 - 10 of 120 meters
    </p>

    <div className="flex gap-2">
      <button className="px-4 py-2 bg-[#252834] text-gray-300 rounded-lg hover:bg-[#2e3342]">
        Previous
      </button>

      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        1
      </button>

      <button className="px-4 py-2 bg-[#252834] text-gray-300 rounded-lg hover:bg-[#2e3342]">
        2
      </button>

      <button className="px-4 py-2 bg-[#252834] text-gray-300 rounded-lg hover:bg-[#2e3342]">
        3
      </button>

      <button className="px-4 py-2 bg-[#252834] text-gray-300 rounded-lg hover:bg-[#2e3342]">
        Next
      </button>
    </div>
  </div>
</div>
    </div>
  );
};
export default MeterHealthCheckup

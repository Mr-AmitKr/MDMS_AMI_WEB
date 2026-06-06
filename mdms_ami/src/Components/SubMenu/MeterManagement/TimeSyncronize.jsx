import React from 'react'
import {
  Clock,
  Clock3,
  RefreshCw,
  Server,
  CircleCheck,
  CircleX,
  TriangleAlert,
  Globe,
  Search,
  CalendarDays,
  Filter,
  RotateCcw,
  ListFilter
  
} from "lucide-react";

const TimeSyncronize = () => {
    const syncStats = [
  {
    title: "Total Devices",
    value: "1,420",
    percentage: "100%",
    trend: "+12%",
    color: "#1E90FF",
    icon: Clock,
  },
  {
    title: "Synchronized",
    value: "1,105",
    percentage: "77.8%",
    trend: "+5%",
    color: "#198754",
    icon: CircleCheck,
  },
  {
    title: "Out Of Sync",
    value: "230",
    percentage: "16.2%",
    trend: "-3%",
    color: "#DC3545",
    icon: CircleX,
  },
  {
    title: "Sync Errors",
    value: "85",
    percentage: "6%",
    trend: "+1%",
    color: "#FFBD0D",
    icon: TriangleAlert,
  },
]
const tableData = [
  {
    deviceId: "DCU-100",
    deviceType: "DCU",
    lastSync: "14-07-2025 10:23:12",
    deviation: 1.3,
    status: "Synchronized",
    latency: "120 ms",
  },
  {
    deviceId: "MTR-4321",
    deviceType: "Smart Meter",
    lastSync: "13-07-2025 10:45:02",
    deviation: -6.5,
    status: "Out of Sync",
    latency: "200 ms",
  },
  {
    deviceId: "MTR-7850",
    deviceType: "Smart Meter",
    lastSync: "13-07-2025 10:45:02",
    deviation: 0.2,
    status: "Synchronized",
    latency: "150 ms",
  },
  {
    deviceId: "DCU-1012",
    deviceType: "DCU",
    lastSync: "13-07-2025 10:45:02",
    deviation: -2.3,
    status: "Out of Sync",
    latency: "145 ms",
  },
];

  return (
    <div>   
      <h1 className="text-2xl font-light tracking-wide text-white mb-4 px-4 py-3 ">
        Time Synchronization
      </h1>
            <div className="bg-[#1c1e27] border border-gray-800 rounded-xl p-6">
  <div className="flex justify-between items-center mb-5">
    <div className="flex items-center gap-3">
      <div className="bg-blue-500/20 p-3 rounded-xl">
        <Clock3 className="text-blue-400" size={22} />
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">
          HES System Clock
        </h3>
        <p className="text-gray-400 text-sm">
          Real-time synchronization status
        </p>
      </div>
    </div>

    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
      Synchronized
    </span>
  </div>

  <div className="space-y-4">
    <div className="bg-[#252834] rounded-lg p-4">
      <p className="text-gray-400 text-xs uppercase">
        Current System Time
      </p>

      <h2 className="text-white text-3xl font-bold mt-2">
        16:00:00
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        31 Jul 2025
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#252834] rounded-lg p-4">
        <p className="text-gray-400 text-sm">
          Last NTP Sync
        </p>

        <h4 className="text-white mt-2">
          5 mins ago
        </h4>
      </div>

      <div className="bg-[#252834] rounded-lg p-4">
        <p className="text-gray-400 text-sm">
          Clock Drift
        </p>

        <h4 className="text-green-400 mt-2">
          +0.03 sec
        </h4>
      </div>
    </div>
  </div>
</div>
<div className="bg-[#1c1e27] border border-gray-800 rounded-xl p-6">
  <div className="flex items-center gap-3 mb-6">
    <div className="bg-indigo-500/20 p-3 rounded-xl">
      <Server className="text-indigo-400" size={22} />
    </div>

    <div>
      <h3 className="text-white font-semibold text-lg">
        NTP Configuration
      </h3>

      <p className="text-gray-400 text-sm">
        Manage synchronization servers
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-4 mb-5">
    <div>
      <label className="block text-gray-400 mb-2 text-sm">
        Primary NTP Server
      </label>

      <input
        type="text"
        defaultValue="time.google.com"
        className="w-full bg-[#252834] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
      />
    </div>

    <div>
      <label className="block text-gray-400 mb-2 text-sm">
        Backup NTP Server
      </label>

      <input
        type="text"
        defaultValue="pool.ntp.org"
        className="w-full bg-[#252834] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
      />
    </div>

    <div>
      <label className="block text-gray-400 mb-2 text-sm">
        Sync Interval
      </label>

      <select className="w-full bg-[#252834] border border-gray-700 rounded-lg px-4 py-2.5 text-white">
        <option>5 Minutes</option>
        <option>15 Minutes</option>
        <option>30 Minutes</option>
        <option>1 Hour</option>
      </select>
    </div>

    <div>
      <label className="block text-gray-400 mb-2 text-sm">
        Timezone
      </label>

      <select className="w-full bg-[#252834] border border-gray-700 rounded-lg px-4 py-2.5 text-white">
        <option>Asia/Kolkata</option>
        <option>UTC</option>
      </select>
    </div>
  </div>

  <div className="flex flex-wrap gap-3 justify-end">
    <button className="px-5 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30">
      Test Connection
    </button>

    <button className="px-5 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30">
      Force Sync
    </button>

    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
      Save Settings
    </button>
  </div>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-6">
  {syncStats.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="
          relative overflow-hidden
          bg-[#1c1e27]
          border border-gray-800
          rounded-2xl
          p-5
          group
          transition-all duration-300
          hover:-translate-y-1
          hover:border-gray-700
          hover:shadow-xl hover:shadow-black/40
        "
      >
        {/* Left Accent */}
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{
            backgroundColor: item.color,
          }}
        />

        {/* Decorative Glow */}
        <div
          className="absolute -top-10 -right-10 h-28 w-28 rounded-full blur-3xl opacity-10"
          style={{
            backgroundColor: item.color,
          }}
        />

        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-white mt-3">
              {item.value}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-400">
                {item.percentage}
              </span>

              <span
                className={`text-xs font-medium ${
                  item.trend.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {item.trend}
              </span>
            </div>
          </div>

          <div
            className="
              h-14 w-14
              rounded-2xl
              flex items-center justify-center
              transition-transform
              group-hover:scale-110
            "
            style={{
              background: `${item.color}20`,
            }}
          >
            <Icon
              size={28}
              style={{
                color: item.color,
              }}
            />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-gray-500">
              Sync Coverage
            </span>

            <span className="text-gray-400">
              {item.percentage}
            </span>
          </div>

          <div className="h-2 bg-[#252834] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: item.percentage,
                backgroundColor: item.color,
              }}
            />
          </div>
        </div>

        {/* Status Dot */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full animate-pulse"
            style={{
              backgroundColor: item.color,
            }}
          />

          <span className="text-xs text-gray-500">
            Live Monitoring
          </span>
        </div>
      </div>
    );
  })}
</div>
                <h1  className="text-2xl font-light tracking-wide text-white mb-4 px-4 py-3 ">Device Sync Status</h1>
                <div className="bg-[#1c1e27] border border-gray-800 rounded-2xl p-5 mb-6">
  {/* Header */}
  <div className="flex items-center gap-3 mb-5">
    <div className="bg-blue-500/20 p-2 rounded-lg">
      <Filter size={18} className="text-blue-400" />
    </div>

    <div>
      <h3 className="text-white font-semibold text-lg">
        Time Synchronization Filters
      </h3>
      <p className="text-gray-400 text-sm">
        Filter device synchronization records
      </p>
    </div>
  </div>

  {/* Filters */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">
    {/* Device ID */}
    <div>
      <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">
        Device ID
      </label>

      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Enter Device ID"
          className="
            w-full pl-10 pr-4 py-2.5
            bg-[#252834]
            border border-gray-700
            rounded-xl
            text-white
            placeholder:text-gray-500
            focus:border-blue-500
            focus:outline-none
          "
        />
      </div>
    </div>

    {/* Device Type */}
    <div>
      <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">
        Device Type
      </label>

      <select
        className="
          w-full py-2.5 px-4
          bg-[#252834]
          border border-gray-700
          rounded-xl
          text-white
          focus:border-blue-500
          focus:outline-none
        "
      >
        <option>All Devices</option>
        <option>DCU</option>
        <option>Smart Meter</option>
      </select>
    </div>

    {/* Status */}
    <div>
      <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">
        Sync Status
      </label>

      <select
        className="
          w-full py-2.5 px-4
          bg-[#252834]
          border border-gray-700
          rounded-xl
          text-white
          focus:border-blue-500
          focus:outline-none
        "
      >
        <option>All Status</option>
        <option>Synchronized</option>
        <option>Out of Sync</option>
        <option>Sync Error</option>
      </select>
    </div>

    {/* From */}
    <div>
      <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">
        From Date
      </label>

      <div className="relative">
        <CalendarDays
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="date"
          className="
            w-full pl-10 pr-4 py-2.5
            bg-[#252834]
            border border-gray-700
            rounded-xl
            text-white
            focus:border-blue-500
            focus:outline-none
          "
        />
      </div>
    </div>

    {/* To */}
    <div>
      <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">
        To Date
      </label>

      <div className="relative">
        <CalendarDays
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="date"
          className="
            w-full pl-10 pr-4 py-2.5
            bg-[#252834]
            border border-gray-700
            rounded-xl
            text-white
            focus:border-blue-500
            focus:outline-none
          "
        />
      </div>
    </div>

    {/* Actions */}
    <div className="flex items-end gap-2">
      <button
        className="
          flex-1
          py-2.5
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-medium
          transition-all
        "
      >
        Apply
      </button>

      <button
        className="
          p-2.5
          rounded-xl
          bg-[#252834]
          border border-gray-700
          hover:border-red-500
          hover:text-red-400
          text-gray-400
          transition-all
        "
      >
        <RotateCcw size={18} />
      </button>
    </div>
  </div>

  {/* Active Filters */}
  <div className="flex flex-wrap gap-2 mt-5">
    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
      Device Type: Smart Meter
    </span>

    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
      Status: Synchronized
    </span>

    <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
      Last 30 Days
    </span>
  </div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
  
  {/* Left Side */}
  <div className="flex items-center gap-3">
    <div className="bg-blue-500/20 p-2 rounded-lg">
      <ListFilter size={18} className="text-blue-400" />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">
        Show
      </span>

      <select
        className="
          bg-[#252834]
          border border-gray-700
          text-white
          rounded-lg
          px-3 py-2
          text-sm
          outline-none
          focus:border-blue-500
          transition-all
          cursor-pointer
        "
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>

      <span className="text-sm text-gray-400">
        entries
      </span>
    </div>
  </div>

  {/* Search */}
  <div className="relative w-full lg:w-60 mr-15">
    <Search
      size={18}
      className="
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        text-gray-500
      "
    />

    <input
      type="text"
      placeholder="Search"
      className="
        w-full
        pl-10
        pr-4
        py-2.5
        bg-[#252834]
        border border-gray-700
        rounded-xl
        text-white
        placeholder:text-gray-500
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20
        outline-none
        transition-all
      "
    />
    
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#1c1e27] shadow-lg">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[1200px] text-sm text-left">
      <thead className="sticky top-0 z-10 bg-[#252834] border-b border-gray-700">
        <tr className="text-gray-300">
          {[
            "Device ID",
            "Device Type",
            "Last Sync",
            "Deviation (sec)",
            "Status",
            "Latency (ms)",
            "Action",
          ].map((header) => (
            <th
              key={header}
              className="px-5 py-4 font-semibold tracking-wide text-center border-r border-gray-700 last:border-r-0"
            >
              <div className="flex items-center justify-center gap-2 cursor-pointer group">
                <span>{header}</span>

                <div className="flex flex-col text-[8px] text-gray-500 group-hover:text-blue-400 transition-colors leading-none">
                  <span>▲</span>
                  <span>▼</span>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableData.map((row, index) => (
          <tr
            key={index}
            className={`
              border-b border-gray-800
              transition-all duration-200
              hover:bg-[#252834]
              hover:shadow-inner
              ${index % 2 === 0 ? "bg-[#1c1e27]" : "bg-[#20222d]"}
            `}
          >
            <td className="px-5 py-4 text-center border-r border-gray-800 font-medium text-gray-200">
              {row.deviceId}
            </td>

            <td className="px-5 py-4 text-center border-r border-gray-800 text-gray-300">
              {row.deviceType}
            </td>

            <td className="px-5 py-4 text-center border-r border-gray-800 text-gray-400">
              {row.lastSync}
            </td>

            <td className="px-5 py-4 text-center border-r border-gray-800">
              <span
                className={`font-semibold ${
                  row.deviation > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {row.deviation}
              </span>
            </td>

            <td className="px-5 py-4 text-center border-r border-gray-800">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
                ${
                  row.status === "Synchronized"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    row.status === "Synchronized"
                      ? "bg-green-400"
                      : "bg-red-400"
                  }`}
                />
                {row.status}
              </span>
            </td>

            <td className="px-5 py-4 text-center border-r border-gray-800">
              <span className="font-medium text-blue-400">
                {row.latency}
              </span>
            </td>

            <td className="px-5 py-4 text-center">
              <button
                className="
                  p-2 rounded-lg
                  bg-yellow-500/10
                  border border-yellow-500/20
                  text-yellow-400
                  hover:bg-yellow-500/20
                  hover:scale-110
                  transition-all duration-200
                "
              >
                <RefreshCw size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex items-center justify-between px-5 py-4 border-t border-gray-800 bg-[#181a22]">
    <span className="text-sm text-gray-400">
      Showing 1 to 10 of 1420 records
    </span>

    <div className="flex gap-2">
      <button className="px-3 py-1.5 rounded-lg bg-[#252834] text-gray-400 hover:text-white">
        Previous
      </button>

      <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white">
        1
      </button>

      <button className="px-3 py-1.5 rounded-lg bg-[#252834] text-gray-400 hover:text-white">
        2
      </button>

      <button className="px-3 py-1.5 rounded-lg bg-[#252834] text-gray-400 hover:text-white">
        3
      </button>

      <button className="px-3 py-1.5 rounded-lg bg-[#252834] text-gray-400 hover:text-white">
        Next
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default TimeSyncronize

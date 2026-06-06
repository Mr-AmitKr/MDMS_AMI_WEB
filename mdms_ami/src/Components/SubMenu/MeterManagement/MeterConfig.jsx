import React from 'react'
import {
  Settings,
  CircleCheck,
  Clock,
  CircleX,
  TrendingUp,
  Search,
  RefreshCcw,
  Download,
  Eye,
  Pencil,
  Wifi,
  Filter,
  Calendar,
  RotateCcw,
} from "lucide-react";
    const meterData = [
  {
    id: "MTR-1001",
    type: "3-Phase CT",
    protocol: "DLMS/COSEM",
    ip: "192.168.1.101:4059",
    interval: 15,
    updated: "13-Jul-2025",
    status: "Active",
  },
  {
    id: "MTR-1002",
    type: "1-Phase",
    protocol: "MODBUS",
    ip: "192.168.1.102:502",
    interval: 30,
    updated: "13-Jul-2025",
    status: "Pending",
  },
  {
    id: "MTR-1003",
    type: "LT Meter",
    protocol: "IEC 62056-21",
    ip: "192.168.1.103:8080",
    interval: 60,
    updated: "13-Jul-2025",
    status: "Failed",
  },
];
const stats = [
  {
    title: "Total Configured",
    value: "1,250",
    icon: Settings,
    color: "#1E90FF",
    trend: "+12%",
  },
  {
    title: "Active",
    value: "980",
    icon: CircleCheck,
    color: "#198754",
    trend: "+8%",
  },
  {
    title: "Pending Sync",
    value: "150",
    icon: Clock,
    color: "#FFBD0D",
    trend: "+3%",
  },
  {
    title: "Config Failed",
    value: "120",
    icon: CircleX,
    color: "#DC3545",
    trend: "-2%",
  },
];
const MeterConfig = () => {
  return (
    <div>
        <h2 className="text-white text-2xl font-medium mb-4 px-4 py-4 tracking-wider">
          Meter Configuration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 my-6 px-4">
  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="
          relative overflow-hidden
          bg-[#1c1e27]
          border border-gray-800
          rounded-xl
          p-5
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
          hover:shadow-black/30
          group
        "
      >
        {/* Accent Bar */}
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ backgroundColor: item.color }}
        />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {item.value}
            </h2>

            <div className="flex items-center gap-1 mt-3">
              <TrendingUp
                size={14}
                className={
                  item.trend.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }
              />

              <span
                className={`text-xs font-medium ${
                  item.trend.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {item.trend}
              </span>

              <span className="text-xs text-gray-500">
                vs last week
              </span>
            </div>
          </div>

          <div
            className="
              w-14 h-14
              rounded-xl
              flex items-center justify-center
              group-hover:scale-110
              transition-transform
            "
            style={{
              backgroundColor: `${item.color}20`,
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

        {/* Decorative Glow */}
        <div
          className="absolute -right-6 -top-6 w-24 h-24 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: item.color }}
        />
      </div>
    );
  })}
</div>
            {/* Meter Configuration Form */}
<div className="mx-4 mt-6 bg-[#1c1e27] border border-gray-800 rounded-xl p-6 shadow-lg">
  <div className="flex items-center justify-between mb-6">
    <div>
      <h3 className="text-xl text-white font-semibold">
        Add / Update Meter Configuration
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        Configure communication, security and meter parameters.
      </p>
    </div>

    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
      New Configuration
    </span>
  </div>

  <form>
    {/* Meter Information */}
    <div className="bg-[#252834] rounded-lg p-5 mb-5">
      <h4 className="text-white font-medium mb-4">
        Meter Information
      </h4>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Meter ID
          </label>
          <input
            type="text"
            placeholder="MTR-1001"
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Meter Type
          </label>
          <select className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white">
            <option>3-Phase CT</option>
            <option>1-Phase</option>
            <option>LT Meter</option>
          </select>
        </div>
      </div>
    </div>

    {/* Communication Settings */}
    <div className="bg-[#252834] rounded-lg p-5 mb-5">
      <h4 className="text-white font-medium mb-4">
        Communication Settings
      </h4>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Protocol
          </label>
          <select className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white">
            <option>DLMS/COSEM</option>
            <option>MODBUS</option>
            <option>IEC 62056-21</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            IP Address
          </label>
          <input
            type="text"
            placeholder="192.168.1.100"
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Port
          </label>
          <input
            type="number"
            placeholder="4059"
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>
      </div>
    </div>

    {/* Read Settings */}
    <div className="bg-[#252834] rounded-lg p-5 mb-5">
      <h4 className="text-white font-medium mb-4">
        Read & Retry Configuration
      </h4>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Read Interval (min)
          </label>
          <input
            type="number"
            defaultValue={15}
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Timeout (sec)
          </label>
          <input
            type="number"
            defaultValue={30}
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Retry Count
          </label>
          <input
            type="number"
            defaultValue={3}
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>
      </div>
    </div>

    {/* Security */}
    <div className="bg-[#252834] rounded-lg p-5 mb-5">
      <h4 className="text-white font-medium mb-4">
        Security Configuration
      </h4>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            OBIS Code
          </label>
          <input
            type="text"
            placeholder="1-0:1.8.0*255"
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Encryption Key
          </label>
          <input
            type="password"
            placeholder="Enter 16-byte HEX Key"
            className="w-full bg-[#151821] border border-gray-700 rounded-lg px-4 py-2.5 text-white"
          />
        </div>
      </div>
    </div>

    {/* Live Summary */}
    <div className="bg-[#252834] rounded-lg p-5 mb-6">
      <h4 className="text-white font-medium mb-4">
        Configuration Summary
      </h4>

      <div className="grid md:grid-cols-2 gap-y-3 text-sm">
        <p className="text-gray-400">
          Meter Type:
          <span className="text-white ml-2">3-Phase CT</span>
        </p>

        <p className="text-gray-400">
          Protocol:
          <span className="text-white ml-2">DLMS/COSEM</span>
        </p>

        <p className="text-gray-400">
          Read Interval:
          <span className="text-white ml-2">15 min</span>
        </p>

        <p className="text-gray-400">
          Security:
          <span className="text-green-400 ml-2">Enabled</span>
        </p>
      </div>
    </div>

    {/* Actions */}
    <div className="flex justify-end gap-3 border-t border-gray-800 pt-5">
      <button
        type="reset"
        className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition"
      >
        Reset
      </button>

      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
      >
        Save Configuration
      </button>
    </div>
  </form>
</div>
    <h3 className="text-white text-lg font-medium mb-4 mt-8 px-4 py-4 tracking-wider">
          Configured Meters
        </h3>
            <div className="mx-4 mb-8 bg-[#1c1e27] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#1c1e27] border border-gray-800 rounded-xl p-5 mb-6">

  {/* Header */}
  <div className="flex items-center gap-2 mb-5">
    <Filter size={18} className="text-blue-400" />
    <h3 className="text-white font-semibold">
      Filter Meter Configurations
    </h3>
  </div>

  {/* Filters */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-4">

    {/* Meter ID */}
    <div>
      <label className="block text-xs text-gray-400 mb-2">
        Meter ID
      </label>

      <div className="relative">
        <Search
          size={15}
          className="absolute left-3 top-3 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search Meter"
          className="
            w-full
            pl-9 pr-3 py-2.5
            bg-[#12131a]
            border border-gray-700
            rounded-lg
            text-sm text-white
            focus:border-blue-500
            outline-none
          "
        />
      </div>
    </div>

    {/* Meter Type */}
    <div>
      <label className="block text-xs text-gray-400 mb-2">
        Meter Type
      </label>

      <select
        className="
          w-full
          bg-[#12131a]
          border border-gray-700
          rounded-lg
          px-3 py-2.5
          text-sm text-white
          focus:border-blue-500
          outline-none
        "
      >
        <option>All Types</option>
        <option>3-Phase CT</option>
        <option>1-Phase</option>
        <option>LT Meter</option>
      </select>
    </div>

    {/* Protocol */}
    <div>
      <label className="block text-xs text-gray-400 mb-2">
        Protocol
      </label>

      <select
        className="
          w-full
          bg-[#12131a]
          border border-gray-700
          rounded-lg
          px-3 py-2.5
          text-sm text-white
          focus:border-blue-500
          outline-none
        "
      >
        <option>All Protocols</option>
        <option>DLMS/COSEM</option>
        <option>MODBUS</option>
        <option>IEC 62056-21</option>
      </select>
    </div>

    {/* Status */}
    <div>
      <label className="block text-xs text-gray-400 mb-2">
        Status
      </label>

      <select
        className="
          w-full
          bg-[#12131a]
          border border-gray-700
          rounded-lg
          px-3 py-2.5
          text-sm text-white
          focus:border-blue-500
          outline-none
        "
      >
        <option>All Status</option>
        <option>Active</option>
        <option>Pending Sync</option>
        <option>Failed</option>
      </select>
    </div>

    {/* From Date */}
    <div>
      <label className="block text-xs text-gray-400 mb-2">
        From Date
      </label>

      <div className="relative">
        <Calendar
          size={15}
          className="absolute left-3 top-3 text-gray-500"
        />

        <input
          type="date"
          className="
            w-full
            pl-9 pr-3 py-2.5
            bg-[#12131a]
            border border-gray-700
            rounded-lg
            text-sm text-white
            focus:border-blue-500
            outline-none
          "
        />
      </div>
    </div>

    {/* To Date */}
    <div>
      <label className="block text-xs text-gray-400 mb-2">
        To Date
      </label>

      <div className="relative">
        <Calendar
          size={15}
          className="absolute left-3 top-3 text-gray-500"
        />

        <input
          type="date"
          className="
            w-full
            pl-9 pr-3 py-2.5
            bg-[#12131a]
            border border-gray-700
            rounded-lg
            text-sm text-white
            focus:border-blue-500
            outline-none
          "
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex items-end gap-2">

      <button
        className="
          flex-1
          bg-gray-700
          hover:bg-gray-600
          text-white
          py-2.5
          rounded-lg
          flex items-center justify-center gap-2
          transition
        "
      >
        <RotateCcw size={15} />
        Reset
      </button>

      <button
        className="
          flex-1
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-2.5
          rounded-lg
          transition
        "
      >
        Apply
      </button>

    </div>
  </div>

  {/* Active Filters */}
  <div className="flex flex-wrap gap-2 mt-5">

    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
      DLMS/COSEM
    </span>

    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs border border-green-500/20">
      Active
    </span>

  </div>

</div>
  {/* Toolbar */}
  <div className="p-5 border-b border-gray-800">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      <div className="flex flex-wrap gap-3">

        <select className="bg-[#151821] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white">
          <option>All Types</option>
          <option>3-Phase CT</option>
          <option>1-Phase</option>
          <option>LT Meter</option>
        </select>

        <select className="bg-[#151821] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      <div className="flex gap-3">

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-3 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search meter..."
            className="pl-10 pr-4 py-2 bg-[#151821] border border-gray-700 rounded-lg text-white"
          />
        </div>

        <button className="w-10 h-10 rounded-lg bg-[#252834] hover:bg-[#303544] flex items-center justify-center">
          <RefreshCcw size={16} className="text-yellow-400" />
        </button>

        <button className="px-4 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center gap-2 text-white">
          <Download size={16} />
          Export
        </button>

      </div>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-gradient-to-r from-[#252944] to-[#1d2238] text-gray-200">
        <tr>
          <th className="px-5 py-4 text-left">Meter ID</th>
          <th className="px-5 py-4 text-left">Type</th>
          <th className="px-5 py-4 text-left">Protocol</th>
          <th className="px-5 py-4 text-left">IP Address</th>
          <th className="px-5 py-4 text-left">Interval</th>
          <th className="px-5 py-4 text-left">Updated</th>
          <th className="px-5 py-4 text-center">Status</th>
          <th className="px-5 py-4 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>

        {meterData.map((meter, index) => (

          <tr
            key={index}
            className="
              border-b border-gray-800
              hover:bg-[#252834]
              transition-all
            "
          >
            <td className="px-5 py-4 text-white font-medium">
              {meter.id}
            </td>

            <td className="px-5 py-4 text-gray-300">
              {meter.type}
            </td>

            <td className="px-5 py-4 text-gray-300">
              {meter.protocol}
            </td>

            <td className="px-5 py-4 text-gray-300">
              {meter.ip}
            </td>

            <td className="px-5 py-4 text-gray-300">
              {meter.interval} min
            </td>

            <td className="px-5 py-4 text-gray-300">
              {meter.updated}
            </td>

            <td className="px-5 py-4 text-center">

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border
                ${
                  meter.status === "Active"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : meter.status === "Pending"
                    ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }
              `}
              >
                {meter.status}
              </span>

            </td>

            <td className="px-5 py-4">

              <div className="flex justify-center gap-2">

                <button className="w-9 h-9 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center">
                  <Eye
                    size={16}
                    className="text-blue-400"
                  />
                </button>

                <button className="w-9 h-9 rounded-lg bg-green-500/10 hover:bg-green-500/20 flex items-center justify-center">
                  <Pencil
                    size={16}
                    className="text-green-400"
                  />
                </button>

                <button className="w-9 h-9 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 flex items-center justify-center">
                  <Wifi
                    size={16}
                    className="text-yellow-400"
                  />
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

    <span className="text-sm text-gray-400">
      Showing 1-10 of 60 Meters
    </span>

    <div className="flex gap-2">

      <button className="px-4 py-2 rounded-lg bg-[#252834] text-gray-300">
        Previous
      </button>

      <button className="w-10 h-10 rounded-lg bg-blue-600 text-white">
        1
      </button>

      <button className="w-10 h-10 rounded-lg bg-[#252834] text-gray-300">
        2
      </button>

      <button className="w-10 h-10 rounded-lg bg-[#252834] text-gray-300">
        3
      </button>

      <button className="px-4 py-2 rounded-lg bg-[#252834] text-gray-300">
        Next
      </button>

    </div>
  </div>
</div>
    </div>
  )
}

export default MeterConfig

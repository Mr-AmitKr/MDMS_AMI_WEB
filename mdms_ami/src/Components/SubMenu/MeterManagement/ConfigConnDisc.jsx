import React, { useState } from "react";

const ConfigConnDisc = () => {
  const [meterId, setMeterId] = useState("");
  const [eventSetting, setEventSetting] = useState("connect");
  const [reconnectAttempts, setReconnectAttempts] = useState(3);
  const [retryInterval, setRetryInterval] = useState(60);
  const [lockoutPeriod, setLockoutPeriod] = useState(15);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white px-4 py-4 font-light tracking-wider">
        Configure Connect/Disconnect
      </h1>

      <div className="bg-[#1c1e27] border border-gray-800 p-5 rounded-lg shadow-md font-sans mx-4">
        <h2 className="text-[16px] text-[#f8f9fa] font-semibold mb-5">
          Send Remote Command
        </h2>

        {/* Meter ID & Event Setting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
              Meter ID / Batch ID
            </label>
            <input
              type="text"
              placeholder="e.g. Meter001 or Batch001"
              value={meterId}
              onChange={(e) => setMeterId(e.target.value)}
              className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-2 w-full outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
              Event Setting
            </label>
            <select
              value={eventSetting}
              onChange={(e) => setEventSetting(e.target.value)}
              className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-2 w-full outline-none focus:border-blue-500"
            >
              <option value="connect">Connect</option>
              <option value="disconnect">Disconnect</option>
            </select>
          </div>
        </div>

        {/* Configuration Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
              Auto Reconnect Attempts
            </label>
            <input
              type="number"
              value={reconnectAttempts}
              onChange={(e) => setReconnectAttempts(e.target.value)}
              className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-2 w-full outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
              Retry Interval (sec)
            </label>
            <input
              type="number"
              value={retryInterval}
              onChange={(e) => setRetryInterval(e.target.value)}
              className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-2 w-full outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-[#a0a4b8] text-[13px] mb-1.5 font-medium">
              Lockout Period (min)
            </label>
            <input
              type="number"
              value={lockoutPeriod}
              onChange={(e) => setLockoutPeriod(e.target.value)}
              className="bg-[#12131a] text-[#e2e8f0] text-sm border border-gray-700 rounded px-3 py-2 w-full outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition"
            onClick={() => console.log("Connect Service")}
          >
            Connect Service
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition"
            onClick={() => console.log("Disconnect Service")}
          >
            Disconnect Service
          </button>
        </div>
      </div>

        <div>
        <h1 className="text-white text-[20px] mb-4 px-4 py-4 font-medium tracking-wider">
          Command & Relay Status
        </h1>

         <div className="mx-4 bg-[#1c1e27] border border-gray-800 rounded-lg p-5 shadow-md">
  {/* Stats Cards */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div className="bg-[#252834] rounded-lg p-4">
      <p className="text-xs text-gray-400">Total Commands</p>
      <h3 className="text-2xl font-semibold text-white">25</h3>
    </div>

    <div className="bg-[#252834] rounded-lg p-4">
      <p className="text-xs text-gray-400">Executed</p>
      <h3 className="text-2xl font-semibold text-green-500">18</h3>
    </div>

    <div className="bg-[#252834] rounded-lg p-4">
      <p className="text-xs text-gray-400">Pending</p>
      <h3 className="text-2xl font-semibold text-yellow-500">5</h3>
    </div>

    <div className="bg-[#252834] rounded-lg p-4">
      <p className="text-xs text-gray-400">Failed</p>
      <h3 className="text-2xl font-semibold text-red-500">2</h3>
    </div>
  </div>

  {/* Filters */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
    <div className="md:col-span-3">
      <label className="text-xs text-gray-400 block mb-1">
        Meter ID / Batch ID
      </label>
      <input
        type="text"
        placeholder="Enter Meter ID"
        className="w-full bg-[#12131a] border border-gray-700 rounded px-3 py-2 text-sm text-white"
      />
    </div>

    <div className="md:col-span-2">
      <label className="text-xs text-gray-400 block mb-1">
        Event
      </label>
      <select className="w-full bg-[#12131a] border border-gray-700 rounded px-3 py-2 text-sm text-white">
        <option>All</option>
        <option>Connect</option>
        <option>Disconnect</option>
      </select>
    </div>

    <div className="md:col-span-2">
      <label className="text-xs text-gray-400 block mb-1">
        Status
      </label>
      <select className="w-full bg-[#12131a] border border-gray-700 rounded px-3 py-2 text-sm text-white">
        <option>All</option>
        <option>Executed</option>
        <option>Sent</option>
        <option>Failed</option>
      </select>
    </div>

    <div className="md:col-span-2">
      <label className="text-xs text-gray-400 block mb-1">
        From
      </label>
      <input
        type="date"
        className="w-full bg-[#12131a] border border-gray-700 rounded px-3 py-2 text-sm text-white"
      />
    </div>

    <div className="md:col-span-2">
      <label className="text-xs text-gray-400 block mb-1">
        To
      </label>
      <input
        type="date"
        className="w-full bg-[#12131a] border border-gray-700 rounded px-3 py-2 text-sm text-white"
      />
    </div>

    <div className="md:col-span-1 flex items-end">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 text-sm">
        Apply
      </button>
    </div>
  </div>

  {/* Table Header */}
  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
    <input
      type="text"
      placeholder="Search Meter ID..."
      className="bg-[#12131a] border border-gray-700 rounded px-4 py-2 text-sm text-white md:w-64"
    />
  </div>

  {/* Table */}
  <div className="overflow-x-auto border border-gray-700 rounded-lg">
    <table className="w-full text-sm">
      <thead className="bg-[#2a2542] text-gray-200">
        <tr>
          <th className="p-3 text-left">Meter ID</th>
          <th className="p-3 text-left">Event</th>
          <th className="p-3 text-left">Timestamp</th>
          <th className="p-3 text-left">Relay Status</th>
          <th className="p-3 text-left">Command Status</th>
        </tr>
      </thead>

      <tbody>
        {[
          {
            meter: "MTR001",
            event: "Disconnect",
            relay: "Disconnected",
            status: "Executed",
            time: "13-07-2025 10:05:12",
          },
          {
            meter: "BAT001",
            event: "Connect",
            relay: "Connected",
            status: "Executed",
            time: "13-07-2025 10:03:45",
          },
          {
            meter: "BAT002",
            event: "Disconnect",
            relay: "Connected",
            status: "Failed",
            time: "13-07-2025 09:55:20",
          },
        ].map((row, index) => (
          <tr
            key={index}
            className="border-t border-gray-700 hover:bg-[#252834]"
          >
            <td className="p-3 text-gray-300">{row.meter}</td>

            <td className="p-3 text-gray-300">
              {row.event}
            </td>

            <td className="p-3 text-gray-300">
              {row.time}
            </td>

            <td className="p-3">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    row.relay === "Connected"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
                <span className="text-gray-300">
                  {row.relay}
                </span>
              </div>
            </td>

            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-full text-xs text-white ${
                  row.status === "Executed"
                    ? "bg-green-600"
                    : row.status === "Failed"
                    ? "bg-red-600"
                    : "bg-yellow-600"
                }`}
              >
                {row.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-5">
    <span className="text-xs text-gray-400">
      Showing 1 to 3 of 25 entries
    </span>

    <div className="flex gap-2">
      <button className="px-3 py-1 bg-[#252834] text-white rounded">
        Prev
      </button>

      <button className="px-3 py-1 bg-blue-600 text-white rounded">
        1
      </button>

      <button className="px-3 py-1 bg-[#252834] text-white rounded">
        2
      </button>

      <button className="px-3 py-1 bg-[#252834] text-white rounded">
        3
      </button>

      <button className="px-3 py-1 bg-[#252834] text-white rounded">
        Next
      </button>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default ConfigConnDisc;
import { FaPlus } from "react-icons/fa6";
import { FaLayerGroup , FaEye } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { BsSpeedometer2 } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { RiStackFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const consumptionData = [
  { month: "Jan", southregion: 180, northregion: 140, eastregion: 120 ,westregion:160  },
  { month: "Feb", southregion: 210, northregion: 150, eastregion: 135 , westregion:120},
  { month: "Mar", southregion: 260, northregion: 170, eastregion: 155 , westregion:180},
  { month: "Apr", southregion: 240, northregion: 180, eastregion: 165 , westregion:250 },
  { month: "May", southregion: 310, northregion: 220, eastregion: 210 , westregion:170 },
  { month: "Jun", southregion: 350, northregion: 250, eastregion: 240 , westregion:200 },
];



const MeterGroups = () => {
  const handleSave = () => {

  if (editMode) {

    setGroupsData((prev) =>
      prev.map((item) =>
        item.id === formData.id
          ? formData
          : item
      )
    );

  } else {

    setGroupsData((prev) => [
      ...prev,
      {
        ...formData,
        updated: "Just Now",
      },
    ]);

  }

  setShowForm(false);
};
  const [showForm, setShowForm] = useState(false);
const [editMode, setEditMode] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  tier: "",
  id: "",
  meters: "",
  added: "",
  location: "",
  region: "North",
  status: "Active",
  estimatedConsumption: "",
});
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
const [selectedStatus, setSelectedStatus] = useState("All");
const [selectedGroup, setSelectedGroup] = useState(null);
const [groupsData, setGroupsData] = useState([
  {
    name: "Downtown Commercial",
    tier: "Tier 1 Critical",
    id: "GRP-88291",
    meters: 1420,
    added: 12,
    location: "Central District",
    region: "North",
    status: "Active",
    updated: "2m ago",
    estimatedConsumption: 220,
  },
  {
    name: "Industrial Zone Alpha",
    tier: "Tier 2",
    id: "GRP-88292",
    meters: 980,
    added: 5,
    location: "Industrial Park",
    region: "South",
    status: "Inactive",
    updated: "10m ago",
    estimatedConsumption: 180,
  },
]);
 const filteredData = groupsData.filter((group) => {
    const regionMatch =
      selectedRegion === "All Regions" ||
      group.region === selectedRegion;

    const statusMatch =
      selectedStatus === "All" ||
      group.status === selectedStatus;

    return regionMatch && statusMatch;
  });

  return (
    <div>

    <div className="flex items-center justify-between px-12">  
         <div>
           <h1 className="text-gray-300 font-bold tracking-wider text-2xl ">
            Meter Groups
          </h1>
          <p className="text-gray-300  font-light tracking-[4px]">
            Manage and Moniter Organizational Utility Clusters.
          </p>
         </div>
         <div>
          <button
  onClick={() => {
    setEditMode(false);

    setFormData({
      name: "",
      tier: "",
      id: "",
      meters: "",
      added: "",
      location: "",
      region: "North",
      status: "Active",
      estimatedConsumption: "",
    });

    setShowForm(true);
  }}
  className="text-gray-300 h-15 rounded-2xl px-4 bg-emerald-800"
>
                <h1 className="flex items-center gap-2 tracking-[2px] font-bold"><FaPlus className="text-[20px]" />Create Meter Group</h1>
          </button>
         </div>
         {/* Meter Groups Table */}
         {
showForm && (
<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

  <div className="w-[700px] bg-[#1c1e27] rounded-2xl p-6">

    <h2 className="text-2xl text-white mb-6">
      {editMode
        ? "Edit Meter Group"
        : "Create Meter Group"}
    </h2>

    <div className="grid grid-cols-2 gap-4">

      <input
        placeholder="Group Name"
        value={formData.name}
        onChange={(e)=>
          setFormData({
            ...formData,
            name:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      />

      <input
        placeholder="Group ID"
        value={formData.id}
        onChange={(e)=>
          setFormData({
            ...formData,
            id:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      />

      <input
        placeholder="Tier"
        value={formData.tier}
        onChange={(e)=>
          setFormData({
            ...formData,
            tier:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      />

      <input
        placeholder="Meters"
        value={formData.meters}
        onChange={(e)=>
          setFormData({
            ...formData,
            meters:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      />

      <input
        placeholder="Location"
        value={formData.location}
        onChange={(e)=>
          setFormData({
            ...formData,
            location:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      />

      <select
        value={formData.region}
        onChange={(e)=>
          setFormData({
            ...formData,
            region:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      >
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
      </select>

      <select
        value={formData.status}
        onChange={(e)=>
          setFormData({
            ...formData,
            status:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <input
        placeholder="Estimated Consumption"
        value={formData.estimatedConsumption}
        onChange={(e)=>
          setFormData({
            ...formData,
            estimatedConsumption:e.target.value
          })
        }
        className="bg-[#232429] p-3 rounded-xl text-white"
      />

    </div>

    <div className="flex justify-end gap-4 mt-6">

      <button
        onClick={() => setShowForm(false)}
        className="px-5 py-2 bg-gray-700 rounded-xl text-white"
      >
        Cancel
      </button>

      <button
        onClick={handleSave}
        className="px-5 py-2 bg-emerald-600 rounded-xl text-white"
      >
        Save
      </button>

    </div>

  </div>

</div>
)}
{
selectedGroup && (
<div className="fixed inset-0 bg-black/60 flex justify-end z-50">

  <div className="w-[500px] h-full bg-[#1c1e27] p-6 overflow-y-auto">

    <div className="flex justify-between mb-6">

      <h2 className="text-2xl text-white">
        Meter Group Details
      </h2>

      <button
        onClick={() => setSelectedGroup(null)}
        className="text-red-400"
      >
        Close
      </button>

    </div>

    <div className="space-y-4">

      <p className="text-white">
        Name: {selectedGroup.name}
      </p>

      <p className="text-white">
        Group ID: {selectedGroup.id}
      </p>

      <p className="text-white">
        Tier: {selectedGroup.tier}
      </p>

      <p className="text-white">
        Region: {selectedGroup.region}
      </p>

      <p className="text-white">
        Status: {selectedGroup.status}
      </p>

      <p className="text-white">
        Location: {selectedGroup.location}
      </p>

      <p className="text-white">
        Consumption:
        {selectedGroup.estimatedConsumption}
        kWh
      </p>

    </div>

  </div>

</div>
)}
    </div>
      <div className="px-12 py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className=" w-full h-50 rounded-2xl bg-gray-800 hover:shadow-gray-700 hover:shadow-[0_4px_8px]">
          <div className="px-4 py-6 text-gray-300 flex justify-between">
              <div className=" w-15 h-15 flex items-center px-3 rounded-2xl bg-blue-300">
              <FaLayerGroup className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-green-600 font-bold">+2 New</h3>
          </div>
         <div className="px-4">
                 <h3 className="text-gray-300 text-[18px] font-extralight text-gray-500">
            TOTAL GROUPS
          </h3>
          <h1 className="text-gray-300 text-3xl font-bold " >
            124
          </h1>
              </div>
    </div>
          <div className=" w-full h-50 rounded-2xl bg-gray-800 hover:shadow-gray-700 hover:shadow-[0_4px_8px]">
          <div className="px-4 py-6 text-gray-300 flex justify-between">
              <div className=" w-15 h-15 flex items-center px-3 rounded-2xl bg-green-300">
              <SiTicktick className="text-4xl text-green-600" />
              </div>
              <h3 className="text-green-600 font-bold">95.5%</h3>
          </div>
         <div className="px-4">
                 <h3 className="text-gray-300 text-[18px] font-extralight text-gray-500">
            ACTIVE GROUPS
          </h3>
          <h1 className="text-gray-300 text-3xl font-bold " >
            118
          </h1>
              </div>
      </div>
      <div className=" w-full h-50 rounded-2xl bg-gray-800 hover:shadow-gray-700 hover:shadow-[0_4px_8px]">
          <div className="px-4 py-6 text-gray-300 flex justify-between">
              <div className=" w-15 h-15 flex items-center px-3 rounded-2xl bg-yellow-300">
              <BsSpeedometer2 className="text-4xl text-yellow-600" />
              </div>
              <h3 className="text-green-300 font-light">Synced</h3>
          </div>
         <div className="px-4">
                 <h3 className="text-gray-300 text-[18px] font-extralight text-gray-500">
            TOTAL METERS
          </h3>
          <h1 className="text-gray-300 text-3xl font-bold " >
            4,456
          </h1>
              </div>
      </div>
      <div className=" w-full h-50 rounded-2xl bg-gray-800 hover:shadow-gray-700 hover:shadow-[0_4px_8px]">
          <div className="px-4 py-6 text-gray-300 flex justify-between">
              <div className=" w-15 h-15 flex items-center px-3 rounded-2xl bg-red-300">
              <SlEnergy className="text-4xl text-red-600" />
              </div>
              <h3 className="text-red-600 font-bold">+12% Peak</h3>
          </div>
         <div className="px-4">
                 <h3 className="text-gray-300 text-[18px] font-extralight text-gray-500">
            ENEGRY CONSUMPTION
          </h3>
          <h1 className="text-gray-300 text-3xl font-bold flex items-baseline-last gap-2" >
            1.23M <p className="text-gray-500 text-2xl font-light">kWh</p>
          </h1>
              </div>
      </div>
      </div>
      <div className="px-12 py-0 grid grid-cols-1 2xl:grid-cols-[2fr_1fr] gap-4">
        <div className="w-full h-80 rounded-2xl bg-gray-800 p-6">
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-white text-xl font-bold tracking-wider">
        Consumption Trends
      </h2>
      <p className="text-gray-400 text-sm">
        Energy usage across meter groups
      </p>
    </div>

    <div className="flex gap-2">
      <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm">
        Groups
      </button>
      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm">
        Comparison
      </button>
    </div>
  </div>

  <ResponsiveContainer width="100%" height="80%">
    <LineChart data={consumptionData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

      <XAxis
        dataKey="month"
        stroke="#9ca3af"
      />

      <YAxis
        stroke="#9ca3af"
      />

      <Tooltip
        contentStyle={{
          backgroundColor: "#1f2937",
          border: "1px solid #374151",
          borderRadius: "12px",
        }}
      />

      <Legend />

      <Line
        type="monotone"
        dataKey="southregion"
        stroke="#3b82f6"
        strokeWidth={3}
        dot={{ r: 4 }}
        name="SouthRegion"
      />

      <Line
        type="monotone"
        dataKey="northregion"
        stroke="#10b981"
        strokeWidth={3}
        dot={{ r: 4 }}
        name="NorthRegion"
      />

      <Line
        type="monotone"
        dataKey="eastregion"
        stroke="#f59e0b"
        strokeWidth={3}
        dot={{ r: 4 }}
        name="EastRegion"
      />

      <Line
  type="monotone"
  dataKey="westregion"
  stroke="#F54927"
  strokeWidth={3}
  dot={{ r: 4 }}
  name="WestRegion"
/>
    </LineChart>
  </ResponsiveContainer>
</div>
       <div className="w-full h-80 rounded-2xl bg-gray-800 p-4">
  <h2 className="text-white text-xl font-bold mb-6">
    Meter Consumption Regional
  </h2>

  <div className="space-y-5">
    {[
      { name: "South Region", value: 350 },
      { name: "North Region", value: 250 },
      { name: "East Region", value: 240 },
      { name: "West Region", value: 180 },
    ].map((group) => (
      <div key={group.name}>
        <div className="flex justify-between mb-2">
          <span className="text-gray-300">
            {group.name}
          </span>
          <span className="text-emerald-400">
            {group.value} kWh
          </span>
        </div>

        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full"
            style={{
              width: `${(group.value / 350) * 100}%`,
            }}
          />
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
      {/* Meter Groups Table*/}
      <div className="px-12 mt-8">
         <div className="border border-gray-700 rounded-t-2xl p-6 bg-[#1c1e27]">
  <div className="flex flex-wrap items-center justify-between gap-4">

    <div className="flex flex-wrap gap-4">
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="bg-[#232429] border border-emerald-500 text-gray-300 rounded-xl px-4 py-3 min-w-[180px]"
      >
        <option>All Regions</option>
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
      </select>

      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="bg-[#232429] border border-emerald-500 text-gray-300 rounded-xl px-4 py-3 min-w-[180px]"
      >
        <option>All</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>

    <div className="text-gray-400 text-sm">
      Showing{" "}
      <span className="text-emerald-400 font-semibold">
        {filteredData.length}
      </span>{" "}
      Groups
    </div>

  </div>
</div>
          <div className="overflow-x-auto border border-gray-700 rounded-b-2xl bg-[#1c1e27]">

  <table className="w-full text-left text-gray-300">
    
    <thead className="bg-[#232429] border-b border-gray-700">
      <tr>
        <th className="px-6 py-4">GROUP NAME</th>
        <th className="px-6 py-4">GROUP ID</th>
        <th className="px-6 py-4">METERS</th>
        <th className="px-6 py-4">LOCATION</th>
        <th className="px-6 py-4">STATUS</th>
        <th className="px-6 py-4">LAST UPDATED</th>
        <th className="px-6 py-4 text-center">ACTIONS</th>
      </tr>
    </thead>

    <tbody>
  {filteredData.length > 0 ? (
    filteredData.map((group) => (
      <tr
        key={group.id}
        className="border-b border-gray-800 hover:bg-[#252833] transition-all duration-300"
      >
        <td className="px-6 py-5">
          <div>
            <h3 className="font-semibold text-white">
              {group.name}
            </h3>
            <p className="text-xs text-gray-500">
              {group.tier}
            </p>
          </div>
        </td>

        <td className="px-6 py-5 text-gray-400">
          {group.id}
        </td>

        <td className="px-6 py-5">
          <div className="flex flex-col">
            <span className="font-semibold">
              {group.meters.toLocaleString()}
            </span>

            <span className="text-xs text-green-400">
              +{group.added} New
            </span>
          </div>
        </td>

        <td className="px-6 py-5">
          {group.location}
        </td>

        <td className="px-6 py-5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              group.status === "Active"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {group.status}
          </span>
        </td>

        <td className="px-6 py-5 text-gray-400">
          {group.updated}
        </td>

        <td className="px-6 py-5">
          <div className="flex justify-center gap-3">
            <button onClick={() => setSelectedGroup(group)} className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition">
              <FaEye />
            </button>

            <button  onClick={() => {
    setEditMode(true);
    setShowForm(true);
    setFormData(group);
  }} className="w-9 h-9 flex items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition">
              <IoPencilSharp />
            </button>
          </div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan="7"
        className="text-center py-12 text-gray-500"
      >
        No groups found for selected filters.
      </td>
    </tr>
  )}
</tbody>    

  </table>

</div>
      </div>  
    </div>
  )
}

export default MeterGroups

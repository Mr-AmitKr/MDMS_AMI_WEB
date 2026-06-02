import React from "react";
import LastYearCharts from "../Charts.jsx/LastYearCharts";
import LossesMonthlyWise from "../Cards/LossesMonthlyWise";
import CommunicationFailure from "../Cards/CommunicationFailure ";
import HrsReading from "../Cards/HrsReading";
import LastWeekReading from "../Cards/LastWeekReading";
import LastMonthReading from "../Cards/LastMonthReading";
import LastYearReading from "../Cards/LastYearReading";
import AlarmDetails from "../AlarmCards/AlarmDetails";

const Dashboard = () => {
  
  return (
  <div className="pt-35 p-4 md:p-6 space-y-8 ">

    {/* Top Cards */}
    <div
  className="
  flex
  gap-4
  overflow-x-auto
  pb-2
  scrollbar-hide
  "
>
      {/* Card 1 */}
      <HrsReading/>
      {/* Card 2 */}
      <LastWeekReading/>
      {/* Card 3 */}
      <LastMonthReading/>
      {/* Card 4 */}
      <LastYearReading/>
    </div>

    {/* Bottom Section */}
    <div
  className="
  grid
  grid-cols-1
  xl:grid-cols-[1fr_1fr_0.8fr]
  gap-4
  scrollbar-hide
  "
>

      <div className="bg-[#151921] rounded-xl p-4">
        <h3 className="text-white text-sm mb-4">
          Losses Monthly Wise
        </h3>

        <div className="h-[220px]">
          <LossesMonthlyWise />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs text-white">

  {/* Total PosActEnrg */}
  <span className="flex items-center gap-1.5">
    <span
      className="w-2.5 h-2.5 rounded-sm"
      style={{ backgroundColor: "#2b65f5" }}
    />
    Total PosActEnrg
  </span>

  {/* Total PosReactEnrg */}
  <span className="flex items-center gap-1.5">
    <span
      className="w-2.5 h-2.5 rounded-sm"
      style={{ backgroundColor: "#22d3ee" }}
    />
    Total PosReactEnrg
  </span>

  {/* Total Losses */}
  <span className="flex items-center gap-1.5">
    <span
      className="w-6 h-0.5 relative"
      style={{ backgroundColor: "#00e676" }}
    >
      <span
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-2
          h-2
          rounded-full
        "
        style={{ backgroundColor: "#00e676" }}
      />
    </span>
    Total Losses
  </span>

</div>
      </div>

      <div className="bg-[#151921] rounded-xl p-4">
        <h3 className="text-white text-sm mb-4">
          Communication Module Vs Smart Meter Failure
        </h3>

        <div className="h-[220px]">
          <CommunicationFailure/>
        </div>
      </div>

      <div className="bg-[#151921] rounded-xl p-4">
          <h3 className="text-white text-sm mb-3">
            Meter Details On Map
          </h3>

          <label className="text-xs text-gray-400">
            Search Location
          </label>

          <input
            type="text"
            placeholder="Enter a location"
            className="w-full mt-2 bg-[#2a2f3a] border border-[#3d4450] rounded-md px-3 py-2 text-white text-sm"
          />

          <div className="mt-4 h-[180px] rounded-md bg-gradient-to-b from-slate-300 to-slate-400 flex items-center justify-center">
            <p className="text-gray-700 text-sm">
              Map View
            </p>
          </div>
      </div>

    </div>
    <AlarmDetails/>
  </div>
)};
export default Dashboard

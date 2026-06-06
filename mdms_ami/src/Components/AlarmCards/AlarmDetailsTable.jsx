import React, { useState } from "react";
import AlarmDetailsTableData from "./AlarmDetailsTableData";
import AlarmCountByHour from "./AlarmCountByHour";

const AlarmDetailsTable = () => {
  const [timeFrame, setTimeFrame] = useState("Hourly");

  return (
    <div className="bg-[#2d303a] rounded-xl border border-[#3d4450] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[#3d4450]">
        <h4 className="text-white text-sm">
          Alarm Details Table
        </h4>

        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="bg-[#2a2f3a] border border-amber-50 text-white px-3 py-2 rounded-md text-sm"
        >
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <AlarmDetailsTableData timeFrame={timeFrame} />

    </div>
  );
};

export default AlarmDetailsTable;
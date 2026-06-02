import { useState } from "react";
import AlarmSummaryPie from "../AlarmCards/AlarmSummaryPie";
import AlarmDistributionPie from "../AlarmCards/AlarmDistributionPie";
import AlarmDetailsTable from "../AlarmCards/AlarmDetailsTable";
import AlarmCountByHour from "../AlarmCards/AlarmCountByHour";

const AlarmDetails = () => {
  const [period, setPeriod] = useState("Hourly");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg">
          Alarm Details
        </h3>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="
            bg-[#2a2f3a]
            text-white
            text-sm
            rounded-md
            px-3
            py-2
            border
            border-[#3d4450]
            outline-none
          "
        >
          <option>Hourly</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AlarmSummaryPie period={period} />
        <AlarmDistributionPie period={period} />
      </div>

      <AlarmDetailsTable period={period} />

      <div className="h-[250px]">
        <AlarmCountByHour period={period} />
      </div>
    </div>
  );
};

export default AlarmDetails;
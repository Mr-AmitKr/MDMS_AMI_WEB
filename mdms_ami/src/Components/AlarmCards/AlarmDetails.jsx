import { useState } from "react";
import AlarmSummaryPie from "../AlarmCards/AlarmSummaryPie";
import AlarmDistributionPie from "../AlarmCards/AlarmDistributionPie";
import AlarmDetailsTable from "../AlarmCards/AlarmDetailsTable";
import AlarmCountByHour from "../AlarmCards/AlarmCountByHour";

const AlarmDetails = () => {
  const [timeFrame, setTimeFrame] = useState("Hourly");

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg">
          Alarm Details
        </h3>

        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="
            bg-[#2a2f3a]
            text-white
            text-sm
            rounded-md
            px-3
            py-2
            border
            border-[#3d4450]
          "
        >
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AlarmSummaryPie period={timeFrame} />
        <AlarmDistributionPie period={timeFrame} />
      </div>

      <AlarmDetailsTable timeFrame={timeFrame} />

      <AlarmCountByHour period={timeFrame} />
    </div>
  );
};

export default AlarmDetails;
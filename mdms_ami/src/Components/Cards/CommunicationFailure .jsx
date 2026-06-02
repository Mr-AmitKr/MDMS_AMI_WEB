import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Dec",
    communicationFailure: 0,
    smartMeterFailure: 0,
  },
  {
    month: "Jan",
    communicationFailure: 0,
    smartMeterFailure: 0,
  },
  {
    month: "Feb",
    communicationFailure: 63,
    smartMeterFailure: 0,
  },
  {
    month: "Mar",
    communicationFailure: 0,
    smartMeterFailure: 0,
  },
  {
    month: "Apr",
    communicationFailure: 0,
    smartMeterFailure: 2,
  },
  {
    month: "May",
    communicationFailure: 0,
    smartMeterFailure: 0,
  },
];

const CommunicationFailure = () => {
  return (
    <div className="rounded-lg p-4 bg-[#151921]">
      
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 8,
              right: 12,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="#2a2f3a"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#ffffff", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 80]}
              ticks={[0, 40, 80]}
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#151921",
                border: "1px solid #2a2f3a",
                borderRadius: "10px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="communicationFailure"
              name="Communication module failure"
              stroke="#4db6ac"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#4db6ac",
              }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="smartMeterFailure"
              name="Smart Meter failure"
              stroke="#00e676"
              strokeWidth={2}
              dot={{
                r: 3,
                fill: "#00e676",
              }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs text-white">

        <span className="flex items-center gap-1.5">
          <span
            className="w-5 h-0.5 relative"
            style={{ backgroundColor: "#4db6ac" }}
          >
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: "#4db6ac" }}
            />
          </span>
          Communication module failure
        </span>

        <span className="flex items-center gap-1.5">
          <span
            className="w-5 h-0.5 relative"
            style={{ backgroundColor: "#00e676" }}
          >
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
              style={{ backgroundColor: "#00e676" }}
            />
          </span>
          Smart Meter failure
        </span>

      </div>
    </div>
  );
};

export default CommunicationFailure;
'use client'

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const LastMonthCharts = () => {
    
    const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="min-w-[180px] rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-md shadow-2xl px-4 py-3">
      <div className="flex items-center justify-between mb-8">
        <span className="text-slate-400 text-xs font-medium">
          Weeks
        </span>

        <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-semibold">
          ACTIVE
        </span>
      </div>

      <h3 className="text-white text-lg font-bold">
        {label}
      </h3>

      <div className="h-px bg-slate-700 my-2" />

      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-sm">
          Consumption
        </span>

        <span className="text-green-400 text-xl font-bold">
          {payload[0].value} kWh
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-500" />
        <span className="text-slate-500 text-xs">
          Weekly Energy Usage
        </span>
      </div>
    </div>
  );
};

  const chartDetails = [
    { weeks: "W15", Week: 12.412 },
    { weeks: "W16", Week: 14.856 },
    { weeks: "W17", Week: 18.412 },
    { weeks: "W18", Week: 13.485 },
    { weeks: "W19", Week: 8.412 },
  
  ];

  return (
    <div className="w-full h-[140px] mt-[-130px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartDetails}>
          <XAxis
            dataKey="weeks"
            tick={{ fontSize: 14, fontWeight: 700,fill: 'white'  }}
            axisLine={{stroke: "#6b7280",
            strokeWidth: 2,}}
            tickLine={false}
          />

          <YAxis hide />

          <Tooltip
          content={<CustomTooltip />}   />

          <Bar
            dataKey="Week"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LastMonthCharts

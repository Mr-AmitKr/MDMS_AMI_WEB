'use client'

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const LastWeekCharts = () => {

     const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="min-w-[180px]  mt-[-40px] rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-md shadow-2xl px-4 py-3">
      <div className="flex items-center justify-between mb-8">
        <span className="text-slate-400 text-xs font-medium">
          Daily
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
          Daily Energy Usage
        </span>
      </div>
    </div>
  );
};


  const chartDetails = [
    { daysTaken: "Wed", Days: 12.412 },
    { daysTaken: "Thur", Days: 14.856 },
    { daysTaken: "Fri", Days: 18.412 },
    { daysTaken: "Sat", Days: 13.485 },
    { daysTaken: "Sun", Days: 8.412 },
    { daysTaken: "Mon", Days: 20.48 },
    { daysTaken: "Tue", Days: 2.412 }
  ];

  return (
    <div className="w-60 h-[140px] mt-[-130px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartDetails}>
          <XAxis
            dataKey="daysTaken"
            tick={{ fontSize: 14, fontWeight: 700,fill: 'white'  }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis hide />

         <Tooltip
          content={<CustomTooltip />}   />
          

          <Bar
            dataKey="Days"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LastWeekCharts;
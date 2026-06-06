import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AlarmCountByHour = ({ period }) => {
  const chartData = {
    Hourly: [
      { label: "13", count: 4 },
      { label: "11", count: 6 },
      { label: "10", count: 2 },
      { label: "9", count: 2 },
      { label: "8", count: 2 },
    ],

    Daily: [
      { label: "Mon", count: 12 },
      { label: "Tue", count: 8 },
    ],

    Weekly: [
      { label: "Week 21", count: 25 },
    ],

    Monthly: [
      { label: "May", count: 85 },
    ],

    Yearly: [

      { label: "2026", count: 450 },
    ],
  };

  const data = chartData[period] || chartData.Hourly;

  return (
    <div className="bg-[#2d303a] rounded-xl p-4 h-full">
      <h4 className="text-white text-sm font-medium mb-4">
        Alarm Count By {period}
      </h4>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          key={period}
        >
          <defs>
            <linearGradient
              id="colorCount"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#a855f7"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#a855f7"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2a2f3a"
          />

          <XAxis
            dataKey="label"
            tick={{
              fill: "#9ca3af",
              fontSize: 11,
            }}
          />

          <YAxis
            tick={{
              fill: "#9ca3af",
              fontSize: 11,
            }}
          />

          <Tooltip
            contentStyle={{
              background: "#111827",
              border: "none",
              borderRadius: "12px",
            }}
          />

          <Area
            type="monotone"
            dataKey="count"
            stroke="#a855f7"
            fill="url(#colorCount)"
            strokeWidth={3}
            isAnimationActive={true}
            animationDuration={700}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AlarmCountByHour;
import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Dec",
    posActEnrg: 14800,
    posReactEnrg: 5900,
    losses: 9,
  },
  {
    month: "Jan",
    posActEnrg: 0,
    posReactEnrg: 0,
    losses: 0,
  },
  {
    month: "Feb",
    posActEnrg: 0,
    posReactEnrg: 0,
    losses: 0,
  },
  {
    month: "Mar",
    posActEnrg: 0,
    posReactEnrg: 0,
    losses: 0,
  },
  {
    month: "Apr",
    posActEnrg: 0,
    posReactEnrg: 0,
    losses: 0,
  },
  {
    month: "May",
    posActEnrg: 0,
    posReactEnrg: 0,
    losses: 0,
  },
];

const LossesMonthlyWise = () => {
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 10,
            right: 40,
            left: 10,
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
            yAxisId="left"
            tick={{ fill: "#2b65f5", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 16000]}
            ticks={[0, 8000, 16000]}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#00e676", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 10]}
            ticks={[0, 5, 10]}
            unit="%"
          />

          <Tooltip
            contentStyle={{
              background: "#151921",
              border: "1px solid #2a2f3a",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Bar
            yAxisId="left"
            dataKey="posActEnrg"
            fill="#2b65f5"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />

          <Bar
            yAxisId="left"
            dataKey="posReactEnrg"
            fill="#22d3ee"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />

          <Line
            yAxisId="right"
            dataKey="losses"
            stroke="#00e676"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "#00e676",
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default LossesMonthlyWise;
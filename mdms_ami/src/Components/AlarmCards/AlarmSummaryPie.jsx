import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const chartData = {
  Hourly: [
    {
      name: "No Communication",
      value: 66.7,
      color: "#f6993f",
    },
    {
      name: "Alarms",
      value: 33.3,
      color: "#e3342f",
    },
    {
      name: "All OK",
      value: 0,
      color: "#38c172",
    },
  ],

  Daily: [
    {
      name: "No Communication",
      value: 40,
      color: "#f6993f",
    },
    {
      name: "Alarms",
      value: 45,
      color: "#e3342f",
    },
    {
      name: "All OK",
      value: 15,
      color: "#38c172",
    },
  ],

  Weekly: [
    {
      name: "No Communication",
      value: 25,
      color: "#f6993f",
    },
    {
      name: "Alarms",
      value: 55,
      color: "#e3342f",
    },
    {
      name: "All OK",
      value: 20,
      color: "#38c172",
    },
  ],

  Monthly: [
    {
      name: "No Communication",
      value: 30,
      color: "#f6993f",
    },
    {
      name: "Alarms",
      value: 30,
      color: "#e3342f",
    },
    {
      name: "All OK",
      value: 40,
      color: "#38c172",
    },
  ],

  Yearly: [
    {
      name: "No Communication",
      value: 15,
      color: "#f6993f",
    },
    {
      name: "Alarms",
      value: 35,
      color: "#e3342f",
    },
    {
      name: "All OK",
      value: 50,
      color: "#38c172",
    },
  ],
};

const AlarmSummaryPie = ({ period = "Hourly" }) => {
  const data = chartData[period] || chartData.Hourly;

  return (
    <div className="bg-[#2d303a] rounded-lg p-4">
      <h4 className="text-white text-sm mb-3">
        Alarm Summary ({period})
      </h4>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={72}
            isAnimationActive={true}
            animationDuration={800}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
            labelLine
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.color}
                stroke="#1a1d21"
                strokeWidth={2}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: "#1e2433",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-white">
        {data.map((item) => (
          <span
            key={item.name}
            className="flex items-center gap-2"
          >
            <span
              className="w-3 h-3 rounded-sm"
              style={{
                backgroundColor: item.color,
              }}
            />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AlarmSummaryPie;
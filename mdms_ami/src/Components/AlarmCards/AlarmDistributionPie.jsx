import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const distributionData = {
  Hourly: [
    {
      name: "Meter Failure",
      value: 50,
      color: "#6574cd",
    },
    {
      name: "Meter Bypass Detection",
      value: 50,
      color: "#3490dc",
    },
  ],

  Daily: [
    {
      name: "Meter Failure",
      value: 70,
      color: "#6574cd",
    },
    {
      name: "Meter Bypass Detection",
      value: 30,
      color: "#3490dc",
    },
  ],

  Weekly: [
    {
      name: "Meter Failure",
      value: 40,
      color: "#6574cd",
    },
    {
      name: "Meter Bypass Detection",
      value: 60,
      color: "#3490dc",
    },
  ],

  Monthly: [
    {
      name: "Meter Failure",
      value: 25,
      color: "#6574cd",
    },
    {
      name: "Meter Bypass Detection",
      value: 75,
      color: "#3490dc",
    },
  ],

  Yearly: [
    {
      name: "Meter Failure",
      value: 80,
      color: "#6574cd",
    },
    {
      name: "Meter Bypass Detection",
      value: 20,
      color: "#3490dc",
    },
  ],
};

const AlarmDistributionPie = ({ period = "Hourly" }) => {
  const data = distributionData[period] || distributionData.Hourly;

  return (
    <div className="bg-[#2d303a] rounded-lg p-4">
      <h4 className="text-white text-sm mb-3">
        Alarm Distribution ({period})
      </h4>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={70}
            isAnimationActive={true}
            animationDuration={800}
            animationBegin={0}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.color}
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

export default AlarmDistributionPie;
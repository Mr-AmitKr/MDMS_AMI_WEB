

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AlarmCountByHour = () => {
    const data = [
  { hour: "13", count: 2 },
  { hour: "11", count: 2 },
  { hour: "10", count: 2 },
  { hour: "9", count: 2 },
  { hour: "8", count: 2 },
];
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
  <AreaChart data={data}>
    
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
      dataKey="hour"
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
    />
  </AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default AlarmCountByHour

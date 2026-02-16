"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", usage: 45 },
  { day: "Tue", usage: 52 },
  { day: "Wed", usage: 68 },
  { day: "Thu", usage: 84 },
  { day: "Fri", usage: 95 }, // Current
  { day: "Sat", usage: 110 }, // Predicted
  { day: "Sun", usage: 125 }, // Predicted
];

export function PredictionChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis
            dataKey="day"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}GB`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "#171717", border: "1px solid #333" }}
            itemStyle={{ color: "#ededed" }}
          />
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#D4AF37"
            strokeWidth={2}
            dot={{ r: 4, fill: "#D4AF37" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

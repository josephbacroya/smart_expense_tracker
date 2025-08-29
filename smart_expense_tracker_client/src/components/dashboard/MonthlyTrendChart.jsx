import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Card from "../ui/Card";

const data = [
  { month: "Jan", expenses: 400 },
  { month: "Feb", expenses: 300 },
  { month: "Mar", expenses: 500 },
  { month: "Apr", expenses: 450 },
  { month: "May", expenses: 600 }
];

export default function MonthlyTrendChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Monthly Expense Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="expenses" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Card from "../ui/Card";
import { categories, categoryColors } from "../../utils/categories";

const data = [
  { name: "food", value: 400 },
  { name: "transport", value: 300 },
  { name: "entertainment", value: 300 },
  { name: "shopping", value: 200 }
];

export default function CategoryPieChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Expenses by Category</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={categoryColors[entry.name] || "#ccc"}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}

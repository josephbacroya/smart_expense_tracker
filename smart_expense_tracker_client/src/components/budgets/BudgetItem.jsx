import React from "react";
import Card from "../ui/Card";
import { categoryColors } from "../../utils/categories";

export default function BudgetItem({ budget }) {
  const percentage = Math.min((budget.spent / budget.limit) * 100, 100);

  return (
    <Card>
      <div className="flex justify-between mb-2">
        <p className="font-medium capitalize">{budget.category}</p>
        <p className="text-sm text-gray-600">
          ${budget.spent} / ${budget.limit}
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="h-3 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: categoryColors[budget.category] || "#6366F1"
          }}
        />
      </div>
    </Card>
  );
}

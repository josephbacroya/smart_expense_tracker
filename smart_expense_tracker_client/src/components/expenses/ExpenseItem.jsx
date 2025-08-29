import React from "react";
import Card from "../ui/Card";
import { categoryColors } from "../../utils/categories";

export default function ExpenseItem({ expense }) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="font-medium">{expense.title}</p>
        <p className="text-sm text-gray-500">
          {expense.category} • {expense.date}
        </p>
      </div>
      <span
        className="font-bold px-3 py-1 rounded"
        style={{ backgroundColor: categoryColors[expense.category] || "#eee" }}
      >
        ${expense.amount.toFixed(2)}
      </span>
    </Card>
  );
}

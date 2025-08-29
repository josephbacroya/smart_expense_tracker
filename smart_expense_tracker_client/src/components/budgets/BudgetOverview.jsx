import React from "react";
import BudgetItem from "./BudgetItem";

export default function BudgetList({ budgets }) {
  if (!budgets.length) {
    return <p className="text-gray-500">No budgets set yet.</p>;
  }

  return (
    <div className="space-y-4">
      {budgets.map((budget) => (
        <BudgetItem key={budget.id} budget={budget} />
      ))}
    </div>
  );
}

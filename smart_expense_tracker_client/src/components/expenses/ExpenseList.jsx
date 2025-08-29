import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  if (!expenses.length) {
    return <p className="text-gray-500">No expenses recorded yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

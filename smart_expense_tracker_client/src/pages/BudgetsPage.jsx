import React, { useState } from "react";
import Container from "../components/layout/Container";
import BudgetList from "../components/budgets/BudgetList";

export default function BudgetsPage() {
  const [budgets] = useState([
    { id: 1, category: "food", limit: 500, spent: 320 },
    { id: 2, category: "transport", limit: 200, spent: 150 },
    { id: 3, category: "entertainment", limit: 300, spent: 260 },
    { id: 4, category: "shopping", limit: 400, spent: 100 }
  ]);

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6">Budgets</h2>
      <BudgetList budgets={budgets} />
    </Container>
  );
}

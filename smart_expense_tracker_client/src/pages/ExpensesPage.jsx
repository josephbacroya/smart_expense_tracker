import React, { useState } from "react";
import Container from "../components/layout/Container";
import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";
import Modal from "../components/ui/Modal";
import { Plus } from "lucide-react";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Groceries", category: "food", amount: 50, date: "2025-08-15" },
    { id: 2, title: "Uber", category: "transport", amount: 20, date: "2025-08-18" }
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const addExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      { id: Date.now(), ...expense }
    ]);
  };

  return (
    <Container>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Expenses</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          <Plus className="w-5 h-5" />
          <span>Add Expense</span>
        </button>
      </div>

      <ExpenseList expenses={expenses} />

      <Modal visible={modalOpen} onClose={() => setModalOpen(false)}>
        <ExpenseForm
          onSubmit={(expense) => {
            addExpense(expense);
            setModalOpen(false);
          }}
        />
      </Modal>
    </Container>
  );
}

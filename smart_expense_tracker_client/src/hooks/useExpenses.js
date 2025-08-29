import useLocalStorage from "./useLocalStorage";

export default function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { id: Date.now(), ...expense }]);
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const clearExpenses = () => setExpenses([]);

  return { expenses, addExpense, removeExpense, clearExpenses };
}

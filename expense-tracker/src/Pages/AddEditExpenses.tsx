import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../context/ExpensesContext";
import type { Expense } from "../TEMPtypes";

export default function AddEditExpense() {
  const { addExpense } = useExpenses();
  const nav = useNavigate();

  function handleSave(expense: Expense) {
    addExpense(expense);
    nav("/expenses");
  }

  return (
    <section className="rounded-xl border p-4">
      <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
      <ExpenseForm onSave={handleSave} />
    </section>
  );
}

import { useNavigate, useParams } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../context/ExpensesContext";
import type { Expense } from "../types";

export default function EditExpense() {
  const { id } = useParams();
  const nav = useNavigate();
  const { getById, updateExpense } = useExpenses();

  const current = id ? getById(id) : undefined;

  function handleSave(expense: Expense) {
    updateExpense(expense);
    nav("/expenses");
  }

  if (!current) {
    return <div className="p-4 text-sm text-red-600">Expense not found.</div>;
  }

  return (
    <section className="rounded-xl border p-4">
      <h2 className="text-lg font-semibold mb-4">Edit Expense</h2>
      <ExpenseForm onSave={handleSave} initialData={current} />
    </section>
  );
}

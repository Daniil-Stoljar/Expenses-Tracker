import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import type { Expense } from "../TEMPtypes";

export default function AddEditExpense() {
  const navigate = useNavigate();

  function handleSave(expense: Expense) {
    // In real app → save to supabase
    console.log("Saved expense:", expense);

    // Redirect back to /expenses
    navigate("/expenses");
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
      <ExpenseForm onSave={handleSave} />
    </section>
  );
}

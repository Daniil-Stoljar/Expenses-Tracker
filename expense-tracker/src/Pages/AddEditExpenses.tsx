import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import type { Expense } from "../types";
import { supabase } from "../lib/supabaseClient";

export default function AddEditExpense() {
  const navigate = useNavigate();

  async function handleSave(expense: Expense) {
    const { error } = await supabase.from("expenses").insert([
      {
        date: expense.date,
        category: expense.category,
        description: expense.description,
        amount: expense.amount,
        user_id: null,
      },
    ]);

    if (error) {
      console.error("❌ Insert failed:", error.message);
    } else {
      console.log("✅ Expense added:", expense);
      navigate("/expenses");
    }
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
      <ExpenseForm onSave={handleSave} />
    </section>
  );
}

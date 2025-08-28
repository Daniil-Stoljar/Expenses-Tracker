import ExpenseForm from "../components/ExpenseForm";

export default function AddEditExpense() {
  const handleSave = (expense: any) => {
    console.log("Saved expense:", expense);
    // for later: insert/update expense in Supabase
  };

  return (
    <section className="rounded-xl border p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      <ExpenseForm onSave={handleSave} />
    </section>
  );
}

import { Link } from "react-router-dom";
import { useExpenses } from "../context/ExpensesContext";

export default function ExpensesPage() {
  const { expenses, deleteExpense } = useExpenses();

  return (
    <section className="rounded-xl border p-4">
      <div className="mb-4 flex items-center gap-3">
        <select className="border rounded-md px-3 py-2 text-sm">
          <option>All Categories</option>
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Utilities</option>
          <option>Health</option>
          <option>Other</option>
        </select>
        <input type="month" className="border rounded-md px-3 py-2 text-sm" />
      </div>

      {expenses.length === 0 ? (
        <div className="p-6 text-sm text-zinc-500">
          No expenses yet. Add one?
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-500 border-b">
              <th className="py-2">Date</th>
              <th>Category</th>
              <th>Description</th>
              <th className="text-right">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id} className="border-b">
                <td className="py-2">{exp.date}</td>
                <td>{exp.category}</td>
                <td>{exp.description || "-"}</td>
                <td className="text-right">€ {exp.amount.toFixed(2)}</td>
                <td className="text-right">
                  <Link
                    to={`/expenses/${exp.id}/edit`}
                    className="text-sky-600 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-600"
                    onClick={() => deleteExpense(exp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Expense } from "../types";
import { Link } from "react-router-dom";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpenses() {
      setLoading(true);
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .order("date", { ascending: false });
      if (error) {
        console.error("❌ Error fetching expenses:", error.message);
      } else {
        setExpenses(data as Expense[]);
      }
      setLoading(false);
    }

    fetchExpenses();
  }, []);

  async function handleDelete(id: string) {
    const { error } = await supabase.from("expenses").delete().eq("id", id);
    if (error) {
      console.error("❌ Delete failed:", error.message);
    } else {
      setExpenses(expenses.filter((e) => e.id !== id));
    }
  }

  return (
    <section className="rounded-xl border p-4">
      <div className="mb-4 flex items-center gap-3">
        <select className="border rounded-md px-3 py-2 text-sm">
          <option>All Categories</option>
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
        </select>
        <input type="month" className="border rounded-md px-3 py-2 text-sm" />
      </div>

      {loading ? (
        <p>Loading...</p>
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
                <td>{exp.description}</td>
                <td className="text-right">€ {exp.amount}</td>
                <td className="text-right">
                  <Link
                    to={`/expenses/${exp.id}/edit`}
                    className="text-sky-600 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(exp.id)}
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

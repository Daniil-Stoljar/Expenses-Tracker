import { useState, useEffect } from "react";
import type { Expense } from "../TEMPtypes";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    setExpenses([
      {
        id: "1",
        date: "2025-08-10",
        category: "Food",
        description: "Groceries",
        amount: 45,
      },
      {
        id: "2",
        date: "2025-08-09",
        category: "Travel",
        description: "Bus ticket",
        amount: 5,
      },
    ]);
  }, []);

  function handleDelete(id: string) {
    setExpenses(expenses.filter((e) => e.id !== id));
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
                <button className="text-sky-600 mr-2">Edit</button>
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
    </section>
  );
}

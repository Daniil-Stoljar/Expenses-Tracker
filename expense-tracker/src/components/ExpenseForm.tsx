import { useState, useEffect } from "react";
import type { Expense } from "../TEMPtypes";

interface Props {
  onSave: (expense: Expense) => void;
  initialData?: Expense; // 👈 new prop
}

export default function ExpenseForm({ onSave, initialData }: Props) {
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    category: "Food",
    description: "",
    amount: 0,
  });

  // 👇 if editing, preload data
  useEffect(() => {
    if (initialData) {
      setForm({
        date: initialData.date,
        category: initialData.category,
        description: initialData.description,
        amount: initialData.amount,
      });
    }
  }, [initialData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newExpense: Expense = {
      id: initialData?.id || crypto.randomUUID(), // 👈 keep same ID if editing
      ...form,
      amount: Number(form.amount),
    };
    onSave(newExpense);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border p-4 space-y-4">
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 text-sm w-full"
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 text-sm w-full"
      >
        <option>Food</option>
        <option>Rent</option>
        <option>Travel</option>
      </select>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 text-sm w-full"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 text-sm w-full"
      />
      <button className="bg-sky-600 text-white px-4 py-2 rounded-md">
        {initialData ? "Update" : "Save"}
      </button>
    </form>
  );
}

import { useEffect, useState } from "react";
import type { Expense } from "../TEMPtypes";

type Props = {
  onSave: (expense: Expense) => void;
  initialData?: Expense;
};

const generateId = () =>
  typeof crypto !== "undefined" && (crypto as any).randomUUID
    ? (crypto as any).randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export default function ExpenseForm({ onSave, initialData }: Props) {
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    category: "Food",
    description: "",
    amount: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        date: initialData.date,
        category: initialData.category,
        description: initialData.description,
        amount: String(initialData.amount),
      });
    }
  }, [initialData]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const expense: Expense = {
      id: initialData?.id ?? generateId(),
      date: form.date,
      category: form.category,
      description: form.description,
      amount: Number.parseFloat(form.amount || "0"),
    };
    onSave(expense);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border p-4 space-y-4 max-w-lg"
    >
      <div className="grid gap-1">
        <label className="text-sm text-zinc-600">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          className="border rounded-md px-3 py-2 text-sm"
          required
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm text-zinc-600">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={onChange}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Utilities</option>
          <option>Health</option>
          <option>Other</option>
        </select>
      </div>

      <div className="grid gap-1">
        <label className="text-sm text-zinc-600">Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Optional notes"
          className="border rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm text-zinc-600">Amount (€)</label>
        <input
          type="number"
          name="amount"
          inputMode="decimal"
          step="0.01"
          min="0"
          value={form.amount}
          onChange={onChange}
          className="border rounded-md px-3 py-2 text-sm"
          required
        />
      </div>

      <button className="bg-sky-600 text-white px-4 py-2 rounded-md">
        {initialData ? "Update" : "Save"}
      </button>
    </form>
  );
}

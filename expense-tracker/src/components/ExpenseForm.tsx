import { useState } from "react";

interface ExpenseFormProps {
  onSave: (expense: Expense) => void;
}

interface Expense {
  amount: number;
  category: string;
  description: string;
  date: string;
}

export default function ExpenseForm({ onSave }: ExpenseFormProps) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ amount: Number(amount), category, description, date });
    setAmount("");
    setCategory("Food");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="number"
        placeholder="Amount"
        className="border rounded-md px-3 py-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        className="border rounded-md px-3 py-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Rent</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>
      <input
        type="date"
        className="border rounded-md px-3 py-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="border rounded-md px-3 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700"
      >
        Save Expense
      </button>
    </form>
  );
}

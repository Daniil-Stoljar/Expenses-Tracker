export default function AddEditExpense() {
  return (
    <form className="rounded-xl border p-4 grid gap-3 max-w-md">
      <div>
        <label className="block text-xs text-zinc-500 mb-1">Amount</label>
        <input
          type="number"
          placeholder="e.g., 42.50"
          className="w-full border rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-xs text-zinc-500 mb-1">Category</label>
        <select className="w-full border rounded-md px-3 py-2">
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Utilities</option>
          <option>Health</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs text-zinc-500 mb-1">Date</label>
        <input type="date" className="w-full border rounded-md px-3 py-2" />
      </div>
      <div>
        <label className="block text-xs text-zinc-500 mb-1">Description</label>
        <input type="text" className="w-full border rounded-md px-3 py-2" />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-md px-4 py-2"
        >
          Save
        </button>
        <button type="button" className="border rounded-md px-4 py-2">
          Cancel
        </button>
      </div>
    </form>
  );
}

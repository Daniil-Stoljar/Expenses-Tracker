import { useState, useEffect } from "react";
import type { Expense } from "../TEMPtypes";

export default function ExpensesPage() {
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
          <tr className="border-b">
            <td className="py-2">2025-08-10</td>
            <td>Food</td>
            <td>Groceries</td>
            <td className="text-right">€ 45</td>
            <td className="text-right">
              <button className="text-sky-600">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

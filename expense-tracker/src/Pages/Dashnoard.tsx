import { CategoryPieChart, MonthlyBarChart } from "../components/ExpenseCharts";
import { categoryData, monthlyData } from "../TEMPmockData";

export default function Dashboard() {
  return (
    <section className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border p-4">
          <div className="text-sm text-zinc-500">Total Spent</div>
          <div className="text-2xl font-semibold">€ 1,230</div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="text-sm text-zinc-500">Biggest Category</div>
          <div className="text-2xl font-semibold">Food — € 450</div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="text-sm text-zinc-500">This Month</div>
          <div className="text-2xl font-semibold">€ 300</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border p-4 h-72">
          <h3 className="text-sm font-medium mb-2">By Category</h3>
          <CategoryPieChart data={categoryData} />
        </div>
        <div className="rounded-xl border p-4 h-72">
          <h3 className="text-sm font-medium mb-2">Monthly Spending</h3>
          <MonthlyBarChart data={monthlyData} />
        </div>
      </div>

      <div className="rounded-xl border p-4">
        <div className="text-sm font-medium mb-2">Recent Expenses</div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-500 border-b">
              <th className="py-2">Date</th>
              <th>Category</th>
              <th>Description</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">2025-08-10</td>
              <td>Food</td>
              <td>Groceries</td>
              <td className="text-right">€ 45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

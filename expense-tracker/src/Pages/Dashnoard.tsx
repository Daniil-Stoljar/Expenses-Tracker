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
        <div className="rounded-xl border p-4 h-72 grid place-items-center text-zinc-500">
          Pie Chart (coming next)
        </div>
        <div className="rounded-xl border p-4 h-72 grid place-items-center text-zinc-500">
          Bar Chart (coming next)
        </div>
      </div>
      <div className="rounded-xl border p-4">
        <div className="text-sm font-medium mb-2">Recent Expenses</div>
        <div className="text-sm text-zinc-500">Mock table here</div>
      </div>
    </section>
  );
}

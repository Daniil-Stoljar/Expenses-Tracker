import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-10">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
          <span className="font-semibold">💰 Expense Tracker</span>

          <NavLink
            to="/"
            className="text-sm text-zinc-600 data-[active]:text-black"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/expenses"
            className="text-sm text-zinc-600 data-[active]:text-black"
          >
            Expenses
          </NavLink>

          <NavLink
            to="/expenses/new"
            className="text-sm text-zinc-600 data-[active]:text-black"
          >
            Add Expense
          </NavLink>

          <span className="ms-auto">
            <NavLink
              to="/auth"
              className="text-sm text-zinc-600 data-[active]:text-black"
            >
              Login
            </NavLink>
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-4">
        <Outlet />
      </main>
    </div>
  );
}

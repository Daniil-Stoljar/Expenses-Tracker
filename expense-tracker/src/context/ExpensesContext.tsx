import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Expense } from "../TEMPtypes";

type Ctx = {
  expenses: Expense[];
  addExpense: (e: Expense) => void;
  updateExpense: (e: Expense) => void;
  deleteExpense: (id: string) => void;
  getById: (id: string) => Expense | undefined;
};

const ExpensesCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "expenses:v1";

const seed: Expense[] = [
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
  {
    id: "3",
    date: "2025-08-08",
    category: "Rent",
    description: "August rent",
    amount: 700,
  },
];

export function ExpensesProvider({ children }: { children: React.ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Expense[]) : seed;
    } catch {
      return seed;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(e: Expense) {
    setExpenses((prev) => [e, ...prev]);
  }

  function updateExpense(e: Expense) {
    setExpenses((prev) => prev.map((x) => (x.id === e.id ? e : x)));
  }

  function deleteExpense(id: string) {
    setExpenses((prev) => prev.filter((x) => x.id !== id));
  }

  const getById = (id: string) => expenses.find((e) => e.id === id);

  const value = useMemo(
    () => ({ expenses, addExpense, updateExpense, deleteExpense, getById }),
    [expenses]
  );

  return <ExpensesCtx.Provider value={value}>{children}</ExpensesCtx.Provider>;
}

export function useExpenses() {
  const ctx = useContext(ExpensesCtx);
  if (!ctx)
    throw new Error("useExpenses must be used within <ExpensesProvider>");
  return ctx;
}

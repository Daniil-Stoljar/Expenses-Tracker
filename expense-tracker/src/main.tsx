import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Pages/Dashnoard";
import ExpensesPage from "./Pages/ExpensesPage";
import AddEditExpense from "./Pages/AddEditExpenses";
import EditExpense from "./Pages/EditExpense";
import AuthForm from "./Pages/AuthForm";
import { ExpensesProvider } from "./context/ExpensesContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "expenses", element: <ExpensesPage /> },
      { path: "expenses/new", element: <AddEditExpense /> },
      { path: "expenses/:id/edit", element: <EditExpense /> },
      { path: "auth", element: <AuthForm /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExpensesProvider>
      <RouterProvider router={router} />
    </ExpensesProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Pages/Dashnoard";
import ExpensesPage from "./Pages/ExpensesPage";
import AddEditExpense from "./Pages/AddEditExpenses";
import AuthForm from "./Pages/AuthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "expenses", element: <ExpensesPage /> },
      { path: "expenses/new", element: <AddEditExpense /> },
      { path: "auth", element: <AuthForm /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

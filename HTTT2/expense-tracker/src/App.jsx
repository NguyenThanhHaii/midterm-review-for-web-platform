import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const categories = [
  "Food",
  "Transport",
  "Entertainment",
  "Utilities",
  "Others",
];

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");

  const addExpense = (expense) => {
    setExpenses([
      ...expenses,
      {
        ...expense,
        id: Date.now(),
        date: new Date(expense.date).toLocaleDateString(),
      },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filterCategory);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Expense Tracker</h1>
      <ExpenseForm categories={categories} onAddExpense={addExpense} />
      <ExpenseFilter
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        expenses={filteredExpenses}
      />
      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;

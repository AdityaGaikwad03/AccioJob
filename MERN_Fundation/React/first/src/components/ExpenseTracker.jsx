/* ## **Assignment 10 — Expense Tracker (Basic Version)**

**Task:**

Build a small app:

### UI:

- Input 1: Expense title
- Input 2: Expense amount
- Button: Add Expense
- Show a list of expenses
- Show **Total amount**

**Example Output:**

| Title | Amount |
| --- | --- |
| Tea | 20 |
| Breakfast | 30 |

**Total = 50** */
import { useState } from "react";

export default function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
    e.preventDefault();   // prevent form refresh

    if (title.trim() === "" || amount.trim() === "") return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setTitle("");
    setAmount("");
  };

  return (
    <>
      <h2>Assignment 10: Expense Tracker</h2>

      <form onSubmit={addExpense}>
        <input
          type="text"
          value={title}
          placeholder="Enter expense title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses:</h3>

      {expenses.length === 0 && <p>No expenses added yet.</p>}

      {expenses.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>
        Total ={" "}
        {expenses.reduce((total, expense) => total + expense.amount, 0)}
      </h3>
    </>
  );
}

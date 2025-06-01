function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Expense List</h5>
        {expenses.length === 0 ? (
          <p>No expenses recorded.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.name}</td>
                    <td>${parseFloat(expense.amount).toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDeleteExpense(expense.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;

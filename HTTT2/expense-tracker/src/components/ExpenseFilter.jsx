function ExpenseFilter({
  categories,
  filterCategory,
  setFilterCategory,
  expenses,
}) {
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="filterCategory" className="form-label">
            Filter by Category
          </label>
          <select
            id="filterCategory"
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 d-flex align-items-end">
          <h5>Total Spent: ${totalAmount.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}

export default ExpenseFilter;

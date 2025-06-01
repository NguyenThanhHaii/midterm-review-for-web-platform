import { useForm } from "react-hook-form";

function ExpenseForm({ categories, onAddExpense }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAddExpense(data);
    reset();
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Add New Expense</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Expense Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              {...register("name", {
                required: "Expense name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className={`form-control ${errors.amount ? "is-invalid" : ""}`}
              id="amount"
              step="0.01"
              {...register("amount", {
                required: "Amount is required",
                min: { value: 0.01, message: "Amount must be greater than 0" },
              })}
            />
            {errors.amount && (
              <div className="invalid-feedback">{errors.amount.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className={`form-select ${errors.category ? "is-invalid" : ""}`}
              id="category"
              {...register("category", { required: "Category is required" })}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className={`form-control ${errors.date ? "is-invalid" : ""}`}
              id="date"
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && (
              <div className="invalid-feedback">{errors.date.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;

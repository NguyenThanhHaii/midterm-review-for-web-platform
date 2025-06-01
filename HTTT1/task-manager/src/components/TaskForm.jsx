import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ onAddTask }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Validation rules
  const validationRules = {
    taskName: {
      required: "Tên công việc là bắt buộc",
    },
    taskStatus: {
      required: "Vui lòng chọn trạng thái",
    },
  };

  const onSubmit = (data) => {
    const newTask = {
      id: uuidv4(),
      name: data.taskName,
      description: data.taskDescription,
      status: data.taskStatus,
      completed: false,
    };
    onAddTask(newTask);
    reset();
  };

  return (
    <div className="card mb-5">
      <div className="card-body">
        <h2 className="card-title">Thêm Công Việc Mới</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">
              Tên công việc
            </label>
            <input
              type="text"
              id="taskName"
              className={`form-control ${errors.taskName ? "is-invalid" : ""}`}
              {...register("taskName", validationRules.taskName)}
            />
            {errors.taskName && (
              <div className="invalid-feedback">{errors.taskName.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="taskDescription" className="form-label">
              Mô tả công việc
            </label>
            <textarea
              id="taskDescription"
              className="form-control"
              {...register("taskDescription")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taskStatus" className="form-label">
              Trạng thái
            </label>
            <select
              id="taskStatus"
              className={`form-select ${errors.taskStatus ? "is-invalid" : ""}`}
              {...register("taskStatus", validationRules.taskStatus)}
            >
              <option value="Chưa hoàn thành">Chưa hoàn thành</option>
              <option value="Đang thực hiện">Đang thực hiện</option>
              <option value="Hoàn thành">Hoàn thành</option>
            </select>
            {errors.taskStatus && (
              <div className="invalid-feedback">
                {errors.taskStatus.message}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Thêm Công Việc
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;

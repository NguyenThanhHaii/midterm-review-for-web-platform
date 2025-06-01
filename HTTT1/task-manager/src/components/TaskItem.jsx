function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? "bg-success bg-opacity-10" : ""
      }`}
    >
      <div>
        <h3
          className={`mb-1 ${
            task.completed ? "text-decoration-line-through" : ""
          }`}
        >
          {task.name}
        </h3>
        <p className="mb-1">{task.description || "Không có mô tả"}</p>
        <small className="text-muted">Trạng thái: {task.status}</small>
      </div>
      <div>
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`btn btn-sm ${
            task.completed ? "btn-warning" : "btn-success"
          } me-2`}
        >
          {task.completed ? "Hủy hoàn thành" : "Hoàn thành"}
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="btn btn-sm btn-danger"
        >
          Xóa
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

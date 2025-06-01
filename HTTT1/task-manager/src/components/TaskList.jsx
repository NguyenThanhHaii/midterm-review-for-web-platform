import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Danh Sách Công Việc</h2>
        {tasks.length === 0 ? (
          <p className="text-muted">Chưa có công việc nào</p>
        ) : (
          <ul className="list-group">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskList;

import "./TaskView.css";
import TaskList from "../TaskList/TaskList";

function TaskView({
  title,
  tasks,
  filter,
  // onToggleTask,
  onRemoveTask,
  onUpdate,
  onClearCompleted,
  onUpdateTaskStatus,
  children,
}) {
  const filteredTasks = tasks.filter((task) => task.status === filter);

  return (
    <div className="task-view">
      <h2>{title}</h2>

      {filter === "completed" &&
        tasks.some((task) => task.status === "completed") && (
          <button onClick={onClearCompleted}>Удалить выполненные</button>
        )}

      <TaskList
        tasks={filteredTasks}
        // onToggleTask={onToggleTask}
        onUpdateTaskStatus={onUpdateTaskStatus}
        onRemoveTask={onRemoveTask}
        editable={filter === "active"}
        emptyText={
          filter === "active"
            ? "На сегодня задач нет"
            : "Пока ничего не выполнено"
        }
        onUpdate={onUpdate}
      ></TaskList>

      {children}
    </div>
  );
}

export default TaskView;

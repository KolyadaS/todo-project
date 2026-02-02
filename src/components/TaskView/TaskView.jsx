import "./TaskView.css";
import TaskList from "../TaskList/TaskList";

function TaskView({
  title,
  tasks,
  filter,
  onToggleTask,
  onRemoveTask,
  onUpdate,
  onClearCompleted,
  children,
}) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="task-view">
      <h2>{title}</h2>

      {filter === "completed" && tasks.some((task) => task.completed) && (
        <button onClick={onClearCompleted}>Удалить выполненные</button>
      )}

      <TaskList
        tasks={filteredTasks}
        onToggleTask={onToggleTask}
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

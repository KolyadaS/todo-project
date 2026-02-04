import "./TaskView.css";
import TaskList from "../TaskList/TaskList";
import { TASK_STATUS } from "../../constants/taskStatus";

function TaskView({
  title,
  tasks,
  filter,
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

      {filter === TASK_STATUS.COMPLETED &&
        tasks.some((task) => task.status === TASK_STATUS.COMPLETED) && (
          <button onClick={onClearCompleted}>Удалить выполненные</button>
        )}

      <TaskList
        tasks={filteredTasks}
        active
        onUpdateTaskStatus={onUpdateTaskStatus}
        onRemoveTask={onRemoveTask}
        editable={filter === "today"}
        emptyText={
          filter === "today"
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

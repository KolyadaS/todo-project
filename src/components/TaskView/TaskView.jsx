import "./TaskView.css";
import TaskList from "../TaskList/TaskList";
import { TASK_STATUS } from "../../constants/taskStatus";

function TaskView({
  title,
  tasks,
  view,
  onRemoveTask,
  onUpdate,
  onClearCompleted,
  onUpdateTaskStatus,
  children,
}) {
  return (
    <div className="task-view">
      <h2>{title}</h2>

      {view === TASK_STATUS.COMPLETED && tasks.length > 0 && (
        <button onClick={onClearCompleted}>Удалить выполненные</button>
      )}

      <TaskList
        tasks={tasks}
        active
        onUpdateTaskStatus={onUpdateTaskStatus}
        onRemoveTask={onRemoveTask}
        editable={view === TASK_STATUS.TODAY}
        emptyText={
          view === TASK_STATUS.TODAY
            ? "На сегодня задач нет"
            : view === TASK_STATUS.COMPLETED
            ? "Пока ничего не выполнено"
            : "Задач нет"
        }
        onUpdate={onUpdate}
      ></TaskList>

      {children}
    </div>
  );
}

export default TaskView;

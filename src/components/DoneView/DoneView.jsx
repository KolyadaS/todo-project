import TaskList from "../TaskList/TaskList";
import "./DoneView.css";

function DoneView({
  tasks,
  onToggleTask,
  onRemoveTask,
  onClearCompleted,
  children,
}) {
  return (
    <div className="done-view">
      <h2>Сделано</h2>

      {tasks.length > 0 && (
        <button onClick={onClearCompleted}>Очистить выполненные</button>
      )}

      <TaskList
        tasks={tasks.filter((task) => task.completed)}
        onToggleTask={onToggleTask}
        onRemoveTask={onRemoveTask}
        emptyText="Пока ничего не выполнено"
      ></TaskList>

      {children}
    </div>
  );
}

export default DoneView;

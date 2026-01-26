import TaskList from "../TaskList/TaskList";
import "./TodayView.css";

function TodayView({ tasks, onToggleTask, onRemoveTask, children }) {
  return (
    <div className="today-view">
      <h2>Сегодня</h2>

      <TaskList
        tasks={tasks.filter((task) => !task.completed)}
        onToggleTask={onToggleTask}
        onRemoveTask={onRemoveTask}
        emptyText="На сегодня задач нет"
      ></TaskList>

      {children}
    </div>
  );
}

export default TodayView;

import TaskItem from "../TaskItem/TaskItem";
import "./TodayView.css";

function TodayView({ tasks, onToggleTask, onRemoveTask, children }) {
  return (
    <div className="today-view">
      <h2>Сегодня</h2>

      {tasks.map((task) => (
        <TaskItem
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
        ></TaskItem>
      ))}

      {children}
    </div>
  );
}

export default TodayView;

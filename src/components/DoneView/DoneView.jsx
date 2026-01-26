import TaskItem from "../TaskItem/TaskItem";
import "./DoneView.css";

function DoneView({ tasks, onToggleTask, onRemoveTask, children }) {
  return (
    <div className="done-view">
      <h2>Сделано</h2>

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

export default DoneView;

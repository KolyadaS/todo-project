import "./TaskItem.css";

function TaskItem({ task, onToggleTask, onRemoveTask }) {
  return (
    <div className="task-item" key={task.id}>
      <input
        id={`task-${task.id}`}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <label htmlFor={`task-${task.id}`}>{task.text}</label>
      <button onClick={() => onRemoveTask(task.id)}>Удалить</button>
    </div>
  );
}

export default TaskItem;

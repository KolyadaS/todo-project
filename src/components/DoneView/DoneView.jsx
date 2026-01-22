import "./DoneView.css";

function DoneView({ tasks, onToggleTask, onRemoveTask, children }) {
  return (
    <div className="done-view">
      <h2>Сделано</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <input
            id={`task-${task.id}`}
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <label htmlFor={`task-${task.id}`}>{task.text}</label>
          <button onClick={() => onRemoveTask(task.id)}>Удалить</button>
        </div>
      ))}

      {children}
    </div>
  );
}

export default DoneView;

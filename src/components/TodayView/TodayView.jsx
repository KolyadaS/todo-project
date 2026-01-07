import "./TodayView.css";

function TodayView({ tasks, onToggleTask, onRemoveTask, children }) {
  return (
    <div className="today-view">
      <h2>Сегодня</h2>

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

export default TodayView;

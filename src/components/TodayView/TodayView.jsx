import "./TodayView.css";

function TodayView({ tasks, children }) {
  return (
    <div className="today-view">
      <h2>Сегодня</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <input
            id={`task-${task.id}`}
            type="checkbox"
            checked={task.complited}
            onChange={() => onToggleTask(task.id)}
          />
          <label htmlFor={`task-${task.id}`}>{task.text}</label>
        </div>
      ))}

      {children}
    </div>
  );
}

export default TodayView;

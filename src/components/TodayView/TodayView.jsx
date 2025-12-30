import "./TodayView.css";

function TodayView({ tasks, children }) {
  return (
    <div className="today-view">
      <h2>Сегодня</h2>

      {tasks.map((task) => (
        <div key={task.id}>{task.text}</div>
      ))}

      {children}
    </div>
  );
}

export default TodayView;

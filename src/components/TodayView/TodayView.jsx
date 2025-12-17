import "./TodayView.css";

function TodayView({ children }) {
  return (
    <div className="today-view">
      <h2>Сегодня</h2>
      {children}
    </div>
  );
}

export default TodayView;

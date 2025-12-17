import "./NotTodayView.css";

function NotTodayView({ children }) {
  return (
    <div className="not-today-view">
      <h2>Не сегодня</h2>
      {children}
    </div>
  );
}

export default NotTodayView;

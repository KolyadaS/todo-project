import "./ViewSwitcher.css";

function ViewSwitcher({ currentView, onChange }) {
  return (
    <div className="view-switcher">
      <button
        onClick={() => onChange("today")}
        disabled={currentView === "today"}
      >
        Сегодня
      </button>
      <button
        onClick={() => onChange("later")}
        disabled={currentView === "later"}
      >
        Не сегодня
      </button>
      <button
        onClick={() => onChange("completed")}
        disabled={currentView === "completed"}
      >
        Готово
      </button>
    </div>
  );
}

export default ViewSwitcher;

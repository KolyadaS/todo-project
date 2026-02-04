import "./ViewSwitcher.css";
import { TASK_STATUS } from "../../constants/taskStatus";

function ViewSwitcher({ currentView, onChange }) {
  return (
    <div className="view-switcher">
      <button
        onClick={() => onChange(TASK_STATUS.TODAY)}
        disabled={currentView === TASK_STATUS.TODAY}
      >
        Сегодня
      </button>
      <button
        onClick={() => onChange(TASK_STATUS.LATER)}
        disabled={currentView === TASK_STATUS.LATER}
      >
        Не сегодня
      </button>
      <button
        onClick={() => onChange(TASK_STATUS.COMPLETED)}
        disabled={currentView === TASK_STATUS.COMPLETED}
      >
        Готово
      </button>
    </div>
  );
}

export default ViewSwitcher;

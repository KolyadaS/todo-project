import "./ViewSwitcher.css";
import { TASK_STATUS } from "../../constants/taskStatus";
import Button from "../Button/Button";

function ViewSwitcher({ currentView, onChange }) {
  return (
    <div className="view-switcher">
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.TODAY)}
        disabled={currentView === TASK_STATUS.TODAY}
      >
        Сегодня
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.LATER)}
        disabled={currentView === TASK_STATUS.LATER}
      >
        Не сегодня
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.COMPLETED)}
        disabled={currentView === TASK_STATUS.COMPLETED}
      >
        Готово
      </Button>
    </div>
  );
}

export default ViewSwitcher;

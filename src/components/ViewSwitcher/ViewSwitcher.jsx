import "./ViewSwitcher.css";
import { TASK_STATUS } from "../../constants/taskStatus";
import Button from "../Button/Button";
import { ICONS } from "../../constants/icons";
import Icon from "../Icon/Icon";

function ViewSwitcher({ currentView, onChange }) {
  return (
    <div className="view-switcher">
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.TODAY)}
        disabled={currentView === TASK_STATUS.TODAY}
      >
        <Icon src={ICONS.TODAY} size={20} alt="Кнопка Сегодня"></Icon>
        Сегодня
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.LATER)}
        disabled={currentView === TASK_STATUS.LATER}
      >
        <Icon src={ICONS.LATER} size={20} alt="Кнопка Не сегодня"></Icon>
        Не сегодня
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.COMPLETED)}
        disabled={currentView === TASK_STATUS.COMPLETED}
      >
        <Icon src={ICONS.DONE} size={20} alt="Кнопка Готово"></Icon>
        Готово
      </Button>
    </div>
  );
}

export default ViewSwitcher;

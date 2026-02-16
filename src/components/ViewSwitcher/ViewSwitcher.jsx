import "./ViewSwitcher.css";
import { TASK_STATUS } from "../../constants/taskStatus";
import Button from "../Button/Button";
import todayIcon from "../../assets/today.svg";
import laterIcon from "../../assets/later.svg";
import doneIcon from "../../assets/done.svg";
import Icon from "../Icon/Icon";

function ViewSwitcher({ currentView, onChange }) {
  return (
    <div className="view-switcher">
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.TODAY)}
        disabled={currentView === TASK_STATUS.TODAY}
      >
        <Icon src={todayIcon} size={20}></Icon>
        Сегодня
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.LATER)}
        disabled={currentView === TASK_STATUS.LATER}
      >
        <Icon src={laterIcon} size={20}></Icon>
        Не сегодня
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange(TASK_STATUS.COMPLETED)}
        disabled={currentView === TASK_STATUS.COMPLETED}
      >
        <Icon src={doneIcon} size={20}></Icon>
        Готово
      </Button>
    </div>
  );
}

export default ViewSwitcher;

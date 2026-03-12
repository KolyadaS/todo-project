import { useState } from "react";
import "./TaskItem.css";
import { TASK_STATUS } from "../../constants/taskStatus";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { ICONS } from "../../constants/icons";

function TaskItem({
  task,
  actions,
  onRemoveTask,
  onUpdate,
  onUpdateTaskStatus,
  editable,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  const save = () => {
    if (!value.trim()) return;
    onUpdate(task.id, value.trim());
    setIsEditing(false);
  };

  const cancel = () => {
    setValue(task.text);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <div className="task-item__checkbox-wrapper">
        <input
          id={`task-${task.id}`}
          type="checkbox"
          checked={task.status === TASK_STATUS.COMPLETED}
          onChange={() =>
            onUpdateTaskStatus(
              task.id,
              task.status === TASK_STATUS.COMPLETED
                ? TASK_STATUS.TODAY
                : TASK_STATUS.COMPLETED
            )
          }
          title="Поставить/снять галочку"
        />

        {isEditing && editable ? (
          <input
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            onBlur={save}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
          ></input>
        ) : (
          <span
            onDoubleClick={() => {
              if (editable) {
                setIsEditing(true);
              }
            }}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="task-items__btns-wrapper">
        {actions.includes("moveToLater") && (
          <Button
            onClick={() => onUpdateTaskStatus(task.id, TASK_STATUS.LATER)}
            title="Переместить в список 'Не сегодня'"
          >
            <Icon
              src={ICONS.LATER}
              size={14}
              alt="Переместить в Не сегодня"
            ></Icon>
          </Button>
        )}

        {actions.includes("moveToToday") && (
          <Button
            onClick={() => onUpdateTaskStatus(task.id, TASK_STATUS.TODAY)}
            title="Переместить в список 'Сегодня'"
          >
            <Icon
              src={ICONS.TODAY}
              size={14}
              alt="Переместить в Сегодня"
            ></Icon>
          </Button>
        )}

        <Button onClick={() => onRemoveTask(task.id)} title="Удалить задачу">
          <Icon src={ICONS.REMOVE} size={14} alt="Удалить"></Icon>
        </Button>
      </div>
    </li>
  );
}

export default TaskItem;

import { useState } from "react";
import "./TaskItem.css";
import { TASK_STATUS } from "../../constants/taskStatus";
import Button from "../Button/Button";

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

      {actions.includes("moveToLater") && (
        <Button
          variant="primary"
          onClick={() => onUpdateTaskStatus(task.id, TASK_STATUS.LATER)}
        >
          Не сегодня
        </Button>
      )}

      {actions.includes("moveToToday") && (
        <Button
          variant="primary"
          onClick={() => onUpdateTaskStatus(task.id, TASK_STATUS.TODAY)}
        >
          Сегодня
        </Button>
      )}

      <Button variant="danger" onClick={() => onRemoveTask(task.id)}>
        Удалить
      </Button>
    </li>
  );
}

export default TaskItem;

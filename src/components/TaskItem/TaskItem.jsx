import { useState } from "react";
import "./TaskItem.css";

function TaskItem({
  task,
  onRemoveTask,
  onUpdate,
  onUpdateTaskStatus,
  editable = true,
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
    <div className="task-item">
      <input
        id={`task-${task.id}`}
        type="checkbox"
        checked={task.status === "completed"}
        onChange={() =>
          onUpdateTaskStatus(
            task.id,
            task.status === "completed" ? "today" : "completed"
          )
        }
      />
      {/* <label htmlFor={`task-${task.id}`}>{task.text}</label> */}

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

      {task.status === "today" && (
        <button onClick={() => onUpdateTaskStatus(task.id, "later")}>
          Не сегодня
        </button>
      )}

      <button onClick={() => onRemoveTask(task.id)}>Удалить</button>
    </div>
  );
}

export default TaskItem;

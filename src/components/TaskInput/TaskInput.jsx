import { ICONS } from "../../constants/icons";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./TaskInput.css";
import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const setTaskName = (e) => {
    setTask(e.target.value);
  };

  const handleCreateBtn = () => {
    if (!task.trim()) return;

    onAddTask(task);
    setTask("");
  };
  return (
    <div className="task-input">
      <input
        value={task}
        onChange={setTaskName}
        title="Введите название задачи"
      ></input>
      <Button onClick={handleCreateBtn} title="Создать задачу">
        <Icon src={ICONS.ADD} size={14} alt="Создать задачу"></Icon>
      </Button>
    </div>
  );
}

export default TaskInput;

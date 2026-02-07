import Button from "../Button/Button";
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
    <div>
      <input value={task} onChange={setTaskName}></input>
      <Button variant="danger" onClick={handleCreateBtn}>
        Создать
      </Button>
    </div>
  );
}

export default TaskInput;

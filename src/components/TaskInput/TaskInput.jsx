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
      <button onClick={handleCreateBtn}>Создать</button>
    </div>
  );
}

export default TaskInput;

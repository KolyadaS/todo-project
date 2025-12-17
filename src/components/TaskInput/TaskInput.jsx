import "./TaskInput.css";
import { useState } from "react";

function TaskInput() {
  const [task, setTask] = useState("");

  const setTaskName = (e) => {
    setTask(e.target.value);
  };

  const handleCreateBtn = () => {
    console.log(task);
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

import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({ tasks, onToggleTask, onRemoveTask, emptyText }) {
  if (tasks.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
        ></TaskItem>
      ))}
    </div>
  );
}

export default TaskList;

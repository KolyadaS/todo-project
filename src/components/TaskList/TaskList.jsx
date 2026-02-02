import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({
  tasks,
  onToggleTask,
  onRemoveTask,
  onUpdate,
  emptyText,
  editable = true,
}) {
  if (tasks.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
          onUpdate={onUpdate}
          editable={editable}
        ></TaskItem>
      ))}
    </div>
  );
}

export default TaskList;

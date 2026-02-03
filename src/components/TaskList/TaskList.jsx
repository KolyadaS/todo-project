import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({
  tasks,
  onRemoveTask,
  onUpdate,
  onUpdateTaskStatus,
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
          onUpdateTaskStatus={onUpdateTaskStatus}
          onRemoveTask={onRemoveTask}
          onUpdate={onUpdate}
          editable={editable}
        ></TaskItem>
      ))}
    </div>
  );
}

export default TaskList;

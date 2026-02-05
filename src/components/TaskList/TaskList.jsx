import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({
  tasks,
  actions,
  onRemoveTask,
  onUpdate,
  onUpdateTaskStatus,
  emptyText,
  editable,
}) {
  if (tasks.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          actions={actions}
          onUpdateTaskStatus={onUpdateTaskStatus}
          onRemoveTask={onRemoveTask}
          onUpdate={onUpdate}
          editable={editable}
        ></TaskItem>
      ))}
    </ul>
  );
}

export default TaskList;

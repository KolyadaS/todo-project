import "./TaskView.css";
import TaskList from "../TaskList/TaskList";
import { TASK_STATUS } from "../../constants/taskStatus";

function TaskView({
  // title,
  config,
  tasks,
  // view,
  onRemoveTask,
  onUpdate,
  onClearCompleted,
  onUpdateTaskStatus,
  children,
}) {
  return (
    <div className="task-view">
      <h2>{config.title}</h2>

      {config.showClearCompleted && tasks.length > 0 && (
        <button onClick={onClearCompleted}>Удалить выполненные</button>
      )}

      <TaskList
        tasks={tasks}
        active
        onUpdateTaskStatus={onUpdateTaskStatus}
        onRemoveTask={onRemoveTask}
        editable={config.editable}
        emptyText={config.emptyText}
        onUpdate={onUpdate}
      ></TaskList>

      {children}
    </div>
  );
}

export default TaskView;

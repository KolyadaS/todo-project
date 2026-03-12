import "./TaskView.css";
import TaskList from "../TaskList/TaskList";
import Button from "../Button/Button";

function TaskView({
  config,
  tasks,
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
        <Button onClick={onClearCompleted} title="Удалить выполненные задачи">
          Удалить выполненные
        </Button>
      )}

      <TaskList
        tasks={tasks}
        actions={config.actions}
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

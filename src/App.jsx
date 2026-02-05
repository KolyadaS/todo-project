import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Layout from "./layouts/MainLayout/Layout";
import TaskView from "./components/TaskView/TaskView";
import { TASK_STATUS } from "../src/constants/taskStatus";
import ViewSwitcher from "./components/ViewSwitcher/ViewSwitcher";
import { VIEW_CONFIG } from "./constants/viewConfig";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    if (!stored) return [];
    const parsed = JSON.parse(stored);

    return parsed.map((task) => {
      if ("status" in task) return task;

      return {
        ...task,
        status: task.completed ? TASK_STATUS.COMPLETED : TASK_STATUS.TODAY,
      };
    });
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [currentView, setCurrentView] = useState(TASK_STATUS.TODAY);

  const visibleTasks = tasks.filter((task) => task.status === currentView);

  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: text, status: TASK_STATUS.TODAY },
    ]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTaskText = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const clearCompleted = () => {
    setTasks((prev) =>
      prev.filter((task) => task.status !== TASK_STATUS.COMPLETED)
    );
  };

  // const viewTitles = {
  //   [TASK_STATUS.TODAY]: "Сегодня",
  //   [TASK_STATUS.LATER]: "Не сегодня",
  //   [TASK_STATUS.COMPLETED]: "Готово",
  // };

  const viewConfig = VIEW_CONFIG[currentView];

  return (
    <Layout>
      <Header></Header>
      <Main>
        <ViewSwitcher
          currentView={currentView}
          onChange={setCurrentView}
        ></ViewSwitcher>

        <TaskView
          config={viewConfig}
          // title={viewTitles[currentView]}
          tasks={visibleTasks}
          // view={currentView}
          onUpdateTaskStatus={updateTaskStatus}
          onRemoveTask={removeTask}
          onUpdate={updateTaskText}
          onClearCompleted={clearCompleted}
        >
          {viewConfig.showInput && <TaskInput onAddTask={addTask}></TaskInput>}
        </TaskView>
      </Main>
    </Layout>
  );
}

export default App;

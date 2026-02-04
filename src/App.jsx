import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Layout from "./layouts/MainLayout/Layout";
import TaskView from "./components/TaskView/TaskView";
import { TASK_STATUS } from "../src/constants/taskStatus";

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

  const viewTitles = {
    [TASK_STATUS.TODAY]: "Сегодня",
    [TASK_STATUS.LATER]: "Не сегодня",
    [TASK_STATUS.COMPLETED]: "Готово",
  };

  return (
    <Layout>
      <Header></Header>
      <Main>
        <div>
          <button onClick={() => setCurrentView("today")}>Сегодня</button>
          <button onClick={() => setCurrentView("later")}>Не сегодня</button>
          <button onClick={() => setCurrentView("completed")}>Готово</button>
        </div>

        <TaskView
          title={viewTitles[currentView]}
          tasks={tasks}
          filter={currentView}
          onUpdateTaskStatus={updateTaskStatus}
          onRemoveTask={removeTask}
          onUpdate={updateTaskText}
          onClearCompleted={clearCompleted}
        >
          {currentView !== TASK_STATUS.COMPLETED && (
            <TaskInput onAddTask={addTask}></TaskInput>
          )}
        </TaskView>
      </Main>
    </Layout>
  );
}

export default App;

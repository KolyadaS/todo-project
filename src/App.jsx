import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Layout from "./layouts/MainLayout/Layout";
import TaskView from "./components/TaskView/TaskView";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    if (!stored) return [];
    const parsed = JSON.parse(stored);

    return parsed.map((task) => {
      if ("status" in task) return task;

      return {
        ...task,
        status: task.completed ? "completed" : "today",
      };
    });
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [currentView, setCurrentView] = useState("today");

  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: text, status: "today" },
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
    setTasks((prev) => prev.filter((task) => task.status !== "completed"));
  };

  const viewTitles = {
    today: "Сегодня",
    later: "Не сегодня",
    completed: "Готово",
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
        >
          {currentView !== "completed" && (
            <TaskInput onAddTask={addTask}></TaskInput>
          )}
        </TaskView>

        {/* <TaskView
          title="Не сегодня"
          tasks={tasks}
          filter="later"
          onUpdateTaskStatus={updateTaskStatus}
          onRemoveTask={removeTask}
        ></TaskView> */}

        {/* <TaskView
          title="Готово"
          tasks={tasks}
          filter="completed"
          onUpdateTaskStatus={updateTaskStatus}
          onRemoveTask={removeTask}
          onClearCompleted={clearCompleted}
        ></TaskView> */}
      </Main>
    </Layout>
  );
}

export default App;

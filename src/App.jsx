import { useEffect, useState } from "react";
import "./App.css";
import NotTodayView from "./components/NotTodayView/NotTodayView";
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
        status: task.completed ? "completed" : "active",
      };
    });
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: text, status: "active" },
    ]);
  };

  // const toggleTask = (id) => {
  //   setTasks((prev) =>
  //     prev.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };
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
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return (
    <Layout>
      <Header></Header>
      <Main>
        <TaskView
          title="Сегодня"
          tasks={tasks}
          filter="active"
          // onToggleTask={toggleTask}
          onUpdateTaskStatus={updateTaskStatus}
          onRemoveTask={removeTask}
          onUpdate={updateTaskText}
        >
          <TaskInput onAddTask={addTask}></TaskInput>
        </TaskView>

        <NotTodayView></NotTodayView>

        <TaskView
          title="Готово"
          tasks={tasks}
          filter="completed"
          // onToggleTask={toggleTask}
          onUpdateTaskStatus={updateTaskStatus}
          onRemoveTask={removeTask}
          onClearCompleted={clearCompleted}
        ></TaskView>
      </Main>
    </Layout>
  );
}

export default App;

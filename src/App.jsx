import { useState } from "react";
import "./App.css";
import DoneView from "./components/DoneView/DoneView";
import NotTodayView from "./components/NotTodayView/NotTodayView";
import TaskInput from "./components/TaskInput/TaskInput";
import TodayView from "./components/TodayView/TodayView";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Layout from "./layouts/MainLayout/Layout";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prev) => {
      const newTasks = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      const newArray = [...prev, newTasks];

      return newArray;
    });
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <Layout>
      <Header></Header>
      <Main>
        <TodayView
          tasks={tasks}
          onToggleTask={toggleTask}
          onRemoveTask={removeTask}
        >
          <TaskInput onAddTask={addTask}></TaskInput>
        </TodayView>
        <NotTodayView></NotTodayView>
        <DoneView></DoneView>
      </Main>
    </Layout>
  );
}

export default App;

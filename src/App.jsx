import "./App.css";
import DoneView from "./components/DoneView/DoneView";
import NotTodayView from "./components/NotTodayView/NotTodayView";
import TaskInput from "./components/TaskInput/TaskInput";
import TodayView from "./components/TodayView/TodayView";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Layout from "./layouts/MainLayout/Layout";

function App() {
  return (
    <Layout>
      <Header></Header>
      <Main>
        <TodayView>
          <TaskInput></TaskInput>
        </TodayView>
        <NotTodayView></NotTodayView>
        <DoneView></DoneView>
      </Main>
    </Layout>
  );
}

export default App;

import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="container mx-auto mt-8 px-20">
      <TaskCreator />
      <TaskList />
    </div>
  );
};
export default App;

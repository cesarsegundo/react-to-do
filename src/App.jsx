import { useEffect } from "react";
import { useState } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import ButtonClear from "./components/ButtonClear";

const App = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const createNewTask = (taskName) => {
    if (!taskItems.find((item) => item.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const deleteTasksCompleted = () => {
    if (window.confirm("¿Desea eliminar las tareas realizadas?")) {
      setTaskItems(taskItems.filter((task) => task.done == false));
      setShowCompleted(false);
      return;
    }
    return;
  };
  const togleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };
  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);
  return (
    <div className="pt-8 px-20 text-white min-h-screen bg-slate-100">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable
        taskItems={taskItems}
        togleTask={togleTask}
        doneTasks={false}
        title="Pendientes"
      />
      <VisibilityControl
        setShowCompleted={setShowCompleted}
        showCompleted={showCompleted}
      />
      {showCompleted && (
        <>
          <TaskTable
            taskItems={taskItems}
            togleTask={togleTask}
            doneTasks={true}
            title="Realizadas"
          />
          <ButtonClear deleteTasksCompleted={deleteTasksCompleted} />
        </>
      )}
    </div>
  );
};
export default App;

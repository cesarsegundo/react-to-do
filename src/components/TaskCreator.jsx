import { useState } from "react";

const TaskCreator = () => {
  const [newTask, setNewTask] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    //añade un nuevo item al local storage del navegador
    localStorage.setItem("tasks", newTask);
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button>Registrar tarea</button>
    </form>
  );
};

export default TaskCreator;

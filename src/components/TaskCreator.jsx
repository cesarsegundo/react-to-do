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
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
        <input
          type="text"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Nueva tarea"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Registrar tarea
        </button>
      </div>
    </form>
  );
};

export default TaskCreator;

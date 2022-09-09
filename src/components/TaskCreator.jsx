import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:relative md:relative ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
        <input
          type="text"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Nueva tarea"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="text-white lg:absolute md:absolute mt-3 right-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Registrar tarea
        </button>
      </div>
    </form>
  );
};

export default TaskCreator;

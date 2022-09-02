import { useState } from "react";

const TaskList = () => {
  const [tasks, settasks] = useState([
    { name: "Tarea 1", done: false },
    { name: "Tarea 2", done: false },
    { name: "Tarea 3", done: false },
  ]);
  return (
    <div className="mt-5 overflow-x-auto  shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Tareas
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.name} className="bg-white border-b  hover:bg-gray-50">
              <td className="py-4 px-6">{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

const TaskTable = ({ taskItems, togleTask, doneTasks, title }) => {
  const taskTableRows = () => {
    return taskItems
      .filter((task) => task.done === doneTasks)
      .map((task, index) => (
        <tr key={index} className="bg-white border-b  hover:bg-blue-100">
          <td className="py-4 px-6">{task.name}</td>
          <td className="mb-4">
            <input
              type="checkbox"
              checked={task.done}
              className="w-5 h-5 text-blue-500 bg-gray-100 rounded border-gray-500 focus:ring-blue-500 "
              onChange={() => togleTask(task)}
            />
          </td>
        </tr>
      ));
  };
  return (
    <div className="mt-5 overflow-x-auto  shadow-md sm:rounded-lg border border-gray-300">
      <table className="w-full text-sm text-center text-gray-700 ">
        <thead className="text-xs text-gray-800 uppercase bg-blue-300">
          <tr>
            <th colSpan={2} className="bg-green-400 py-4 px-6">
              {title}
            </th>
          </tr>
          <tr>
            <th scope="col" className="py-3 px-6">
              Tareas
            </th>
            <th scope="col" className="py-3 px-6">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
};

export default TaskTable;

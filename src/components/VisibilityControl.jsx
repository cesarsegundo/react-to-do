const VisibilityControl = ({ setShowCompleted, showCompleted }) => {
  return (
    <div className="flex  my-4">
      <input
        type="checkbox"
        checked={showCompleted}
        className="w-5 h-5 text-blue-500 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
        onChange={(e) => setShowCompleted(!showCompleted)}
      />
      <label className="ml-2 text-sm font-medium text-gray-900 ">
        Mostrar tareas realizadas
      </label>
    </div>
  );
};

export default VisibilityControl;

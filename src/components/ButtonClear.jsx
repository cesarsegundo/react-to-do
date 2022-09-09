const ButtonClear = ({ deleteTasksCompleted }) => {
  const handleDelete = () => {
    deleteTasksCompleted();
  };
  return (
    <button
      type="button"
      className=" mt-3 focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      onClick={() => handleDelete()}
    >
      Limpiar
    </button>
  );
};

export default ButtonClear;

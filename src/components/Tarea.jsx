const Tarea = ({ tarea, setTarea, eliminarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar la tarea?')

    if (respuesta) {
      eliminarTarea(id)
    }
  }

  return (
    <div className="">
      <div className="shadow-lg bg-slate-200 rounded-md h-1/2 mx-6 mb-2">
        <div className="py-5">
          <div className="mx-6 p-2">
            {" "}
            <span>👱 Titulo:</span> <span className="font-bold">{titulo}</span>
          </div>
          <div className="mx-6 p-2">
            <span>📱 Fecha:</span> <span className="font-bold">{fecha}</span>
          </div>
          <div className="mx-6 p-2">
            <span>📩 Descripción:</span>{" "}
            <span className="font-bold">{descripcion}</span>
          </div>

          <div className="text-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-600 mt-3 py-1 px-4 mx-2 rounded-full text-bold text-sm"
              type="button"
              onClick={() => setTarea(tarea)}
            >
              Actualizar
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 mt-3 py-1 px-4 mx-2 rounded-full text-bold text-sm"
              type="button"
              onClick={ handleEliminar }
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarea;

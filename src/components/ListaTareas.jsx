import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTarea }) => {

  return (
    <div>
      {tareas && tareas.length ? (
        <>
          <div className="text-center text-xl font-bold text-slate-300 mb-2">
            Tareas pendientes
          </div>
          {tareas.map((tarea) => {
            return <Tarea key={tarea.id} tarea={tarea} setTarea={setTarea} />;
          })}
        </>
      ) : (
        <>
          <div className="text-center text-xl font-bold text-slate-300">
            No hay tareas
          </div>
        </>
      )}
    </div>
  );
};

export default ListaTareas;

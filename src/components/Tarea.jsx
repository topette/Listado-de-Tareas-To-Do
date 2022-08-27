const Tarea = ({tarea}) => {
  console.log(tarea)
  return (
    <div className="w-full">
      <div className="shadow-lg bg-slate-200 rounded-md h-1/2 mx-6 mb-2">
        <div className="py-5">
          <div className="font-bold mx-6 p-2">👱 Titulo: {datos.titulo}</div>
          <div className="font-bold mx-6 p-2">📱 Fecha: {datos.fecha}</div>
          <div className="font-bold mx-6 p-2">📩 Descripción: {datos.descripcion}</div>
        </div>
      </div>
    </div>
  );
};

export default Tarea;

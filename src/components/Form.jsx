import React, { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Form = ({ tarea, tareas, setTareas, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setDescripcion(tarea.descripcion);
      setFecha(tarea.fecha);
    }
  }, [tarea]);

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, descripcion, fecha].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // objeto de tareas
    const objetoTareas = {
      titulo,
      descripcion,
      fecha,
    };

    // Editar la tarea
    if (tarea.id) {

      objetoTareas.id = tarea.id

      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTareas : "una cosa"
      );
      setTareas(tareasActualizadas);
      setTarea({});
    } else {
      // Spread operator ...tareas
      objetoTareas.id = generarId();
      setTareas([...tareas, objetoTareas]);
    }

    // limpiar formulario
    setTitulo("");
    setDescripcion("");
    setFecha("");
  };

  return (
    <div className="">
      <div className="shadow-lg bg-slate-200 rounded-md mx-6 py-3">
        <form onSubmit={handleSubmit}>
          {error && (
            <AlertError>Falta diligenciar campos del formulario</AlertError>
          )}
          <div className="auto-rows-auto m-4">
            <label className="w-full">👱 Titulo</label>
            <input
              className="rounded p-3 shadow-lg w-full"
              type="text"
              name=""
              id=""
              placeholder="Escribe el título de la tarea"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="auto-rows-auto m-4">
            <label className="w-full">✨ Fecha</label>
            <input
              className="rounded p-3 shadow-lg w-full"
              type="date"
              name=""
              id=""
              placeholder="Selecciona la fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="auto-rows-auto m-4">
            <label className="w-full">📱 Descripción</label>
            <input
              className="rounded p-3 shadow-lg w-full"
              type="text"
              name=""
              id=""
              placeholder="Escribe la descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          {tarea.id ? (
            <div className="auto-rows-auto m-4">
              <input
                className="w-full bg-purple-600 p-3 rounded-full text-white font-bold hover:bg-purple-900 cursor-pointer uppercase"
                type="submit"
                value="Actualizar"
              />
            </div>
          ) : (
            <div className="auto-rows-auto m-4">
              <input
                className="w-full bg-blue-600 p-3 rounded-full text-white font-bold hover:bg-blue-900 cursor-pointer uppercase"
                type="submit"
                value="Subir tarea"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;

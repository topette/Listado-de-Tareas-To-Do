import React from "react";
import Header from "./Header";
import Form from "./Form";
import { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tareasLocalStorage);
    };
    obtenerTareasLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (id) => {
    const actualizarTarea = tareas.filter((tarea) => tarea.id !== id);
    // permite agregar un documento sin afectar los otros
    setTareas(actualizarTarea);
    // Este set tareas sirve para eliminar la tarea
  };

  return (
    <>
      <div className="w-full text-center">
        <Header />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Form
            tarea={tarea}
            tareas={tareas}
            setTareas={setTareas}
            setTarea={setTarea}
          />
        </div>
        <div className="w-full">
          <ListaTareas
            tareas={tareas}
            setTarea={setTarea}
            eliminarTarea={eliminarTarea}
          />
        </div>
      </div>
    </>
  );
}

export default App;

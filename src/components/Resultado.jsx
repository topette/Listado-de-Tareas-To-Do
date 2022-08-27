import Tarea from "./Tarea"

const Resultado = ({datos}) => {

  console.log(datos)

  return (
    <>
    <h4 className="text-center text-xl font-bold text-slate-300">Tareas</h4>
      
    
     {datos.map ((dato) => {
      return(
        <>
        <Tarea 
          tarea={dato}
        />

        </>
      )
    })}
    </>
  )
}

export default Resultado
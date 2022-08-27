import React, { useState } from 'react'
import AlertError from './AlertError'

const Form = ({datos, setDatos}) => {

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([titulo, descripcion, fecha].includes("")){
      setError(true)
      return;
    }
    setError(false);
  
    const objetoDatos = {
      titulo,
      descripcion,
      fecha
    } 

    setDatos([...datos, objetoDatos]);
    setTitulo('')
    setDescripcion('')
    setFecha('')
    
  }

  return (
    <div className='flex w-full'>
        <div className='shadow-lg bg-slate-200 rounded-md mx-6 py-3 w-full'>
        <form onSubmit={handleSubmit}>
          {error && <AlertError>Falta diligenciar campos del formulario</AlertError> }
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>👱 Titulo</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="text" name="" id="" 
            placeholder='Escribe el título de la tarea' 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} />
            </div>
            
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>✨ Fecha</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="date" name="" id="" 
            placeholder='Selecciona la fecha' 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>📱 Descripción</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="text" name="" id="" 
            placeholder='Escribe la descripción' 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            />
            </div>
            <div className='auto-rows-auto m-4'>
            <input 
            className="w-full bg-blue-600 p-3 rounded-full text-white font-bold hover:bg-blue-900 cursor-pointer uppercase" 
            type="submit" value="Enviar" />
            </div>
            </form>
        </div>
        

        
      
      </div>
  )
}

export default Form
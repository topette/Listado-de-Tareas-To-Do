import React, { useState } from 'react'

const Form = ({datos, setDatos}) => {

  const [nombre, setNombre] = useState('')
  const [celular, setCelular] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, celular, email, fecha].includes("")){
      setError(true)
      return;
    }
    setError(false);
  
    const objetoDatos = {
      nombre,
      celular,
      email,
      fecha
    } 

    setDatos([...datos, objetoDatos]);
    setNombre('')
    setCelular('')
    setEmail('')
    setFecha('')
    
  }

  return (
    <div className='flex w-full'>
        <div className='shadow-lg bg-slate-200 rounded-md mx-6 py-3 w-full'>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className='text-danger'>{error}</p>
          )}
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>👱 Nombre</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="text" name="" id="" 
            placeholder='Escribe tu nombre' 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>📱 Celular</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="number" name="" id="" 
            placeholder='Escribe tu celular' 
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>📩 Email</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="email" name="" id="" 
            placeholder='Escribe tu correo electrónico' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>✨ Fecha de nacimiento</label>
            <input 
            className='rounded p-3 shadow-lg w-full' 
            type="date" name="" id="" 
            placeholder='Selecciona la fecha' 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
            </div>
            <div className='auto-rows-auto m-4'>
            <input 
            className="w-full bg-blue-600 p-3 rounded-full text-white font-bold hover:bg-blue-900 cursor-pointer uppercase" 
            type="submit" value="Enviar" />
            </div>
            </form>
        </div>
        

        <div className='mx-6 w-full'> 
    <div className='shadow-lg bg-slate-200 rounded-md h-1/2'>
        <div className='py-5'>
    <div className='font-bold mx-6 p-2'>👱 Nombres: </div>
    <div className='font-bold mx-6 p-2'>📱 Celular: </div>
    <div className='font-bold mx-6 p-2'>📩 Correo: </div>
    <div className='font-bold mx-6 p-2'>✨ Cumpleaños: </div>
    </div>
    </div>
    <div className='py-5'></div>
    <input className="w-full bg-red-600 p-3 rounded-sm text-white font-bold hover:bg-red-900 cursor-pointer uppercase" type="button" value="Todos los campos son obligatorios" />  
    </div>
      
      </div>
  )
}

export default Form
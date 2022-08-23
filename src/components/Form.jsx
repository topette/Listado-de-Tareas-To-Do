import React from 'react'

const Form = () => {
  return (
    <div className='w-full flex'>
        <div className='shadow-lg bg-slate-200 rounded-md w-1/2 mx-6'>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>Nombre</label>
            <input className='rounded p-3 shadow-lg w-full' type="text" name="" id="" placeholder='Escribe tu nombre' />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>Celular</label>
            <input className='rounded p-3 shadow-lg w-full' type="number" name="" id="" placeholder='Escribe tu celular' />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>Email</label>
            <input className='rounded p-3 shadow-lg w-full' type="email" name="" id="" placeholder='Escribe tu correo electrónico' />
            </div>
            <div className='auto-rows-auto m-4'>
            <label className='w-full'>Fecha de nacimiento</label>
            <input className='rounded p-3 shadow-lg w-full' type="date" name="" id="" placeholder='Selecciona la fecha' />
            </div>
            <div className='auto-rows-auto m-4'>
            <input className="w-full bg-blue-600 p-3 rounded-full text-white font-bold hover:bg-blue-900 cursor-pointer uppercase" type="button" value="Enviar" />
            </div>
        </div>
    <div className='w-1/2 mx-6'> 
    <div className='shadow-lg bg-slate-200 rounded-md h-1/2'>
        <div className='py-5'>
    <div className='font-bold mx-6 p-2'>Nombres: </div>
    <div className='font-bold mx-6 p-2'>Celular: </div>
    <div className='font-bold mx-6 p-2'>Correo: </div>
    <div className='font-bold mx-6 p-2'>Cumpleaños: </div>
    </div>
    </div>
    <div className='py-5'></div>
    <input className="w-full bg-red-600 p-3 rounded-sm text-white font-bold hover:bg-red-900 cursor-pointer uppercase" type="button" value="Todos los campos son obligatorios" />  
    </div>
    </div>
  )
}

export default Form
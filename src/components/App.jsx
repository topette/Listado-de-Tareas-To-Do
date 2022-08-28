import React from 'react'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'
import ListaTareas from './ListaTareas' 

const App = () => {

    const [tareas, setTareas] = useState([])
    const [tarea, setTarea] = useState({})

  return (
    <>
    <div className='w-full text-center'>
        <Header />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
    <div className='w-full'>
        <Form 
        tarea={tarea}
        tareas={tareas} 
        setTareas={setTareas} />
    </div>
    <div className='w-full'>
        <ListaTareas
          tareas={tareas}
          setTarea={setTarea}
        />
    </div>
    </div>
    
    </>
  )
}

export default App
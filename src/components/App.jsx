import React from 'react'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'
import Resultado from './Resultado' 

const App = () => {

    const [datos, setDatos] = useState([])

  return (
    <>
    <div className='w-full text-center'>
        <Header />
    </div>
    <div className='flex'>
    <div className='w-1/2'>
        <Form datos={datos} setDatos={setDatos} />
    </div>
    <div className='w-1/2'>
        <Resultado 
          datos={datos}
          
        />
    </div>
    </div>
    
    </>
  )
}

export default App
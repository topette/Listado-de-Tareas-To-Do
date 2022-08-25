import React from 'react'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'

const App = () => {

    const [datos, setDatos] = useState([])

  return (
    <>
    <div className='w-full text-center'>
        <Header />
    </div>
    <div className='w-full'>
        <Form datos={datos} setDatos={setDatos} />
    </div>
    </>
  )
}

export default App
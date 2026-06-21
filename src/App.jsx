import React, { useEffect, useState } from 'react'
import { Router, Routes,Route } from 'react-router'
import Home from './Home'
import All from './All'
import Contact from './Contact'

const App = () => {
  const[togol, setTogol] = useState(true)

  useEffect(()=>{
    if(togol){
      document.documentElement.classList.remove('dark')
    }else{
      document.documentElement.classList.add('dark')
    }
  },[togol])


  return (
    <div className='min-h-screen  bg-white text-black dark:bg-slate-900 dark:text-white'>

      <All/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <button className="p-2 border rounded m-4 bg-gray-200 dark:bg-gray-700"
    onClick={()=>{setTogol(!togol)}}
    >{togol? 'black':'white'}</button>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import { Link } from 'react-router'

const All = () => {
  
    const[isopen , setIsopen] = useState(false)
  return (
    <div className='
         bg-blue-700 text-white font-bold'>
        <div className='hidden  sm:flex justify-between ml-5 mr-5 h-10 items-center
        '>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/data">Data</Link>
        
      
        </div>
        <button className=' md:hidden bg-blue'
         onClick={()=>{
            setIsopen(!isopen)
        }}>
            {isopen? 'show':'hide'}
        </button>
          {isopen&&(
             <div className='md:hidden flex flex-col'>
             <Link onClick={(()=>{
            setIsopen(false)
        })} to="/">Home</Link>
        <Link onClick={(()=>{
            setIsopen(false)
        })} to="/contact">Contact</Link>
        <Link onClick={(()=>{
            setIsopen(false)
        })} to="/about">About</Link>
        <Link onClick={(()=>{
            setIsopen(false)
        })} to="/data">Data</Link>
        </div>
        )}
        
    </div>
  )
}

export default All
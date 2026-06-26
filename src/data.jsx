import React, { useEffect, useRef } from 'react'
import {useState} from "react";

const App = () => {
  const [del , setDel] = useState('')
const [word, setWord] = useState('');
const [alldel , setAlldel] = useState('')
const [save, setSave] = useState(()=>{
  const Savedata = localStorage.getItem("mywords")
  return Savedata ? JSON.parse(Savedata):[];
});
useEffect(()=>{
localStorage.setItem('mywords', JSON.stringify(save));
},[save])


const khli = () =>{
  save('')
}

  return (
    <div>
     <input
  onChange={((e)=>{
setWord (e.target.value)
  })}
      type="text" placeholder="Write your text" value={word}  />
    <button onClick={(()=>{
      if(word.length>10){
        alert("under 10")
      }else{
      setSave([...save,word])
    setWord("")}
      
    })}>save</button>
    <h1>You Are writing {word}</h1>
 <div>
        <h3>Saved Words:</h3>
        {save.map((item, index) => (
          <div key={index} className='flex gap-4 bg-gray-400 p-4 rounded w-90 mt-5'>
          <p className='text-5xl text-white' key={index}>{item}</p>
          <button onClick={(()=>{
          
            setDel(save.splice(index,1))
          })} className='bg-red-500 text-white py-0 rounded px-5' >X</button>
          </div>
          
        ))}
      </div>
    <p>words:{word.length}</p>
    <button  onClick={()=>{
    setSave([])
      
    }}>Clear All</button>
    </div>
  )
}

export default App
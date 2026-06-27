import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { LuSave } from "react-icons/lu";

import { MdHourglassEmpty } from "react-icons/md";

const App = () => {
  const [Data, setData] = useState('');
  const [save, setSave] = useState([])
  const [Delete, setDelete] = useState('')
  const [allsave, setAllsave] = useState('')
   const [pendingTasks, setPendingTasks] = useState([])
  const [Condtion, setCondtion] = useState([]) 
  const[toggle, setToggle] = useState([])
    const[completetoggle, setCompletetoggle] = useState([])
    const [count, setCount] = useState(0)
  
  return (
    <div className='flex flex-col gap-5 m-6 p-5 justify-between'>
      <div className=' flex justify-center gap-4'>
        <input  value={Data} onChange={((e)=>{
          setData(e.target.value)
        })}
        className=' 
        w-120 outline-none border-2 rounded  border-blue-950 placeholder:p-1  pl-2  
        ' type="text" placeholder='Add your Task' />
        <button onClick={(()=>{
          if(Data.trim()===""){
            alert("First Enter any Task")
          }else{
          setSave([...save,Data])
          setData("")}
        })}
         className='bg-gray-700 text-white text-center px-6 py-1 text-xl  rounded
      transition-all duration-300
          flex items-center transform active:scale-105 active:shadow active:shadow-black
          '>save</button>
</div>
<div className='flex flex-col'>
  <h1 className='flex justify-center   mt-5 bg-gray-700 text-white rounded w-full p-2 text-center text-2xl shadow-2xl shadow-gray-400'>Your Daliy Task</h1>
</div>
<div className='flex justify-between text-xl '>
  <h1 className='ml-10   text-blue-900 font-bold'>Your Task</h1>
  <div className='flex gap-7'>
  <h1 className='text-red-700 font-bold'>Delete</h1>
  <h1 className='text-green-800 font-bold'>Save</h1>
    <h1 className='text-red-700 font-bold'>Pending</h1>
  <h1 className='text-green-800 font-bold'>Complete</h1>
  </div>
</div>
<div>
  {save.map((item, index)=>{
    return(
<div  className='flex justify-between' key={index}>
 
    <p key={index}>{item}</p>
 <div className='flex gap-20 p-2'>
 
 {/* 2. Check lagaya ke agar is array me yeh index shamil (.includes) hai, toh delete remove kar do */}
 {Condtion.includes(index) ? null : (
  <MdDeleteOutline onClick={(()=>{
const update = save.filter((_, i)=>i !== index);
setSave(update)
  })}
  disabled={Condtion.includes(index)}
    className="text-red-600 text-xl hover:text-red-500 transition-all duration-300 cursor-pointer" />
 )}

<LuSave onClick={(()=>{

 setCondtion([...Condtion, index])
//  setPendingTasks([...pendingTasks,index])
setToggle([...toggle,index])
setCompletetoggle([...completetoggle,index])
if(!Condtion.includes(index)){
setCount(count+1)}
})}
 disabled={Condtion.includes(index)}
 className="text-green-600 text-xl hover:text-green-500 transition-all duration-300 cursor-pointer" />
{toggle.includes(index) 
 ?
 <MdCheckCircleOutline className="text-green-600 text-xl mr-2 hover:text-green-500 transition-all duration-300 cursor-pointer" />:
  <MdHourglassEmpty className="text-red-600 text-xl mr-2
 hover:text-red-500 transition-all duration-300 cursor-pointer" 

 />
 }
{completetoggle.includes(index)
?

<MdCheckCircleOutline className="text-green-600 text-xl mr-2 hover:text-green-500 transition-all duration-300 cursor-pointer" />
: <MdHourglassEmpty className="text-red-600 text-xl mr-2
 hover:text-red-500 transition-all duration-300 cursor-pointer" 

 />
}
 </div>
  </div>
    )
  })}
</div>
<h2>Total Complete Task{count}</h2>

    </div>
  )
}

export default App
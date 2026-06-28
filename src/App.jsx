import React, { useState, useEffect } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { LuSave } from "react-icons/lu";

import { MdHourglassEmpty } from "react-icons/md";

const App = () => {
  const [Data, setData] = useState('');
  // const [save, setSave] = useState([])
  const [Delete, setDelete] = useState('')
  const [allsave, setAllsave] = useState('')
   const [pendingTasks, setPendingTasks] = useState([])
  const [Condtion, setCondtion] = useState([]) 
  const[toggle, setToggle] = useState([])
    const[completetoggle, setCompletetoggle] = useState([])
    const [count, setCount] = useState(0)
    const[showpop, setShowpop] = useState(false)
    const handlepop = ()=>{
     setSave([])
     setCount(0)
     setShowpop(false)
    }
    const[save, setSave] = useState(()=>{
      const Savedata = localStorage.getItem("My Task")
      return Savedata? JSON.parse(Savedata):[];
    })
  
useEffect(() => {
  localStorage.setItem("My Task",JSON.stringify(save))
}, [save])








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
         const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit',year:'2-digit', Day:'Day' })
          setSave([...save,{text:Data,time: currentTime }])
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
<div  className='flex justify-between bg-gray-100 shadow-xl shadow-gray-200 ml-2 mb-5 rounded p-2' key={index}>
 <div className='flex flex-col justify-center pl-2'>
                <p className='font-medium text-gray-800'>{item.text}</p>
                <span className='text-xs text-gray-400 font-semibold mt-0.5'>{item.time}</span>
              </div>
    {/* <p key={index}>{item}</p> */}
 <div className='flex gap-20  p-2'>
 

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
<div className='flex justify-between '>
<h2  className='text-gray-800 font-bold ml-5 '>You Complete {count} Task</h2>
<button className='bg-red-700 rounded text-white font-bold cursor-pointer px-4 py-1 mr-3 focus:scale-105 focus:shadow
 focus:shadow-gray-200' onClick={(()=>{
setShowpop(true)
})}>
Clear All
</button>
</div>
{showpop ? (
  <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn'>
  <div className='justify-center p-9 w-100 rounded flex-col bg-gray-100 text-black'>
    <div >
  <h1 className='font-bold flex justify-center p-2 text-red-700 text-xl mb-2'>Are You Sure?</h1>
  <p className='font-bold text-gray-700'>Do you really want to delete all tasks? This action cannot be undone</p>
    </div>
    <div className=' flex justify-between'>
      <button   className='bg-green-600 font-bold text-white px-5 cursor-pointer
      focus:shadow
       focus:shadow-gray-400 font-bold p- mt-5 rounded '
      onClick={(()=>{
        setShowpop(false)
      })}
      >No</button>
      <div>
      <button className='bg-red-600 text-white cursor-pointer focus:scale-105 
       px-5 focus:shadow
       focus:shadow-gray-400 mt-5 rounded '
      onClick={handlepop}
      >Yes</button>
      </div>
    </div>
  </div>
    </div>
):null
}
    </div>
  )
}

export default App 
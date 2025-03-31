import React, { useEffect, useState } from 'react'

const Services = () => {
  const [first,setfirst]=useState("This is normal")
  const [second,setSecond]=useState("This is large data")
    useEffect(()=>{
        console.log("Component is created")
        return ()=>{console.log("delted")}
    },[second])
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst("Normal data chnage")}className='bg-blue-500 text-white'>Change</button>
        <h1>{second}</h1>
        <button onClick={()=>setSecond("Large data chnage")} className='bg-blue-500 text-white'>Change large data</button>
      
    </div>
  )
}

export default Services

import React, { useState } from 'react'

const App = () => {
  const [val,setVal]=useState({name:""})
  const handleSubmit=(e)=>{e.preventDefault()
    console.log(val)
  }
  return (
    <div>
     <form action="" onSubmit={handleSubmit}>
      <input  onChange={(e)=>setVal({...val,name:e.target.value})}type="text" placeholder="name" />
      <input type="Submit" />
     </form>
      
    </div>
  )
}

export default App
// controlled components :aap jabhi kuch likekhe usestate ke through datata real par update kar de  
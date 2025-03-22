import React, { useState } from 'react'

const App = () => {
  const [val,setval]= useState({name:"Soham",isBanned:false})
  return (
    <div>
      <h1>name:{val.name}</h1>
      <h1>banned:{val.isBanned.toString()}</h1>

      <button onClick={()=>{setval({...val,isBanned:!val.isBanned})}} className='bg-blue-500 text-white rounded-lg'>Change karo</button>
      
    </div>
  )
}
// first all bonjects of val is taken with spread operaotr ten the value we anna change that is is banned if given after comma is oveerdiidng the prev is banned

export default App

import React, { useState } from 'react'

// const App = () => {
//   // const [val,setval]= useState({name:"Soham",isBanned:false})
//   return (
//     <div>
//       <h1>name:{val.name}</h1>
//       <h1>banned:{val.isBanned.toString()}</h1>

//       <button onClick={()=>{setval({...val,isBanned:!val.isBanned})}} className={`${val.isBanned? "bg-blue-500":"bg-red-500"} text-white rounded-lg`}>Change karo</button>
      
//     </div>
//   )
// }
const App=()=>{
  const [val,setVal]=useState([1,2,3,4,5,6])


  return (<>
  <div>
    {/* {val.map(item=><h1>{item}</h1>)}
    <button className='bg-blue-500' onClick={() => setVal(() => val.filter((item, index) => item%2==0 ))}>Click</button> */}
     {val.map(item=><h1>{item}</h1>)}
     <button className='bg-blue-500' onClick={() =>{setVal([...val,7])}}>Click</button>
  </div>
 
  </>)
}




export default App

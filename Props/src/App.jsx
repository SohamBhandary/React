import React, { useState } from 'react'
import Card from './Card'

const App = () => {
  const data=[{name:"Soham",proffession:"Painter",image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",friends:false},
    {name:"Amit",proffession:"n/a",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Rahul",proffession:"tester",image:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",friends:false},
    {name:"Sumit",proffession:"coder",image:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",friends:false}
  ]
  const[realData,setRealData]=useState(data)
 const handleFriends=()=>{
  setRealData((prev)=>{
    return prev.map((item,index)=>{
      if(index===2){
        return {...item,friends:!item.friends}
      }
      return item
    })
  })
 }
  return (
    <div >
     {/* <Card text="know more" color="bg-blue-600"/>
     <Card text="downlaod" color="bg-red-600"/> */}
     <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center  justify-center'>{realData.map((item,index)=><Card val={item} handleclick={handleFriends} />)} </div>
      
    </div>
  )
}

export default App
//props use hoote hai apke comppnenst ko reusablel banane ke liye,consider karo apke pass me a ek button and apko uss  button ko alag alag jagah me dalna hai app mein to app ek button componenet banai uska data hard coded ki jagah parent component se send karde child component par use kar de
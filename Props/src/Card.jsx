import React, { useState } from 'react'

const Card = ({val,handleFriends,}) => {
    const {name,proffession,image,friends}=val
   
  return (
    // <div>
    //      <button className={`${color} px-3 py-1 text-zinc-100 text-lg color-white rounded-m-2`}>{text}</button>
      
    // </div>
    <div className='w-50 bg-zinc-100 '>
        <div className='w-full h-32 bg-sky-200'>
            <img  src={image} alt="" />
        </div>
        <div className='w-full p-3 text-white'>
            <h3>{name}</h3>
            <h5>{proffession}</h5>
            <button onClick={()=>{handleFriends}} className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold'>{friends===true? "radd friends":"remove"}</button>
        </div>


    </div>
  )
}

export default Card

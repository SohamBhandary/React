import React, { useEffect } from 'react'

const Services = () => {
    useEffect(()=>{
        console.log("Component is created")
        return ()=>{console.log("delted")}
    })
  return (
    <div>
        <h1>Services</h1>
      
    </div>
  )
}

export default Services

import React, { useRef } from 'react'

const App = () => {
 const name=useRef(null)
 const age=useRef(null)
 const handleSubmit=(event)=>{event.preventDefault()
  console.log(name.current.value,age.current.value)
 }
  return (
    <div  className='p-4'>
      <form action="" onSubmit={handleSubmit}>
        <input  ref={name}type="text"  placeholder="name"/>
        <input  ref={age}  type="text"  placeholder="age"/>
        <input type="submit" />
      </form>
      
       
    </div>
  )
}
//useRef= iss tareeke mein hum har input ko slect kar ;ete haiand une and unki value tab nikalte hain jab form submit hota hai,,, kisibi html input ko select kar sakte hai
//comtrolledComponents
//react hook form

export default App

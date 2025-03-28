import React from 'react';
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();



  return (
    <div>
      <form onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register("name")} type="text" placeholder="Name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;

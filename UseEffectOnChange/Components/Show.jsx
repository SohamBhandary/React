import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const Show = () => {
    const [product, setProducts] = useState([]);

    const getProducts = () => {
      const api = "https://fakestoreapi.com/products";
      axios.get(api)
        .then(response => {
          console.log(response);
          setProducts(response.data);
        })
        .catch(err => console.log(err));
    };
    useEffect(()=>{
      getProducts()
    },[])
  return (
    <div>
         {/* <button onClick={getProducts} className='bg-blue-500 rounded-lg '>Call Api</button> */}
      <br />
      {/* <button onClick={addProducts} className='bg-green-500 rounded-lg '>Save</button> */}
      <hr className='my-10'/>
     
         <ul>
        {product.length > 0 ? product.map(p => (
          <li key={p.id} className='bg-green-500 text-white'>
            {p.title}
          </li>
        )) : <h1>Loading</h1>}
      </ul>
      
    </div>
  )
}

export default Show

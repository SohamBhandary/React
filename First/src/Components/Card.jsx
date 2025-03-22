import React from 'react';

const Card = () => {
  const data = [
    {
      name: 'mahiya ve',
      des: 'The name of the card will be displayed',
    },
    {
      name: 'mahiya ve1',
      des: 'The name of the card will be displayed',
    },
    {
      name: 'mahiya ve2',
      des: 'The name of the card will be displayed',
    },
  ];

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center flex-col gap-10 items-center'>
      {data.map((item, index) => (
        <div key={index} className='song w-60 px-3 py-2 bg-zinc-100 rounded'>
          <h3 className='font-semibold text-xl'>{item.name}</h3>
          <p className='text-xs mt-2'>{item.des}</p>
          <button onClick={()=>{alert("hey")}} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded'>
            Download now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;

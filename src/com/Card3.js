// 


import React from 'react';

export default function Card3({ title, img, des, over, con }) {
  return (
    <div className="bg-slate-300 w-100 h-full rounded overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <img className="w-full  h-[80%] object-cover bg-slate-100" src={img} alt={title} />
      <div className="px-4 py-4 flex flex-col justify-between h-48">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base overflow-hidden flex-grow">
          <p className="h-12 overflow-hidden">{over}</p>
          <p className="h-12 overflow-hidden">{des}</p>
          <p className="h-12 overflow-hidden">{con}</p>
        </div>
      </div>
    </div>
  );
}


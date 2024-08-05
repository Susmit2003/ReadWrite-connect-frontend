


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Card({ title, img, des, over, con, date,author ,like}) {
  return (
    // <div className="w-64 rounded overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
    //   <img className="w-full h-40 object-cover" src={img} alt={title} />
    //   <div className="px-4 py-4 flex flex-col justify-between h-48">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <div className="text-gray-700 text-base overflow-hidden flex-grow">
    //       <p className="h-12 overflow-hidden">{over}</p>
    //       <p className="h-12 overflow-hidden">{des}</p>
    //       <p className="h-12 overflow-hidden">{con}</p>
    //     </div>
    //   </div>
    // </div>
    <div className='m-5 w-64 shadow-sm bg-slate-100'>

        <div>
          <img className="w-64 rounded overflow-hidden"src={img}></img>
        </div>

        <div className=' mt-3'> <div className='px-2 text-[0.8rem] text-slate-50 ms-4 ml-[2%] rounded-xl bg-red-600 w-[fit-content]'>tech</div></div>
        <div className=' mt-3'><div className="w-64  overflow-hidden h-[fit-content] font-bold text-lg">{title} </div></div>
        <div className=' mt-3 '><div className="w-64 h-20  text-[0.8rem] rounded overflow-hidden"> {over}</div></div>

        <div className='w-[90%] bg-green-400 d-flex ms-1 mt-5 justify-between'>
        
        <div className=''>

        <div className='inline-block'><img className="inline-block w-8 m-2 h-8 text-[0.8rem] text-slate-50  rounded-[50%] w-8-[fit-content]" src={img}></img>
        
        <div className='inline-block ms-1 h-[100%]'>{author}</div>
        </div> 

       
        </div>

        <div><div className='inline-block mt-2'><FontAwesomeIcon icon={faHeart}  />{like}</div>
        <div className='inline-block mx-4'>view</div></div>
        
        </div>
        <div>{new Date(Number(date)).toString().slice(0, 10)}</div>
        

       

    </div>



  );
}


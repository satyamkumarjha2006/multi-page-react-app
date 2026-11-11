import React from 'react';
import { useState , useEffect } from 'react';
import { useLoaderData } from 'react-router';

function Github() {
     const data = useLoaderData()
   
     // useEffect(() => {
     //      fetch(`https://api.github.com/users/hiteshchoudhary`)
     //      .then((res) => res.json())
     //      .then((res) => setData(res))

     // },[])   

    return ( 
    <>
        <div className='bg-slate-950'>
        <h1 className='bg-gray-700 text-4xl font-bold text-center py-5'>Github Followers : {data.followers} </h1>
        <div className='flex justify-center'>
        <img src={data.avatar_url} width={400} height={400} />
         </div>
         </div>
        </>
     );
}

export default Github;


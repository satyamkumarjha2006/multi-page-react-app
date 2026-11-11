import React from 'react';
import { useParams } from 'react-router';
 
function User() {
    const {userId} = useParams()
    return ( 
        <div className='bg-slate-950'>
        <h1 className='text-transparent bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl py-50 text-center font-bold'>User : {userId}</h1>
        </div>
     );
}

export default User;
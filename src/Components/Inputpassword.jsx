import React from 'react'
import { useState } from 'react';

const Inputpassword = ({ label, placeholder }) => {

    const [showPassword, setShowPassword] = useState(false);


  return (
    <div>
       <div className='flex flex-col gap-2.5'>
        <label className='mt-2.5 text-responsive'>{label}</label>
        <div className='h-12 bg-white rounded-2xl items-center shadow-inner
        justify-between flex relative p-1.5'>
        <input
        type={showPassword ? 'text' : 'password'}
        placeholder={ placeholder }
        id='password' className='w-full text-responsive h-full focus:outline-none pl-2.5'/>
        <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
          <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
        </span>
        </div>
       </div>
    </div>
  )
}

export default Inputpassword
 
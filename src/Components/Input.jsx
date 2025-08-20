import React from 'react'

const Input = ({ label, placeholder, type, }) => {
  return (
    <div className='flex flex-col gap-2.5'>
        <label className='mt-2.5'>{ label }</label>
        <input type={ type } 
        placeholder={ placeholder }
        className='h-12 bg-white rounded-2xl items-center shadow-inner
        pl-2.5 border-none focus:outline-none'
      />
    </div>
  )
}

export default Input
import React from 'react'

const Sidemenu = ( { onToggle } ) => {
  return (
    <div className='sidebar hidden fixed bg-white w-56
     rounded-r-4xl h-screen flex-col pt-9 outline-2 outline-gray-500' id='sidebar'>
      <img src="../src/assets/cmlabs-logo-new.svg" alt="logo-cmlabs" />
      <button onClick={onToggle}>Toggle</button>
    </div>
  )
}

export default Sidemenu

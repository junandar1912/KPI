import React from 'react'

const TombolMenu = () => {

  return (
    <div className='flex flex-row gap-14 h-11 text-black font-public-sans'>
      <button className='bg-white  p-2 outline-1 rounded-sm
       outline-transparent shadow-lg shadow-[#00000040] h-10 w-28 flex flex-row gap-2 items-center justify-center'>
        <img src="../src/assets/upload.svg" alt="upload" /><p>Export</p>
      </button>
      <button className='bg-[#6DFF59] p-2 shadow-lg shadow-[#00000040] h-10 w-52 flex flex-row rounded-2xl'>
        <img src="../src/assets/icon2.svg" alt="" />
        <p>Tambah Karyawan</p>
      </button>
    </div>
  )
}

export default TombolMenu

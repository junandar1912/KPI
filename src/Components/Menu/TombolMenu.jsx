import React from 'react'

const TombolMenu = ({ FormData }) => {

  return (
    <div className='flex flex-row gap-14 h-11 text-black font-public-sans font-semibold'>
      <button className='bg-white  p-2 outline-1 rounded-sm cursor-pointer hover:shadow-gray-600
       outline-transparent shadow-lg shadow-[#00000040] h-10 w-28 flex flex-row gap-2 items-center justify-center'>
        <img src="../src/assets/upload.svg" alt="upload" /><p>Export</p>
      </button>
      <button className='bg-[#6DFF59] shadow-lg shadow-[#00000040] h-10 w-52 flex flex-row cursor-pointer
      rounded-2xl gap-2.5 justify-center items-center hover:shadow-gray-600' onClick={ FormData }>
        <i className='material-icons-outlined'>add</i>
        <p>Tambah Karyawan</p>
      </button>
    </div>
  )
}

export default TombolMenu

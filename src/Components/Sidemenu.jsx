import React from 'react'
import { Link } from 'react-router'

const Sidemenu = ({ TerlihatSidebar, tombolSidebar }) => {
  return (
    <main className={`fixed bg-white w-56 rounded-r-4xl h-screen flex-col pt-9 outline-1 ${TerlihatSidebar ? '' : 'hidden'} 
    p-1.5 gap-y-6
    `}>
      <div className='flex flex-row justify-between'>
        <img src="../src/assets/cmlabs-logo-new.svg" alt="logo-cmlabs" className='h-10 w-40'/>
        <button onClick={tombolSidebar} className='bg-[url("../src/assets/bottom-side.svg")] h-8 w-8 cursor-pointer'></button>
      </div>
      <button className='text-center w-full'>Main Menu</button>
      <ul className='justify-start flex flex-col gap-2.5 text-sm font-lato font-medium'>
        <li className='flex flex-row gap-2.5 h-5 items-center'>
          <i className='fa fa-address-card fa-regular text-[10px] text-gray-700'></i><p>Dashboard</p></li>
        <li className='flex flex-row gap-2.5 h-5 items-center'>
          <i className='fa fa-user fa-regular text-[10px] text-gray-700'></i><p>Data Divisi</p></li>
        <li className='flex flex-row gap-2.5 h-5 items-center'>
          <i className='material-icons-outlined text-[10px] text-gray-700'>equalizer</i><p>Matriks KPI</p></li>
        <li className='flex flex-row gap-2.5 h-5 items-center'>
          <i className='fa fa-star fa-regular text-[10px] text-gray-700'></i><p>Penilaian KPI</p></li>
        <li className='flex flex-row gap-2.5 h-5 items-center'>
          <i className='far fa-file-alt fa-regular text-[15px] text-gray-700'></i><p>Laporan KPI</p></li>
        <li className='flex flex-row gap-2.5 h-5 items-center'>
          <i className='fa fa-bell fa-regular text-[10px] text-gray-700'></i><p>Notifikasi</p></li>
      </ul>
    </main>
  )
}

export default Sidemenu

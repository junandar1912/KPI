import React from 'react'
import { Link } from 'react-router'

const Sidemenu = ({ isiSidebarTerlihat, tombolSidebar, setJudul }) => {
  return (
    <main className={`fixed bg-white w-56 rounded-r-4xl h-screen flex-col pt-9 outline-1 ${isiSidebarTerlihat ? '' : 'hidden'} 
    p-1.5 gap-y-6
    `}>
      <div className='flex flex-row justify-between'>
        <img src="../src/assets/cmlabs-logo-new.svg" alt="logo-cmlabs" className='h-10 w-40'/>
        <button onClick={tombolSidebar} className='bg-[url("../src/assets/bottom-side.svg")] h-8 w-8 cursor-pointer'></button>
      </div>
      <button className='text-center w-full mt-5 h-6 font-sans font-medium text-gray-600 cursor-pointer' onClick={() => setJudul("Menu")}>Main Menu</button>
      <ul className='justify-start flex flex-col gap-2.5 text-lg font-public font-normal text-gray-600 p-2.5 w-full pr-10'>
        <Link to="/DaftarKaryawan" onClick={()=> setJudul("Daftar Karyawan")}>
         <li className='flex flex-row gap-5 h-8 cursor-pointer hover:bg-[#FAFAFA] rounded-[10px] 
         hover:outline-1 items-center p-0.5 hover:text-black hover:font-semibold'>
           <i className='fa fa-address-card fa-regular h-5 w-2.5 text-gray-700 '></i><p>Data Karyawan</p>  
        </li>
        </Link>
        <Link to="/DaftarDivisi" onClick={()=> setJudul("Daftar Divisi")}>
        <li className='flex flex-row gap-5 h-8 cursor-pointer hover:bg-[#FAFAFA] rounded-[10px] 
        hover:outline-1 items-center p-0.5 hover:text-black hover:font-semibold'>
          <i className='fa fa-user fa-regular h-5 w-2.5 text-gray-700'></i><p>Data Divisi</p>
        </li>
        </Link>
        <Link to="/Matriks" onClick={()=> setJudul("Matriks")}>
        <li className='flex flex-row gap-6 h-8 cursor-pointer hover:bg-[#FAFAFA] rounded-[10px]
        hover:outline-1 items-center p-0.5 hover:text-black hover:font-semibold'>
          <i className='material-icons-outlined h-5 w-1.5 text-gray-700 hover:text-black'>equalizer</i><p>Matriks KPI</p>
        </li>
        </Link>
        <Link>
        <li className='flex flex-row gap-5 h-8 cursor-pointer hover:bg-[#FAFAFA] rounded-[10px]
        hover:outline-1 items-center p-0.5 hover:text-black hover:font-semibold'>
          <i className='fa fa-star fa-regular h-5 w-2.5 text-gray-700'></i><p>Penilaian KPI</p>
        </li>
        </Link>
        <Link to="/Laporan" onClick={()=> setJudul("Laporan")}>
        <li className='flex flex-row gap-5 h-8 cursor-pointer hover:bg-[#FAFAFA] rounded-[10px]
        hover:outline-1 items-center p-0.5 hover:text-black hover:font-semibold'>
          <i className='far fa-file-alt fa-regular h-5 w-2.5 text-gray-700'></i><p>Laporan KPI</p>
        </li>
        </Link>
        <Link to="/Notifikasi" onClick={()=> setJudul("Notifikasi")}>
        <li className='flex flex-row gap-5 h-8 cursor-pointer hover:bg-[#FAFAFA] rounded-[10px]
        hover:outline-1 items-center p-0.5 hover:text-black hover:font-semibold'>
          <i className='fa fa-bell fa-regular h-5 w-2.5 text-gray-700'></i><p>Notifikasi</p>
        </li>
        </Link>
      </ul>
    </main>
  )
}

export default Sidemenu

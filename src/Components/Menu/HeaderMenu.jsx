import React from 'react'
import Sidemenu from './Sidemenu'
import { Link } from 'react-router'

const HeaderMenu = ({activeJudul, TombolSidebar, isiSidebarTerlihat, MarginSidebar, setJudul }) => {



  return (
    <>
    <Sidemenu isiSidebarTerlihat={isiSidebarTerlihat} tombolSidebar={TombolSidebar} setJudul={setJudul} />
    <div className='bg-[#36C1FF] h-24 w-full p-5 rounded-b-4xl flex flex-row justify-between'>
      <div className='flex flex-row gap-5' onToggle={TombolSidebar} id='openSidebar'>
        <img src="../src/assets/bottom-side.svg" alt="button" onClick={TombolSidebar}
        className='h-13 w-13 bg-white rounded-4xl cursor-pointer'/>
        <h1 className={`text-white text-4xl font-Public-sans font-bold ${MarginSidebar ? 'ml-56' : 'ml-0'} `}>{activeJudul}</h1>
      </div>
      <div className='flex flex-row gap-5'>
        <Link to="/Notifikasi">
        <span className='h-13 w-13 text-white text-2xl p-1.5 cursor-pointer' 
        ><i className='fa fa-bell-o text-2xl'></i></span>
        </Link>
        <img src="../src/assets/logo-profil.svg" alt="Profil" className='h-13 w-13'/>
      </div>
    </div>
    </>
  )
}

export default HeaderMenu

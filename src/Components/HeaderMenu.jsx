import React, {useCallback} from 'react'
import Sidemenu from './Sidemenu'

const HeaderMenu = () => {

  
  const toggleSidebar = useCallback(() => {
    const sidebar = document.getElementById('sidebar')
    if (!sidebar) return
    sidebar.classList.toggle('hidden')
    sidebar.setAttribute('aria-hidden', sidebar.classList.contains('hidden') ? 'true' : 'false')
  }, [])

  return (
    <>
    
    <div className='bg-[#36C1FF] h-24 w-full p-5 rounded-b-4xl flex flex-row justify-between'>
      <div className='flex flex-row gap-5' onToggle={toggleSidebar} id='sidebar'>
        <img src="../src/assets/bottom-side.svg" alt="button" className='h-13 w-13 bg-white rounded-4xl' onClick={toggleSidebar}/>
        <h1 className='text-white text-4xl font-Public-sans font-bold'>Dashboard</h1>
      </div>
      <div className='flex flex-row gap-5'>
        <span className='h-13 w-13 text-white text-2xl p-1.5'><i className='fa fa-bell-o text-2xl'></i></span>
        <img src="../src/assets/logo-profil.svg" alt="Profil" className='h-13 w-13'/>
      </div>
    </div>
    <Sidemenu onToggle={toggleSidebar}/>
    </>
  )
}

export default HeaderMenu

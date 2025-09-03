import React, { useState, useCallback } from 'react'
import Sidemenu from '../Components/Menu/Sidemenu'
import HeaderMenu from '../Components/Menu/HeaderMenu';
import TombolMenu from '../Components/Menu/TombolMenu';


const Dasbord = () => {

  const [isSidebarTerlihat, setSidebarTidakterlihat] = useState (false);
  const [MarginSidebar, setMarginSidebar] = useState (false);
  const [activeJudul, setActiveJudul] = useState ('Dashboard');

  const TombolSidebar = useCallback(() => { 
    setSidebarTidakterlihat(prevState => !prevState)
    setMarginSidebar(prevState => !prevState)
  }, [])



  return (
    <div className='flex flex-col gap-8 h-min-screen w-full bg-[#FAFAFA]'>
      <HeaderMenu activeJudul={activeJudul} TombolSidebar={TombolSidebar} 
      isSidebarTerlihat={isSidebarTerlihat} MarginSidebar={MarginSidebar} setJudul={setActiveJudul} />
      <main className={`flex flex-col gap-8 p-11 h-min-screen ${MarginSidebar ? 'ml-56' : 'ml-0'}`}>
      <header className='flex flex-row justify-between items-center'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-semibold font-public-sans'>{activeJudul}</h1>
          <p className='font-public-sans font-extralight text-lg'>Mengelola Dan Melihat Informasi{activeJudul}</p>
        </div>
        <TombolMenu />
      </header>
      </main>
    </div>
  )
}

export default Dasbord;

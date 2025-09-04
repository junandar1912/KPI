import React, { useState, useCallback } from 'react'
import Sidemenu from '../Components/Menu/Sidemenu'
import HeaderMenu from '../Components/Menu/HeaderMenu';
import TombolMenu from '../Components/Menu/TombolMenu';
import NavMenu from '../Components/Menu/NavMenu';
import DaftarKaryawan from '../Components/Kolom-data/DaftarKaryawan';
import Karyawan from '../Components/FormPenambahan/Karyawan.jsx'


const Dasbord = () => {

  const [isSidebarTerlihat, setSidebarTidakterlihat] = useState (false);
  const [MarginSidebar, setMarginSidebar] = useState (false);
  const [activeJudul, setActiveJudul] = useState ('Dashboard');
  const [tombolForm, setTombolForm] = useState (false);
  const [hiddenForm, setHiddenForm] = useState (true);

  const TombolSidebar = useCallback(() => {  // side bar
    setSidebarTidakterlihat(prevState => !prevState)
    setMarginSidebar(prevState => !prevState)
  }, [])

  const TombolForm = useCallback(() => { // form tambah karyawan
    setTombolForm(prevState => !prevState)
    setHiddenForm(prevState => !prevState)
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
        <TombolMenu FormData={TombolForm} />
      </header>
      <NavMenu />
      <DaftarKaryawan />
      <Karyawan MunculForm={hiddenForm} FungsiSpan={TombolForm} />
      </main>
    </div>
  )
}

export default Dasbord;

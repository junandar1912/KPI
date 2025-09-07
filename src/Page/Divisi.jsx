import React, {useCallback, useState } from 'react';
import HeaderMenu from '../Components/Menu/HeaderMenu';
import NavMenu from '../Components/Menu/NavMenu';
import Sidemenu from '../Components/Menu/Sidemenu';
import TombolMenu from '../Components/Menu/TombolMenu';
import DaftarDivisi from '../Components/KolomTable-data/DaftarDIvisi';
import Divisi from '../Components/FormPenambahan/Divisi.jsx'
import Header from '../Components/Header';

const DasbordDivisi = () => {

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
      <HeaderMenu />
      <main className={`flex flex-col gap-8 p-11 h-min-screen ${MarginSidebar ? 'ml-56' : 'ml-0'}`}>
        <header className='flex flex-row justify-between items-center'> 
          <div className='flex flex-col gap-5'>
           <h1 className='text-2xl font-semibold font-public-sans'>Daftar Divisi</h1>
           <p className='font-public-sans font-extralight text-lg'>Mengelola Dan Melihat Informasi Divisi Di Seluruh Perusahaan</p>
          </div>
         <TombolMenu FormData={TombolForm}/>
        </header>
        <NavMenu />
        <DaftarDivisi/>
        <Divisi  MunculForm={hiddenForm} FungsiSpan={TombolForm}/>
      </main>
    </div>
  )
}

export default DasbordDivisi

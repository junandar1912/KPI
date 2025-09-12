import React, { useCallback, useState } from 'react'
import HeaderMenu from '../Components/Menu/HeaderMenu'
import Sidemenu from '../Components/Menu/Sidemenu'
import NavMenu from '../Components/Menu/NavMenu'
import InputPenambahan from '../Components/Menu/InputPenambahan'
import DaftarMatriks from '../Components/KolomTable-data/DaftarMatriks'

const Matriks = () => {

  const activeJudul = 'Matriks KPI'
  const [MarginSidebar, setMarginSidebar] = useState(false);
  const [isiSidebarTerlihat, setSidebarTidakterlihat] = useState(false);

  const TombolSidebar = useCallback(() => {
    setSidebarTidakterlihat((s) => !s);
    setMarginSidebar((s) => !s);
  }, [])


  return (
    <div className='flex flex-col gap-8 h-min-screen w-full bg-[#FAFAFA]'>
      <HeaderMenu
      activeJudul={activeJudul}
      TombolSidebar={ TombolSidebar }
      isiSidebarTerlihat={ isiSidebarTerlihat }
      MarginSidebar={ MarginSidebar }/>
      <main className={`flex flex-col gap-8 p-11 h-min-screen ${
        MarginSidebar ? 'ml-56' : 'ml-0'}`}>
        <Sidemenu/>
        <InputPenambahan/>
        <DaftarMatriks/>
        <NavMenu/>
        <InputPenambahan/>
      </main>
    </div>
  )
}

export default Matriks

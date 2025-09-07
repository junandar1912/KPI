import React from 'react'
import HeaderMenu from '../Components/Menu/HeaderMenu'
import Sidemenu from '../Components/Menu/Sidemenu'
import NavMenu from '../Components/Menu/NavMenu'
import InputPenambahan from '../Components/Menu/InputPenambahan'
import DaftarMatriks from '../Components/KolomTable-data/DaftarMatriks'

const Matriks = () => {
  return (
    <div className='flex flex-col gap-8 h-min-screen w-full bg-[#FAFAFA]'>
      <HeaderMenu/>
      <main className={`flex flex-col gap-8 p-11 h-min-screen`}>
        <InputPenambahan/>
        <DaftarMatriks/>
      </main>
    </div>
  )
}

export default Matriks

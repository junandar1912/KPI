import React from 'react'
import Input from '../Input'

const TambahDivisi = ({MunculForm, FungsiSpan}) => {
  return (
    <div className={`flex flex-col w-md bg-white rounded-lg pb-5 shadow-lg 
      absolute top-64 right-1/12 ${MunculForm ? 'hidden' : 'block'}`}>
      <header className='flex rounded-lg flex-row justify-between p-2.5 bg-[#36C1FF]'>
        <h1 className='text-white font-semibold text-2xl font-public-sans'>Form Tambah Data Karyawan</h1>
        <span className='text-white bg-red-600 w-6 h-6 rounded-4xl justify-center text-center p-1 flex
        cursor-pointer' onClick={ FungsiSpan }>
          <i className='fa fa-remove h-5 w-5'></i>
        </span>
      </header>
      <form action="" className='flex flex-col p-5'>
        <Input label="Nama Divisi" placeholder="Input Nama Divisi" type="text" />
        <Input label="Manager" placeholder="Input Nama Manager" type="text" />
        <Input label="Jumlah Anggota" placeholder="Input Jumlah Anggota" type="text" />
        <Input label="Tanggal Divisi Dibentuk" placeholder="Input Tanggal" type="text" /> 
      </form>
      <div className='flex flex-row gap-24 justify-center text-white'>
        <button className='bg-[#FF5151] h-9 w-32 rounded-lg'>Hapus</button>
        <button className='bg-blue-500 h-9 w-32 rounded-lg'>Simpan</button>
      </div>
    </div>
  )
}

export default TambahDivisi

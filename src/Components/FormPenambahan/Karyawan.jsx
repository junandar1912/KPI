import React from 'react'
import Input from '../Input'

const Karyawan = ({MunculForm, FungsiSpan}) => {
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
        <Input label="Nama Karyawan" placeholder="Input Nama Karyawan" type="text" />
        <Input label="Email" placeholder="Input Email" type="text" />
        <Input label="Divisi" placeholder="Input Divisi" type="text" />
        <Input label="Jabatan" placeholder="Input Jabatan" type="text" />
        <Input label="Tanggal Masuk" placeholder="Input Tanggal Masuk" type="text" />
        <div className='min-w-full h-28 flex flex-col justify-center items-center outline-1 outline-black'>
          <img src="../src/assets/icon-upload.svg" className='h-8 w-8' />
          <p>Upload Photo</p>
          <button className='bg-[#3EDD29] w-20 h-6 rounded-lg text-white cursor-pointer'>select file</button>
        </div>
      </form>
      <div className='flex flex-row gap-24 justify-center text-white'>
        <button className='bg-[#FF5151] h-9 w-32 rounded-lg'>Hapus</button>
        <button className='bg-blue-500 h-9 w-32 rounded-lg'>Simpan</button>
      </div>
    </div>
  )
}

export default Karyawan

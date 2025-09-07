import React from 'react'

const InputPenambahan = ( {setJudul} ) => {
  return (
    <main className='bg-white border-gray-500 border flex flex-row rounded-lg h-28 min-w-full'>
      <div className='flex flex-col gap-5 p-5 min-w-1/2'>
        <h1 className='text-2xl font-semibold font-public-sans'>{setJudul}</h1>
        <div className='flex flex-row gap-5'>
            <select>
                <option value="" className='flex flex-row justify-between items-center cursor-pointer'
                >Pilih Divisi</option>
                <option value="">Manager</option>
                <option value="">Staff</option>
                <option value="">Supervisor</option>
            </select>
            <select name="" id="">
              <option className='flex flex-row justify-between items-center cursor-pointer'>
                  Pilih Bulan
              </option>
              <option value="">Januari</option>
              <option value="">Febuari</option>
              <option value="">Maret</option>
              <option value="">April</option>
              <option value="">Mei</option>
              <option value="">Juni</option>
              <option value="">Juli</option>
              <option value="">Agustus</option>
              <option value="">September</option>
              <option value="">OKtober</option>
              <option value="">November</option>
              <option value="">Desember</option>
            </select>
        </div>
      </div>
      <div className='flex justify-center items-center flex-row gap-14
      text-white font-public-sans font-semibold text-lg'>
        <button className='bg-[#2BDD13] p-2.5 rounded-lg '>
            <img src="" alt="" />
            Tambah Matriks KPI
        </button>
        <button className='bg-red-500 p-2.5 rounded-lg' >
            <img src="" alt="" />
            Hapus
        </button>
        <button className='bg-blue-500 p-2.5 rounded-lg' >
            <img src="" alt="" />
            Simpan
        </button>
      </div>
    </main>
  )
}

export default InputPenambahan

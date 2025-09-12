import React from 'react'

const InputPenambahan = ( {setJudul} ) => {
  return (
    <main className='bg-white border-gray-500 border flex flex-row rounded-lg h-28 min-w-full'>
      <div className='flex flex-col gap-5 p-5 min-w-2/3'>
        <h1 className='text-2xl font-semibold font-public-sans'>{setJudul}</h1>
        <div className='flex flex-row gap-5'>
            <select className='w-72 p-1 rounded-2xl outline-1 outline-gray-600'>
                <option value="" className='flex flex-row justify-between items-center cursor-pointer'
                >Pilih Divisi</option>
                <option value="">Manager</option>
                <option value="">Staff</option>
                <option value="">Supervisor</option>
            </select>
            <select className='w-72 p-1 rounded-2xl outline-1 outline-gray-600'>
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
      <div className='flex justify-between items-center flex-row gap-14
      text-white font-public-sans font-semibold text-lg'>
        <button className='bg-[#2BDD13] p-2.5 rounded-lg flex flex-row gap-3.5 shadow-gray-600 shadow-lg hover:shadow-gray-800'>
            <span><i className='material-icons-outlined'>add</i></span>
            Tambah Matriks KPI
        </button>
        <button className='bg-red-500 p-2.5 rounded-lg flex flex-row gap-3.5 shadow-gray-600 shadow-lg hover:shadow-gray-800' >
            <img src="../src/assets/sampah.svg" alt="" />
            Hapus
        </button>
        <button className='bg-blue-500 p-2.5 rounded-lg flex flex-row gap-3.5 shadow-gray-600 shadow-lg hover:shadow-gray-800' >
            <img src="../src/assets/Download.svg" alt="" />
            Simpan
        </button>
      </div>
    </main>
  )
}

export default InputPenambahan

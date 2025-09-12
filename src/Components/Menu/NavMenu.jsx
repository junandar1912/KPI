import React from 'react'

const NavMenu = ({
  visible = true,
  filters = { q: '', division: '', jabatan: '', month: '' },
  onChange = () => {},
  onReset = () => {},
}) => {
  if (!visible) return null;

  return (
    <div className='h-28 w-full bg-white rounded-xl outline-1 outline-gray-600 p-4 gap-2.5 flex flex-col'>
      <header className='flex flex-row gap-3.5 text-lg font-public-sans font-semibold'>
        <img src="../src/assets/Vector.svg" alt="" className='cursor-pointer'/>
        <h1>Pencarian & Filter</h1>
      </header>

      <div className='flex flex-row gap-5 justify-center items-center text-lg text-black font-extralight font-public-sans'>
        <input
          type="text"
          placeholder="Masukan Nama Karyawan,ID,Jabatan..."
          className="bg-[#00000040] h-9 w-2/5 p-1.5 outline-1 outline-gray-600 rounded-lg"
          value={filters.q}
          onChange={(e)=>onChange({ ...filters, q: e.target.value })}
        />

        <select
          className='h-9 w-1/6 outline-1 outline-gray-400 rounded-lg p-1.5'
          value={filters.division}
          onChange={(e)=>onChange({ ...filters, division: e.target.value })}
        >
          <option>Pilih Divisi</option>
          <option>Accounting</option>
          <option>Data Analisis</option>
          <option>Digital Marketing</option>
          <option>Finance</option>
          <option>HRD</option>
          <option>Web Development</option>
        </select>

        <select
          className='h-9 w-1/6 outline-1 outline-gray-400 rounded-lg p-1.5'
          value={filters.jabatan}
          onChange={(e)=>onChange({ ...filters, jabatan: e.target.value })}
        >
          <option>Pilih Jabatan</option>
          <option>Manager</option>
          <option>Staff</option>
          <option>Suverpasior</option>
        </select>

        <select
          className='h-9 w-1/6 outline-1 outline-gray-400 rounded-lg p-1.5'
          value={filters.month}
          onChange={(e)=>onChange({ ...filters, month: e.target.value })}
        >
          <option>Pilih Bulan</option>
          <option>Januari</option><option>Febuari</option><option>Maret</option>
          <option>April</option><option>Mei</option><option>Juni</option>
          <option>Juli</option><option>Agustus</option><option>September</option>
          <option>OKtober</option><option>November</option><option>Desember</option>
        </select>

        {/* Toggle Reset → mengembalikan seperti semula */}
        <button
          className='w-[107px] outline-gray-400 outline-1 rounded-lg h-9 bg-white flex flex-row gap-2 justify-center items-center cursor-pointer'
          onClick={onReset}
          type="button"
        >
          <img src="../src/assets/Reset.svg" alt="" />
          Reset filter
        </button>
      </div>
    </div>
  )
}

export default NavMenu

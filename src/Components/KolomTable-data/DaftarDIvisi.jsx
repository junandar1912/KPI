import React from "react";
import iconEdit from "../../assets/edit.svg"



const DaftarDivisi= ({data}) => {
  return (
    <div>
      <table className="min-w-full table-fixed border-collapse h-auto">
        <thead className='w-full'>
          <tr className='h-12'>
            <th className="p-2.5 w-16 border-gray-300 bg-[#EAECF0] rounded-tl-lg">
              <img src="../src/assets/checkbox.svg" alt="" className='h-10 w-10'/>
            </th>
            <th className='p-2 w-[20%] gap-2.5 text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                ID Divisi
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                Divisi
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                Manager
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                Tanggal Dibuat
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className='inline-flex items-center gap-2.5'>
                Jumlah Anggota
                <img src="../src/assets/iconPanah.svg" className='h-2 w-2' />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                Tampilkan Anggota
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2.5 w-16 text-center text-sm font-medium text-gray-500 border-gray-300 bg-[#EAECF0] rounded-tr-lg'>
              Edit
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((employee) => (
            <tr key={employee.IdDivisi} className="hover:bg-gray-50">
              <td className="p-2.5 w-16 whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                <input type='checkbox' />
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.IdDivisi}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.division}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.manager}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.createDate}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-gray-900 text-center border-b border-gray-300">
                {employee.jumlahAnggota}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-gray-900 text-center border-b border-gray-300">
                 <img src="../src/assets/list.svg" alt="" />
              </td>
              <td className="p-2.5 w-[20%] whitespace-nowrap text-sm text-gray-900 border-b border-gray-300">
                <img src={iconEdit} className='cursor-pointer h-5 w-10'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarDivisi;

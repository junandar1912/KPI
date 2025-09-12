import React from 'react';
import iconEdit from "../../assets/edit.svg"



const Karyawan= ({ data }) => {
  return (
    <div>
      <table className="min-w-full table-fixed border-collapse">
        <thead className='w-full'>
          <tr className='h-12'>
            <th className="p-2.5 w-16 border-gray-300 bg-[#EAECF0] rounded-tl-lg">
              <img src="../src/assets/checkbox.svg" alt="" className='h-10 w-10'/>
            </th>
            <th className='p-2 w-[20%] gap-2.5 text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                ID Karyawan
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                Nama Karyawan
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
                Jabatan
                <img src="../src/assets/iconPanah.svg" alt="" className="h-2 w-2" />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className='inline-flex items-center gap-2.5'>
                Tanggal Masuk
                <img src="../src/assets/iconPanah.svg" className='h-2 w-2' />
              </span>
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              <span className="inline-flex items-center gap-2.5">
                Status
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
            <tr key={employee.idUser} className="hover:bg-gray-50">
              <td className="p-2.5 w-16 whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                <input type='checkbox' />
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.idUser}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.nameUser}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.description}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.position}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-gray-900 text-center border-b border-gray-300">
                {employee.joinDate}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-gray-900 text-center border-b border-gray-300">
                 <span className={`px-2 py-1 rounded text-xs font-medium ${
                  employee.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-600 text-black"
                }`}>
                  {employee.status}
                </span>
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

export default Karyawan;

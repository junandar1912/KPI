import React from "react";
import iconEdit from "../../assets/edit.svg"

const data = [
  { idDivisi: "EMP-001",
    Manager: "Ayu Kartika",
    division: "Finance",
    CreateDate: "Analis Keuangan",
    JumlahAnggota: "2023-02-14",
    status: "Active",},
    { idDivisi: "EMP-001",
    Manager: "Ayu Kartika",
    division: "Finance",
    CreateDate: "Analis Keuangan",
    JumlahAnggota: "2023-02-14",
    status: "Active",}
];

const DaftarMatriks= () => {
  return (
    <div>
      <table className="min-w-full table-fixed border-collapse">
        <thead className='w-full'>
          <tr className='h-12'>
            <th className="p-2.5 w-16 border-gray-300 bg-[#EAECF0] rounded-tl-lg">
              No
            </th>
            <th className='p-2 w-[20%] gap-2.5 text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              Indikator
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              DesKripsi
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              Bobot (w)
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              Target
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              Realisasi
            </th>
            <th className='p-2 w-[20%] text-gray-500 font-semibold text-sm bg-[#EAECF0]'>
              Score Pencapaian (A = (Realisasi/Target) x 100)
            </th>
            <th className='p-2.5 w-16 text-center text-sm font-medium text-gray-500 border-gray-300 bg-[#EAECF0] rounded-tr-lg'>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="p-2.5 w-16 whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                <input type='checkbox' />
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.idDivisi}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.division}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.Manager}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-center text-gray-900 border-b border-gray-300">
                {employee.CreateDate}
              </td>
              <td className="p-2 w-[20%] whitespace-nowrap text-sm text-gray-900 text-center border-b border-gray-300">
                {employee.JumlahAnggota}
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

export default DaftarMatriks;

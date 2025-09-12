import React from 'react'

const DaftarMatriks = () => {

  const rows = [1, 2]; // contoh 2 baris awal

  const Input = ({ placeholder = "Input..." }) => (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border-gray-300 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-400 border-0"
    />
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-fixed border border-gray-300">
        <colgroup>
          <col className="w-14" />     {/* No */}
          <col className="w-56" />     {/* Indikator */}
          <col className="w-[28rem]" />{/* Deskripsi */}
          <col className="w-28" />     {/* Bobot */}
          <col className="w-28" />     {/* Target */}
          <col className="w-28" />     {/* Realisasi */}
          <col className="w-64" />     {/* Score Pencapaian */}
          <col className="w-64" />     {/* Nilai Pencapaian */}
          <col className="w-16" />     {/* Aksi */}
        </colgroup>

        <thead className="bg-gray-100">
          <tr>
            {[
              "No",
              "Indikator",
              "Deskripsi",
              "Bobot (W)",
              "Target",
              "Realisasi",
              "Score Pencapaian (A = (Realisasi / Target) × 100)",
              "Nilai Pencapaian ((W × A) × 100)",
              "Aksi",
            ].map((h, i) => (
              <th
                key={i}
                className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-700 align-middle whitespace-normal break-words"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          {rows.map((n) => (
            <tr key={n} className="even:bg-gray-50">
              <td className="border border-gray-200 px-3 py-2 align-top text-sm text-gray-700">
                {n}.
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top">
                <Input />
              </td>

              <td className="border border-gray-200 px-3 py-2 align-top text-sm">
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DaftarMatriks

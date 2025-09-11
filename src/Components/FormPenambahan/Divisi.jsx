// Components/FormPenambahan/Divisi.jsx
import Input from '../Input';

const TambahDivisi = ({ MunculForm, FungsiSpan, HandleOnSubmit, formData, handleChange }) => {
  return (
    <div className={`flex flex-col w-md bg-white rounded-lg pb-5 shadow-lg absolute top-64 right-1/12 ${MunculForm ? 'hidden' : 'block'}`}>
      <header className='flex rounded-lg flex-row justify-between p-2.5 bg-[#36C1FF]'>
        <h1 className='text-white font-semibold text-2xl font-public-sans'>Form Tambah Data Karyawan</h1>
        <span className='text-white bg-red-600 w-6 h-6 rounded-4xl justify-center text-center p-1 flex cursor-pointer' onClick={FungsiSpan}>
          <i className='fa fa-remove h-5 w-5'></i>
        </span>
      </header>

      <form onSubmit={HandleOnSubmit} className='flex flex-col p-5'>
        <Input
          label="Nama Divisi"
          placeholder="Input Nama Divisi"
          type="text"
          name="division"
          value={formData.division}
          onChange={handleChange}
          required
        />
        <Input
          label="Manager"
          placeholder="Input Nama Manager"
          type="text"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
          required
        />
        <Input
          label="Jumlah Anggota"
          placeholder="Input Jumlah Anggota"
          type="number"
          name="jumlahAnggota"
          min="0"
          value={formData.jumlahAnggota}
          onChange={handleChange}
          required
        />
        <Input
          label="Tanggal Divisi Dibentuk"
          placeholder="Pilih Tanggal"
          type="date"
          name="createDate"
          value={formData.createDate}
          onChange={handleChange}
          required
        />

        <div className='flex flex-row gap-24 justify-center text-white mt-10'>
          <button type='button' className='bg-[#FF5151] h-9 w-32 rounded-lg'>Hapus</button>
          <button type='submit' className='bg-blue-500 h-9 w-32 rounded-lg'>Simpan</button>
        </div>
      </form>
    </div>
  );
};

export default TambahDivisi;

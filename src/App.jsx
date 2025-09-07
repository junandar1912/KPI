import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Page/Login';
import Registrasi from './Page/Registrasi';
import LupaPassword from './Page/LupaPassword';
import PasswordBaru from './Page/PasswordBaru';
import DaftarKaryawan from './Page/Karyawan.jsx';
import DaftarDivisi from './Page/Divisi.jsx';
import Laporan from './Page/Laporan.jsx';
import Notifikasi from './Page/Notifikasi.jsx';
import Matriks from './Page/Matriks.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lupa-password" element={<LupaPassword />} />
      <Route path="/register" element={<Registrasi />} />
      <Route path="/password-baru" element={<PasswordBaru />} />
      <Route path="/DaftarKaryawan" element={<DaftarKaryawan/>}/>
      <Route path='/DaftarDivisi' element={<DaftarDivisi/>}/>
      <Route path='/Laporan' element={<Laporan/>}/>
      <Route path='/Notifikasi' element={<Notifikasi/>}/>
      <Route path='/Matriks' element={<Matriks/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

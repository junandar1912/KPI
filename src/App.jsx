import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Page/Login';
import Registrasi from './Page/Registrasi';
import LupaPassword from './Page/LupaPassword';
import PasswordBaru from './Page/PasswordBaru';
import Dasbord from './Page/Dasbord';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lupa-password" element={<LupaPassword />} />
      <Route path="/register" element={<Registrasi />} />
      <Route path="/password-baru" element={<PasswordBaru />} />
      <Route path="/Menu" element={<Dasbord/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Page/Login';
import Registrasi from './Page/Registrasi';
import LupaPassword from './Page/LupaPassword';
import PasswordBaru from './Page/PasswordBaru';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<LupaPassword />} />
      <Route path="/register" element={<Registrasi />} />
      <Route path="/new-password" element={<PasswordBaru />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

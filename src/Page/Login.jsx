import React, { useState } from 'react';
import { Link } from 'react-router';
import Header from '../Components/Header';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx';
import Inputpassword from '../Components/Inputpassword.jsx';
import Logo from '../Components/Logo.jsx';


const InputData = [
  {
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
];

const InputPasswordData = [
  {
    label: "Password",
    placeholder: "Enter your password"
  }
];

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        // Menyimpan token dan informasi pengguna di localStorage
        localStorage.setItem('authToken', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));

        console.log('Login berhasil');
        alert(`Selamat datang, ${data.data.user.name}!`);

        // Arahkan ke dashboard
        window.location.href = '/dashboard';
      } else {
        console.error('Login gagal:', data.errors);

        // Menangani berbagai jenis kesalahan
        if (data.errors.credentials) {
          alert('Email atau password salah!');
        } else if (data.errors.email && data.errors.email[0].includes('verify')) {
          const resend = confirm('Email belum diverifikasi. Kirim ulang email verifikasi?');
          if (resend) {
            resendVerification(email);
          }
        }
      }
    } catch (error) {
      console.error('Kesalahan jaringan:', error);
      alert('Terjadi kesalahan jaringan. Silakan coba lagi.');
    }
  };





  return (
    <>
      <div className='min-h-screen bg-gradient-to-r from-[#77CEf38c] via-[#CDF5FD] to-[#00A9FF]'>
        <Header />
        <main className='bg-transparent pt-10 rounded-tl-[50px] flex flex-row justify-center'>
          <div className='hidden lg:block'>
            <Logo/>
          </div>
          <div className='flex flex-row justify-center h-auto p-5
          w-full md:w-2/6 items-center'>
            <form className='flex flex-col gap-2.5 h-full w-full shadow-inner rounded-4xl p-7 bg-[#CDF5FD]' 
            onSubmit={(e) => {
              e.preventDefault();
              loginUser();
            }}
            >
              <header className='flex flex-col self-start gap-10'>
                <h1 className='font-inter font-bold text-header-reponsive'>Login</h1>
                <p className='font-lato text-header-reponsive2 text-[Black-900 (#1A1A1A)]'>Selamat Datang Kembali</p>
              </header>
              <div>
                {InputData.map((input, index) => (
                  <Input
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    type={input.type}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ))}
                <Inputpassword
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className='text-right m-4'>
                <Link to="/lupa-password" className='font-lato text-blue-500 cursor-pointer'>
                  Lupa Password?
                </Link>
                </p>
                <div className='flex flex-col gap-5'>
                <Button
                  text="Login"
                  color="bg-blue-500"
                />
                <Button
                  text="Login Dengan Akun Google"
                  color="bg-[#333333]"
                  image="../src/assets/Google.svg"
                />
                </div>
              </div>
              <p className='font-lato font-medium text-responsive text-[Black-900 (#1A1A1A)] self-center mt-2.5'>Belum Punya Akun?{' '}   
                <Link to="/register" className='text-blue-500 ml-1.5 cursor-pointer'>Daftar Disini</Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};


export default Login;

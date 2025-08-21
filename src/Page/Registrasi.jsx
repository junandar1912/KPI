import React from 'react';
import { Link } from 'react-router';
import Header from '../Components/Header';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx';
import Logo from '../Components/Logo.jsx';
import Inputpassword from '../Components/Inputpassword.jsx';

const InputData = [
  {
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
];

const InputPasswordData = [
  {
    label: "Password",
    placeholder: "Enter your password"
  }
];

const Registrasi = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-r from-[#77CEf38c] via-[#CDF5FD] to-[#00A9FF]'>
        <Header />
        <main className='bg-transparent pt-10 rounded-tl-[50px] flex flex-row justify-center'>
          <div className='hide-850'>
            <Logo/>
          </div>          
          <div className='flex flex-row justify-center h-auto p-5 
          w-full md:w-2/6 items-center'>
            <form className='flex flex-col gap-2.5 h-full w-full shadow-inner rounded-4xl p-7 bg-[#CDF5FD]'>
              <header className='flex flex-col self-start gap-10'>
                <h1 className='font-inter font-bold text-5xl'>Registrasi</h1>
                <p className='font-lato text-2xl text-[Black-900 (#1A1A1A)]'>Selamat Datang Kembali</p>
              </header>
              <div>
                {InputData.map((input, index) => (
                  <Input
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    type={input.type}
                    value={input.value}
                    onChange={input.onChange}
                  />
                ))}
                {InputPasswordData.map((input, index) => (
                  <Inputpassword
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                  />
                ))}
              </div>
              <div className='self-end m-2.5'>
                <Link to="/forgot-password" className='font-lato text-base text-blue-500 cursor-pointer'>
                  Lupa Password?
                </Link>
              </div>
              <div className='flex flex-col gap-5'>
                <Button
                  text="Registrasi"
                  color="bg-blue-500"
                />
                <Button
                  text="Daftar Dengan Akun Google"
                  color="bg-[#333333]"
                  image="../src/assets/Google.svg"
                />
              </div>
              <p className='font-lato font-medium text-responsive text-[Black-900 (#1A1A1A)] self-center mt-2.5'>Sudah Punya Akun ?   
                <Link to="/" className='text-blue-500 ml-1.5 cursor-pointer'>Login Disini</Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};


export default Registrasi;

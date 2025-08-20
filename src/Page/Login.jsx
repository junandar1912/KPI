import React from 'react';
import { Link } from 'react-router';
import Header from '../Components/Header';
import Button from '../Components/Button.jsx';
import Input from '../Components/Input.jsx';
import Inputpassword from '../Components/Inputpassword.jsx';

const InputData = [
  {
    label: "Username",
    placeholder: "Enter your username",
    type: "taxt",
  },
];

const InputPasswordData = [
  {
    label: "Password",
    placeholder: "Enter your password"
  }
];

const Login = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-r from-[#77CEf38c] via-[#CDF5FD] to-[#00A9FF]'>
        <Header />
        <main className='bg-transparent p-10 rounded-tl-[50px] flex flex-row justify-center'>
          <div className='flex flex-col gap-8 w-full justify-center items-center'>
            <img
              src="../src/assets/cmlabs-login-icon.svg"
              alt="logo-login"
              className='h-[542px] w-[532px]'
            />
            <p className='font-raleway italic font-bold text-4xl text-chart-3 text-right'>
              Masuk Dengan Aman <br /> Kelola Dengan Percaya Diri
            </p>
          </div>
          <img
            src="../src/assets/cmlabs-logo.svg"
            alt="logo-app"
            className="h-[272px] w-[272px] self-center"
          />
          <div className='flex flex-row justify-center h-auto pl-14 pr-14 w-full items-center'>
            <form className='flex flex-col gap-2.5 h-full w-full shadow-inner rounded-4xl p-7 bg-[#CDF5FD]'>
              <header className='flex flex-col self-start gap-10'>
                <h1 className='font-inter font-bold text-5xl'>Login</h1>
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
                <Inputpassword
                  label="Password"
                  placeholder="Enter your password"
                />
                <p className='text-right m-4'>
                <Link to="/forgot-password" className='font-lato text-blue-500 cursor-pointer'>
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
              <p className='font-lato text-base text-[Black-900 (#1A1A1A)] self-center mt-2.5'>Belum Punya Akun?   
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

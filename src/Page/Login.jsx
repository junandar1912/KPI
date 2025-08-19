import React from 'react'
import Header from '../Components/Header'
import LoginForm from '../form/LoginForm.jsx';

const LoginFormData = {
  judul: "Login"
}

const Login = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-r from-[#77CEf38c] via-[#CDF5FD] to-[#00A9FF]'>
     <Header />
       <main className='bg-transparent p-10 rounded-tl-[50px] 
       flex flex-row justify-center'>
        <div className='flex flex-col gap-8 w-full justify-center items-center'>
          <img src="../src/assets/cmlabs-login-icon.svg" alt="logo-login" 
          className='h-[542px] w-[532px]'/>
          <p className='font-raleway italic font-bold text-4xl text-chart-3 text-right'>
            Masuk Dengan Aman <br /> Kelola Dengan Percaya Diri</p>
        </div>
        <img src="../src/assets/cmlabs-logo.svg" alt="logo-app" 
          className="h-[272px] w-[272px] self-center" />
        <div className='flex flex-row justify-center h-auto 
        pl-14 pr-14 w-full items-center'>
          <LoginForm {...LoginFormData} />
        </div>
       </main>
    </div>
    </>
  )
}

export default Login

import React from 'react'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'

const InputData = [{
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
}]


const LupaPassword = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-[#77CEf38c] via-[#CDF5FD] to-[#00A9FF] '>
      <Header />
      <main className='flex flex-col items-center min-auto-screen w-auto pt-28'>
        <img src="../src/assets/Lupa.svg" alt="logo lupa" 
        className='absolute right-[14%] top-[13%] h-[800px]'/>
        <div className="w-[32%] h-[472px] 
        bg-white/30 shadow-[inset_40.2333px_-40.2333px_40.2333px_rgba(165,_165,_165,_0.1)] 
        backdrop-blur-md rounded-[49px] p-12">
         <header className='flex flex-col self-start gap-10'>
            <h1 className='font-inter font-bold text-5xl'>Lupa Password ?</h1>
            <p className='font-lato text-2xl text-[Black-900 (#1A1A1A)]'>Masukan Email untuk mengirim kode verifikasi</p>
         </header>
            <div className='flex flex-col gap-5 mt-10'>
                {InputData.map((input, index) => (
                <Input
                    label={input.label}
                    type={input.type}
                    placeholder={input.placeholder}
                />
                ))}
            </div>
            <div className='flex flex-col gap-5 mt-10'>
                <Button
                    text="Kirim Kode Verifikasi"
                    color="bg-blue-500"
                />
            </div>
            <p className='text-center mt-8'>Sudah ingat akunmu?<a href="/" className='text-blue-500'>Login Disini</a></p>
        </div>
        <img src="../src/assets/cmlabs-separator-logo.svg" alt="logo" className='h-28 mt-8'/>
      </main>
    </div>
  )
}

export default LupaPassword

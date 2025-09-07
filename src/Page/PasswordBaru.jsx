import React, { useState } from 'react'
import Header from '../Components/Header'
import Inputpassword from '../Components/Inputpassword'
import Button from '../Components/Button'
import { Link } from 'react-router'


const PasswordBaru = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (data.status === 'success') {
        console.log('Reset link sent');
        alert('Link reset password telah dikirim ke email Anda. Link akan expired dalam 10 menit.');
      } else {
        console.error('Failed:', data.errors);
        if (data.errors.email) {
          alert(data.errors.email[0]);
        }
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };






  return (
    <div className='min-h-screen bg-gradient-to-r from-[#77CEf38c] via-[#CDF5FD] to-[#00A9FF] '>
      <Header />
      <main className='flex flex-col items-center min-auto-screen w-auto pt-28'>
        <img src="../src/assets/Lupa.svg" alt="logo lupa" 
        className='absolute right-[14%] top-[13%] h-[800px]'/>
        <div className="w-[32%] h-[580px] 
        bg-white/30 shadow-[inset_40.2333px_-40.2333px_40.2333px_rgba(165,_165,_165,_0.1)] 
        backdrop-blur-md rounded-[49px] p-12">
         <header className='flex flex-col self-start gap-10'>
            <h1 className='font-inter font-bold text-5xl'>Lupa Password ?</h1>
            <p className='font-lato text-2xl text-[Black-900 (#1A1A1A)]'>Masukan Email untuk mengirim kode verifikasi</p>
         </header>
            <div className='flex flex-col gap-5 mt-10'>
              <Inputpassword
              label="Email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />      
            </div>
            <div className='flex flex-col gap-5 mt-10'>
                <Button text="Simpan Perubahan" color="bg-[#3EDD29]" onClick={handleSubmit}/>
            </div>
            <p className='text-center mt-8'>Sudah ingat akunmu?<Link href="" className='text-blue-500'>Login Disini</Link></p>
        </div>
        <img src="../src/assets/cmlabs-separator-logo.svg" alt="logo" className='h-28 mt-8'/>
      </main>
    </div>
  )
}

export default PasswordBaru;

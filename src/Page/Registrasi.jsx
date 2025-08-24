import React, {useState} from 'react';
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    
    const data = await response.json();
    
    if (data.status === 'success') {
      console.log('Registration successful:', data);
      alert('Akun berhasil dibuat! Cek email Anda untuk verifikasi.');
      // Redirect ke halaman info verifikasi atau login
      window.location.href = '/verify-notice';
    } else {
      console.error('Registration failed:', data.errors);
      handleValidationErrors(data.errors);
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Terjadi kesalahan jaringan. Silakan coba lagi.');
  }
};

// Handle validation errors
const handleValidationErrors = (errors) => {
  Object.keys(errors).forEach(field => {
    const errorMessages = errors[field];
    // Display error untuk setiap field
    document.getElementById(`error-${field}`).textContent = errorMessages[0];
  });
};









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
            <form className='flex flex-col gap-2.5 h-full w-full shadow-inner rounded-4xl p-7 bg-[#CDF5FD]'
            onSubmit={(e) => {
              e.preventDefault();
              registerUser(name, email, password);
            }}
            >
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
                    value={input.label === 'Username' ? name : email} // untuk label
                    onChange={(e) => {
                    if (input.label === 'Username') {
                      setName(e.target.value); // Update name
                    } else {
                      setEmail(e.target.value); // Update email
                    }
                  }}
                  />
                ))}
                {InputPasswordData.map((input, index) => (
                  <Inputpassword
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

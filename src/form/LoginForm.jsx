import React from 'react'
import Input from '../Components/Input.jsx';
import Inputpassword from '../Components/Inputpassword.jsx';


const InputData = [{
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
   
}, {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
   
}]

const InputPasswordData = [{
    label: "Password",
    placeholder: "Enter your password"
}]




const RegisForm = ({ judul }) => {
  return (
    <form className='flex flex-col h-full w-full shadow-inner
    rounded-4xl p-7 bg-[#CDF5FD]'>
      <header className='flex flex-col self-start gap-10'>
        <h1 className='font-inter font-bold text-5xl'>{ judul }</h1>
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
      <div>
        
      </div>
    </form>
  )
}

export default RegisForm

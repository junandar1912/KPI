import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-row lg:gap-40'>
      <div className='flex flex-col gap-8 w-full justify-center items-center'>
        <img
         src="../src/assets/cmlabs-login-icon.svg"
         alt="logo-login"
         className='h-[542px] w-[532px]'/>
         <p className='font-raleway italic font-bold lg:text-4xl text-chart-3 text-right'>
            Masuk Dengan Aman <br /> Kelola Dengan Percaya Diri
         </p>
        </div>
      <img
       src="../src/assets/cmlabs-logo.svg"
       alt="logo-app"
       className="h-[272px] w-[272px] self-center"/>
    </div>
  )
}

export default Logo

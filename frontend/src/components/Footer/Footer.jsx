import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer mt-[100px] flex text-[#d9d9d9] flex-col items-center gap-5 p-5 pt-20 bg-[#323232]' id='footer'>
      <div className='Footer-content w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr]'>
 <div className="footercontentleft   flex flex-col items-start gap-5   pl-5">
<img src={assets.logo} className='def  bg-white  relative bottom-7' height={100} width={100} alt="" />
<p className='text-2xl  text-[#a4a3a3]  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nam facere quibusdam iste perspiciatis, iure illo nihil sit ad vel ipsa adipisci deserunt fuga esse sint, blanditiis dolorem tempore quisquam!</p>
<div className="footersocialicon  flex ">
    <img src={assets.facebook} className='bcd cursor-pointer'  height={80} width={80} alt="" />
    <img src={assets.linkdin} className='bcd cursor-pointer'  height={80} width={80} alt="" />
    <img src={assets.x} className='bcd cursor-pointer'  height={80} width={80}  alt="" />
</div>
 </div>
    <div className="footercontentcenter  flex flex-col items-start gap-5     ">
        <h2 className='text-4xl'>COMPANY</h2>
        <ul className='list-disc list-inside cursor-pointer  text-[#a4a3a3]'>
        <li>Home</li>
        <li>ABOUT US</li>
        <li>DELIVERY</li>
        <li>PRIVACY POLICY</li>
        </ul>
    </div>
 <div className="footercontentright  flex flex-col items-start gap-5  ">
    <h2 className='text-4xl'>
        GET IN TOUCH
    </h2>
    <ul className='list-disc list-inside cursor-pointer text-[#a4a3a3]'>
        <li>+91-123-456-789</li>
        <li>contact@flavorfiesta.com</li>
    </ul>
 </div>
      </div>
      <hr className='w-full h-0.5 m-4 bg-gray-600 border-none' />
      <p className="footercoppywrite text-2xl text-[#a4a3a3]">
        Copywrite 2025 flavorfiesta.com - All Rights Reserved.
      </p>
   
    </div>
  )
}

export default Footer

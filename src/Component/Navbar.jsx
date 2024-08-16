import React from 'react';

const Navbar = () => {
    return (
      <div className='px-[50px] flex justify-between bg-black h-[50px] items-center'>
        <div className='text-[#fa6e01] text-3xl '>Logo</div>
        <div className='flex'>
            <div className='mx-7 text-[#959595] hover:text-[#fa6e01] cursor-pointer'>Home</div>
            <div  className='mx-7 text-[#959595] hover:text-[#fa6e01] cursor-pointer'>Services</div>
            <div  className='mx-7 text-[#959595] hover:text-[#fa6e01] cursor-pointer'>About me</div>
            <div  className='mx-7 text-[#959595] hover:text-[#fa6e01] cursor-pointer'>Portfolio</div>
            <div  className='mx-7 text-[#959595] hover:text-[#fa6e01] cursor-pointer'>Contact me</div>


        </div>
        <div>
            <button className='text-bold h-[32px] w-[75px] bg-[#fa6e01] text-white rounded-[7px]'>Hire Me</button>
        </div>


      </div>

    );
};

export default Navbar;

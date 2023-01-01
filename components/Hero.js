import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <Image src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" width={800} height={600} className='w-full h-full object-cover' />
      <div className='absolute bg-black/30 top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className='max-w-[600px] '>All Inclusive </p>
          <h1 className='text-3xl md:text-5xl font-bold drop-shadow-2xl'>Private Beaches & Getaways</h1>
          <p className='max-w-[600px] drop-shadow-xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui ex asperiores quis. Optio debitis repudiandae mollitia libero dolores impedit?</p>
          <button className='bg-white text-black font-semibold'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
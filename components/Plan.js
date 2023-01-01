import Image from 'next/image'
import React from 'react'

const Plan = () => {
    return (
        <div className='max-width-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh] gap-4'>
                <Image className='row-span-3 object-cover w-full h-full' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80" width={500} height={200} />
                <Image className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" width={500} height={200} />
                <Image className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" width={500} height={200} />
                <Image className='row-span-3 object-cover w-full h-full' src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" width={500} height={200} />
                <Image className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80" width={500} height={200} />
            </div>

            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iste!</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ipsa voluptas laborum, sapiente repellat dicta voluptatem magnam sint, recusandae praesentium distinctio nobis vero accusantium eveniet minima. Praesentium quidem aperiam consequatur?</p>
            </div>
            <div>
                <button className='border-black mr-4 hover:shadow-md hover:scale-105 duration-300 transition-all transform ease-out'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-md hover:scale-105 duration-300 ease-out'>Book Your Trip</button></div>
        </div>
    )
}

export default Plan
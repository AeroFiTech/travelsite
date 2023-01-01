import Image from 'next/image'
import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1400px] h-[500px] bg-blue-100 rounded-xl mx-auto my-20 pt-16 md:mb-[35%] lg:mb-[20%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='relative lg:top-20 col-span-2 lg:col-span-1'>
                <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos libero totam deserunt aperiam et commodi corrupti reprehenderit animi iste.</p>
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <Image className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" width={300} height={200} />
                <Image className='object-cover w-full h-full row-span-2' src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width={300} height={200} />
                <Image className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width={300} height={200} />
            </div>
        </div>
    )
}

export default Rooms
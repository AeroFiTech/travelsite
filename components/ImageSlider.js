import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight, BsSlashLg } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
            title: 'Lobster',
        },
        {
            url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Sushi',
        },
        {
            url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta',
        },
        {
            url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon',
        }
    ];
    // console.log(slides.length)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx(currentIdx === (slides.length - 1) ? 0 : currentIdx + 1);
            console.log('This will run every 5 second!');
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIdx]);



    return (
        <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
            <div className='w-full h-full rounded-xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[currentIdx].url})` }}></div>

            {/* Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-xl rounded-full p-2 duration-500 group-hover:bg-black/20 text-white cursor-pointer'
                onClick={() => setCurrentIdx(currentIdx === 0 ? slides.length - 1 : currentIdx - 1)}>
                <BsChevronCompactLeft size={30} />
            </div>

            {/* Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-xl rounded-full p-2 duration-500 group-hover:bg-black/20 text-white cursor-pointer'
                onClick={() => setCurrentIdx(currentIdx === (slides.length - 1) ? 0 : currentIdx + 1)}>
                <BsChevronCompactRight size={30} />
            </div>

            <div className="flex top-4 justify-center py-2 text-orange-500">
                {slides.map((slides, slideIdx) => (
                    <div className={`text-2xl cursor-pointer ${currentIdx == slideIdx ? 'text-purple-600' : ''}`} key={slideIdx} onClick={() => setCurrentIdx(slideIdx)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default ImageSlider
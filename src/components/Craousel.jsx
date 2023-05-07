import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md'
import { useRouter } from 'next/router';
const Slider = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [headline, setHeadline] = useState(0)
    const images = ['/images/banner/b1.jpg', '/images/banner/b2.jpg', '/images/banner/b3.jpg','/images/banner/b4.jpg','/images/banner/b5.jpg','/images/banner/b6.jpg','/images/banner/b7.jpg','/images/banner/b8.jpg',];
    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
        setHeadline(currentSlide === 0 ? headlines.length - 1 : headlines - 1);
    };

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        setHeadline(currentSlide === headlines.length - 1 ? 0 : headlines + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);
    return (
        <div className="relative w-screen md:h-screen h-80 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-screen md:h-screen h-80 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                />
            ))}
            <div className="absolute w-[90%] m-auto inset-0 flex justify-between items-center">
                <button onClick={handlePrevSlide} className='z-10 text-4xl rotate-180'><MdOutlineNavigateNext className='text-gray-300' /></button>
                <button onClick={handleNextSlide} className='z-10 text-4xl'><MdOutlineNavigateNext className='text-gray-300' /></button>
            </div>
        </div>
    );
};

export default Slider;

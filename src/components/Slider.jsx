import { useState, useEffect } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [headline, setHeadline] = useState(0)
    const images = ['https://source.unsplash.com/random/?realestate', 'https://source.unsplash.com/random/?Cryptocurrency', 'https://source.unsplash.com/random/?house'];
    const headlines = ["WE GO ABOVE AND BEYOND ON EVERY JOB", "WE GO ABOVE AND BEYOND ON EVERY JOB 1", "WE GO ABOVE AND BEYOND ON EVERY JOB 3"]
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
        <div className="relative w-screen h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-screen h-screen transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                />
            ))}
            <div className="h-screen w-screen absolute-top-0 bg-gray-800 opacity-80"></div>
            <div className="absolute w-[90%] m-auto inset-0 flex justify-between items-center">
                <button onClick={handlePrevSlide} className='z-10 text-4xl rotate-180'><MdOutlineNavigateNext className='text-gray-300' /></button>
                {headlines.map((headline, index) => (
                    <div
                        key={index}
                        className={`flex absolute w-full px-20 flex-col  justify-center items-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h2 className="uppercase md:text-[62px] text-[30px] text-center text-gray-100 roboto-font font-[700] ">
                            {headline}
                        </h2>
                        <button className="px-5 py-3 uppercase bg-[#E60304] text-white my-2">Projects</button>
                    </div>
                ))}
                <button onClick={handleNextSlide} className='z-10 text-4xl'><MdOutlineNavigateNext className='text-gray-300' /></button>
            </div>
        </div>
    );
};

export default Slider;

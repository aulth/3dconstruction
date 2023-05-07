import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md'
import { useRouter } from 'next/router';
const Slider = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [headline, setHeadline] = useState(0)
    const images = ['/images/banner/b1.jpg', '/images/banner/b2.jpg', '/images/banner/b3.jpg','/images/banner/b4.jpg','/images/banner/b5.jpg','/images/banner/b6.jpg','/images/banner/b7.jpg','/images/banner/b8.jpg',];
    const headlines = [{
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 1",
        text: "Projects",
        link: "/projects"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 2",
        text: "Services",
        link: "/services"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 3",
        text: "3D Umbrella",
        link: "/3dumbrella"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 4",
        text: "3D Umbrella",
        link: "/3dumbrella"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 5",
        text: "3D Umbrella",
        link: "/3dumbrella"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 6",
        text: "3D Umbrella",
        link: "/3dumbrella"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 7",
        text: "3D Umbrella",
        link: "/3dumbrella"
    },
    {
        heading: "WE GO ABOVE AND BEYOND ON EVERY JOB 8",
        text: "3D Umbrella",
        link: "/3dumbrella"
    }
    
    ]
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
    function handleClick(url) {
        router.push(url);
    }

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
            <div className="h-screen w-screen absolute-top-0 bg-gray-800 opacity-50"></div>
            <div className="absolute w-[90%] m-auto inset-0 flex justify-between items-center">
                <button onClick={handlePrevSlide} className='z-10 text-4xl rotate-180'><MdOutlineNavigateNext className='text-gray-300' /></button>
                {headlines.map((headline, index) => {
                    return (
                        <div key={index} className={`flex absolute w-full px-20 flex-col justify-center items-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                            <h2 className="uppercase md:text-[52px] text-[25px] text-center text-gray-100 roboto-font font-[700] ">
                                {headline.heading}
                            </h2>
                            <a href={headline.link} className={`px-5  ${currentSlide === index ? 'z-10' : 'z-0'} py-3 uppercase bg-[#E60304] text-white my-2`}>
                                {headline.text}
                            </a>
                        </div>
                    )
                })}

                <button onClick={handleNextSlide} className='z-10 text-4xl'><MdOutlineNavigateNext className='text-gray-300' /></button>
            </div>
        </div>
    );
};

export default Slider;

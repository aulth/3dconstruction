import React, { useState, useEffect } from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'

const ProjectItem = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = data.images;
    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className={`bg-white rounded-lg shadow relative project ${data.completed?'completed':'ongoing'}`}>
            {/* <img src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/service-1.jpg" className='w-full object-cover aspect-video' alt="" /> */}
            {images.map((image, index) => (
                <img
                    key={index}
                    className={`w-full rounded-t absolute h-64  object-cover aspect-video transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    src={image}
                />
            ))}
            <span className="px-2 py-1 bg-[#E60304] absolute top-0 text-white">{data.completed?'Completed':'Ongoing'}</span>
            <div className="w-full flex flex-col items-start p-5 mt-64">
                <h4 className="font-semibold roboto-font uppercase text-[#007EF6]">Project: {data.project}</h4>
                <p className="text-gray-600 font-semibold">Area: {data.area}</p>
                <p className="text-gray-500 underline">Consultant: {data.consultant}</p>
            </div>
        </div>
    )
}

export default ProjectItem
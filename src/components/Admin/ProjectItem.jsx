import React, { useState, useEffect } from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'
const ProjectItem = ({data, updateStatus, deleteProject}) => {
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
        <>
            <div className="bg-white rounded-lg shadow relative">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`w-full rounded-t absolute h-64  object-cover aspect-video transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        src={image}
                    />
                ))}
                <span className="px-2 py-1 bg-[#E60304] absolute top-0 text-white flex items-center gap-2">{data.completed?'Completed':'Ongoing'} <RxUpdate onClick={()=>{updateStatus(data._id, !data.completed)}} className='mt-1 cursor-pointer' /></span>
                <span className="px-2 py-1 bg-[#E60304] absolute top-0 right-0 text-white cursor-pointer" onClick={()=>{deleteProject(data._id)}}><AiOutlineDelete /></span>
                <div className="w-full flex flex-col items-start p-5 mt-64">
                <h4 className="font-semibold roboto-font uppercase text-[#007EF6]">Project: {data.project}</h4>
                <p className="text-[#E60304] font-semibold">Area: {data.area}</p>
                <p className="text-[#007EF6]">Consultant: {data.consultant}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectItem
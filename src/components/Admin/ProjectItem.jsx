import React, { useState, useEffect } from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'
import { CiEdit, CiNoWaitingSign } from 'react-icons/ci'
import { BiCheck } from 'react-icons/bi'

const ProjectItem = ({ data, updateStatus, deleteProject }) => {
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
            <div className="w-full  bg-white rounded-lg p-4 relative">
                <div className="w-full flex md:flex-row flex-col gap-2 justify-start">
                    <div className="flex items-center bg-white px-2 py-1 absolute rounded-lg bottom-0 md:left-48 ml-2 mb-2 right-0">
                        <button onClick={() => { deleteProject(data._id) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm  text-lg'><AiOutlineDelete /></button>
                        <button onClick={() => { updateStatus(data._id, !data.completed) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm  text-;g'><RxUpdate /></button>
                    </div>
                    <div className="md:w-48 w-full  md:h-32 h-48 shrink-0 relative">
                        <button className={`absolute top-2 z-10 left-2 bg-gradient-to-tr p-1 ${data.completed ? 'bg-green-400' : 'bg-orange-400'} rounded-sm text-sm text-white`}>{data.completed ? <BiCheck /> : <CiNoWaitingSign />}</button>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`w-full rounded absolute h-full  object-cover aspect-[9/1] transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                src={image}
                            />
                        ))}
                    </div>
                    <div className="w-full flex flex-col justify-start">
                        <h2 className="font-bold text-xl md:max-h-16 overflow-hidden leading-8 hover:text-cyan-500">{data.project.slice(0, 138)}{data.project.length > 138 ? ".." : ""}</h2>
                        <p className="text-[#E60304] text-lg font-semibold">Area: {data.area}</p>
                        <p className="text-[#007EF6] text-lg">Consultant: {data.consultant}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectItem
import React, { useState, useEffect } from 'react'
import { BsFillBuildingsFill, BsArrowUp } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'
import { CiEdit, CiNoWaitingSign } from 'react-icons/ci'
import { BiCheck } from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast';

const ProjectItem = ({ data, setProducts, products, updateStatus, fetchData, deleteProject }) => {
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

    const handleUpClick = (product) => {
        const index = products.findIndex((p) => p._id === product._id);
        if (index > 0) {
            // Swap the priorities of the current product and the one above it
            const tempPriority = products[index - 1].priority;
            const data1 = {
                _id:products[index-1]._id,
                priority:product.priority
            }
            const data2 = {
                _id:product._id,
                priority:tempPriority
            }
            products[index - 1].priority = product.priority;
            products[index].priority = tempPriority;
            products.sort((a, b) => a.priority - b.priority);
            setProducts([...products]); 
            updatePriority({data1, data2})

        }
    };

    const handleDownClick = (product) => {
        const index = products.findIndex((p) => p._id === product._id);
        if (index < products.length - 1) {
          // Swap the priorities of the current product and the one below it
          const tempPriority = products[index].priority;
          const data1 = {
            _id: products[index + 1]._id,
            priority: product.priority
          };
          const data2 = {
            _id: product._id,
            priority: products[index+1].priority
          };
          products[index].priority = products[index + 1].priority;
          products[index + 1].priority = tempPriority;
      
          // Sort the products array by priority
          products.sort((a, b) => a.priority - b.priority);
          setProducts([...products]); // Update the state with the new array
      
          updatePriority({data1, data2})
        }
      };
      

    const updatePriority = async (data) => {
        const response = await fetch('/api/updatepriority', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data})
        })
        const json = await response.json();
        if (json.success) {
            toast.success(json.msg);
            fetchData();
        }else{
            toast.error(json.msg)
        }
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full  bg-white rounded-lg p-4 relative">
                <div className="w-full flex md:flex-row flex-col gap-2 justify-start">
                    <div className="flex items-center justify-between bg-white px-2 py-1 absolute rounded-lg bottom-0 md:left-48 ml-2 mb-2 right-0">
                        <div className="flex items-center">
                            <button onClick={() => { deleteProject(data._id) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm  text-lg'><AiOutlineDelete /></button>
                            <button onClick={() => { updateStatus(data._id, !data.completed) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm  text-;g'><RxUpdate /></button>
                        </div>
                        <div className="flex items-center justify-end">
                            <span className='text-center border px-2 rounded-md' >{data.priority}</span>
                            <button disabled={data.priority === 1} onClick={() => { handleUpClick(data) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm  text-lg'><BsArrowUp /></button>
                            <button disabled={data.priority === data.length} onClick={() => { handleDownClick(data) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm  text-;g'><BsArrowUp className='rotate-180' /></button>
                        </div>
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
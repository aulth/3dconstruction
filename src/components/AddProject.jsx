import React, { useState } from 'react'
import Spinner from './Spinner';
import toast, { Toaster } from 'react-hot-toast';

const AddProject = ({fetchData}) => {
    const [data, setData] = useState({ project: '', area: '', consultant: '', completed:true, images:[] })
    const [loading, setLoading] = useState(false)
    const [adding, setAdding] = useState(false)
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    }
    const uploadFile = async (e) => {
        e.preventDefault();
        setLoading(true)
        let images = [];
        if (typeof window !== 'undefined') {
            let files = e.target.files;
            for (let file of files) {
                let data = new FormData();
                data.append('file', file);
                data.append('upload_preset', 'images');
                let response = await fetch('https://api.cloudinary.com/v1_1/deypo9kaq/image/upload', {
                    method: "POST",
                    body: data
                })
                let responseData = await response.json();
                images.push(responseData.url)
            }
            setLoading(false)
            console.log(images);
            setData({...data, images:images})
            images=[];
        }
    }
    const handleOnUpload = async (e)=>{
        e.preventDefault();
        setAdding(true)
        if(data.images.length<=0){
            toast.error("Upload image");
            setAdding(false)
            return;
        }
        const response = await fetch('/api/addproject', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({data})
        })
        const json = await response.json();
        if (json.success) {
            toast.success(json.msg)
            fetchData();
        } else {
            toast.error(json.msg)
        }
        setAdding(false);
      }
    return (
        <>
      <Toaster position='top-right' />
            <div className="w-full flex justify-center items-center p-5">
                <form onSubmit={handleOnUpload} className='container flex flex-col gap-4 m-auto'>
                    <div className="w-full flex flex-col md:flex-row md:gap-5 items-start justify-center">
                        <span className='font-bold roboto-font md:w-32'>Project: </span>
                        <input type="text" onChange={handleOnChange} name='project' required className='w-full border border-gray-400 rounded focus:outline-[#007EF6] focus:outline p-1' />
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:gap-5 items-start">
                        <span className='font-bold roboto-font md:w-32'>Area: </span>
                        <input type="text" onChange={handleOnChange} name='area' required className='w-full border border-gray-400 rounded focus:outline-[#007EF6] focus:outline p-1' />
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:gap-5 items-start">
                        <span className='font-bold roboto-font md:w-32'>Consultant: </span>
                        <input type="text" onChange={handleOnChange} name='consultant' required className='w-full border border-gray-400 rounded focus:outline-[#007EF6] focus:outline p-1' />
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:gap-5 items-start">
                        <div className='font-bold roboto-font md:w-32 flex items-center gap-1'>Images: {loading && <Spinner/>}</div>
                        <input type="file" className='md:-ml-4' multiple onChange={uploadFile} required/>
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:gap-5 items-start">
                        <span className='font-bold roboto-font md:w-32'>Completed: </span>
                        <select onChange={handleOnChange} name='completed' required className='w-full border border-gray-400 rounded focus:outline-[#007EF6] focus:outline p-1'>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="w-full flex justify-end">{adding && <Spinner/>}{!adding && <button type="submit" className='bg-[#E60304] px-2 py-1 text-white' disabled={data.images.length<=0}>Add Project</button>}</div>
                </form>
            </div>
        </>
    )
}

export default AddProject
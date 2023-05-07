import React, { useState } from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { ImUser } from 'react-icons/im'
import {MdAlternateEmail} from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast';
const ContactUs = () => {
    const [data, setData] = useState({name:'', email:'', message:''});
    const handleOnChange = (e) => {
      e.preventDefault();
      setData({...data, [e.target.name]:e.target.value});
    }
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      if(!data.name){
        toast.error("Enter Name")
        return;
      }
      if(!data.email){
        toast.error("Enter Email")
        return;
      }
      if(!data.message){
        toast.error("Please Type Message")
        return;
      }
      // toast.success("Message Sent")
      toast.promise(new Promise(async (resolve, reject)=>{
        const response = await fetch('/api/contact', {
          method:'POST',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify({data})
        })
        const json = await response.json();
        setData({name:'', email:'', message:''})
        if(json.success){
          resolve();
        }else{
          reject();
        }
      }), {
        loading:'Sending',
        success:'Message Sent',
        error:'Failed'
      })
    }
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="font-bold roboto-font text-xl uppercase mt-5">Address</h2>
                <address>Office 918, Business Village Block B
                    Port Saeed, Dubai
                </address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4163728310473!2d55.32381607379067!3d25.256575229296082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e02e7cbe77%3A0x2bc007252d21c9df!2s3D%20Constraction%20LLC!5e0!3m2!1sen!2sin!4v1682694961461!5m2!1sen!2sin" allowFullScreen loading="lazy" className='w-full h-80 mt-5' referrerPolicy="no-referrer-when-downgrade" />
                <div className="w-full p-8 bg-[#F4F6F8]">
                    <h2 className="text-left font-semibold md:text-3xl text-2xl ">Get in touch</h2>
                    <form onSubmit={handleOnSubmit} className="w-full mt-8 bg-white p-5">
                        <div className="w-full flex gap-2 flex-col md:flex-row">
                            <div className="w-full  md:w-1/2 flex items-center border-b border-[#E60304]">
                                <div className="bg-[#E60304] p-1">
                                    <ImUser className='text-2xl text-white' />
                                </div>
                                <input type="text" value={data.name} name='name' onChange={handleOnChange} className='w-full p-1 focus:outline-none border-none bg-transparent  ' placeholder='Your name' />
                            </div>
                            <div className="w-full md:w-1/2 flex border-b border-[#E60304] items-center md:mt-0 mt-4">
                                <div className="bg-[#E60304] p-1">
                                    <MdAlternateEmail className='text-2xl text-white' />
                                </div>
                                <input type="text" value={data.email} name='email' onChange={handleOnChange} className='w-full p-1 focus:outline-none border-none bg-transparent   ' placeholder='Email' />
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <textarea name="message" value={data.message} onChange={handleOnChange} placeholder='Message' id="" className='w-full h-48 p-1 focus:outline-none  bg-transparent border border-[#E60304]   ' cols="30" rows="10"></textarea>
                        </div>
                        <button type='submit' className="px-2 py-1 bg-[#E60304] text-white mt-4">Send Message</button>
                        <Toaster position='top-right' />
                    </form>
                </div>
        </div >
        </>
    )
}

export default ContactUs
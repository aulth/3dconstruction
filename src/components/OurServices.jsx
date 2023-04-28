import React from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'
import {MdOutlineElectricalServices, MdOutlinePlumbing, MdOutlineRealEstateAgent} from 'react-icons/md'
import {RiToolsFill} from 'react-icons/ri'
import {AiFillFormatPainter} from 'react-icons/ai'
import {GiSteelClaws} from 'react-icons/gi'
import {SiHandshake} from 'react-icons/si'
const OurServices = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col gap-4 bg-[#F4F6F8] p-5 pb-10">
                <h3 className="font-bold roboto-font text-3xl">Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/service-1.jpg" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <BsFillBuildingsFill className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center">Construction Contracting</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1520234939602-6b957f8b9c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <MdOutlineElectricalServices className='text-4xl  text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center">Electrical Fitting Contracting</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1615309662243-70f6df917b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <RiToolsFill className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center"> HVAC Installation and Maintenance</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <MdOutlinePlumbing className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center">Plumbing Fitting Contracting</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/service-4.jpg" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <AiFillFormatPainter className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center">Interior Design</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <GiSteelClaws className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center">Metal & Iron Works</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <MdOutlineRealEstateAgent className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center">Real Estate Management Supervision Services</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1547866751-446296f133ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" className='w-full object-cover aspect-video' alt="" />
                        <div className="w-full flex flex-col items-center justify-center p-5">
                            <div className="w-16 h-16 rounded-full bg-white -mt-[3.1rem] flex justify-center items-center">
                                <SiHandshake className='text-4xl text-[#E60304]' />
                            </div>
                            <h4 className="font-semibold roboto-font uppercase text-[#007EF6] text-center"> Real Estate Buying & Selling Brokerage</h4>
                        <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed metus pharetra, sed ultrices ligula fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurServices
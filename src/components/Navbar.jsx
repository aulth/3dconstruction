import React from 'react'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { BsPhoneVibrate } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
const Navbar = () => {
    return (
        <>
            <div className="container mx-auto px-5 hidden lg:block">
                <div className="grid grid-cols-3 gap-0.5">
                    <div className="col-span-1 py-3 flex items-center justify-center">
                        <CiLocationOn className="bi bi-geo-alt text-primary text-4xl mr-3 text-[#E10606]" />
                        <div className="text-start">
                            <h6 className="uppercase font-bold">Our Office</h6>
                            <span>123 Street, Dubai</span>
                        </div>
                    </div>
                    <div className="col-span-1 border-l border-r py-3 flex items-center justify-center">
                        <CiMail className="bi bi-envelope-open text-primary text-4xl mr-3 text-[#E10606]" />
                        <div className="text-start">
                            <h6 className="uppercase font-bold">Email Us</h6>
                            <a href='mailto:info@3dconstractionllc.com'>info@3dconstractionllc.com</a>
                        </div>
                    </div>
                    <div className="col-span-1 py-3 flex items-center justify-center">
                        <BsPhoneVibrate className="bi bi-phone-vibrate text-primary text-4xl mr-3 text-[#E10606]" />
                        <div className="text-start">
                            <h6 className="uppercase font-bold">Call Us</h6>
                            <a href='tel:+971565301894'>+971565301894</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky w-screen top-0 z-10">
                <nav className="bg-gray-900 flex justify-between items-center pl-5">
                    <h1 className="m-0 uppercase"><img src="/images/logo.png" alt="" /></h1>
                    <ul className="gap-4 items-center md:flex hidden uppercase">
                        <li className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>Home</li>
                        <li className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>About</li>
                        <li className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>Services</li>
                        <li className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>Contact</li>
                        <button className='bg-[#E60304] h-[81px] px-6  uppercase text-white'>Projects</button>
                    </ul>
                    <button className='md:hidden block pr-5 text-3xl text-white' >
                        <RxHamburgerMenu />
                    </button>
                </nav>
            </div>

        </>
    )
}

export default Navbar
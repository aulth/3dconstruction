import React, { useState } from 'react'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { BsPhoneVibrate } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import {IoCheckmarkDone} from 'react-icons/io5'
import Link from 'next/link'
import {MdDone} from 'react-icons/md'
import '@animxyz/core'
const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => {
        let menu = document.querySelector('#menu'); 
        if (menu.classList.contains('h-[21.5rem]')) {
            menu.classList.remove('h-[21.5rem]');
            menu.classList.add('h-0');
            menu.classList.add('hidden');
            setMenuOpened(false)
        } else {
            menu.classList.remove('h-0');
            menu.classList.add('h-[21.5rem]');
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            setMenuOpened(true)
        }
    }

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    function handleMenuHover() {
        setIsSubMenuOpen(true);
    }

    function handleMenuLeave() {
        setIsSubMenuOpen(false);
    }
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
            <div className="sticky w-screen top-0 z-20">
                <nav className="bg-gray-900 flex justify-between items-center pl-5 xyz-in ">
                    <h1 className="m-0 uppercase"><Link href="/"><img src="/images/logo.png" className='w-20' alt="" /></Link></h1>
                    <ul id='menu' xyz="fade flip-down stagger duration-10 delay-1 ease-out-back" className="gap-4  md:items-center md:flex md:flex-row md:bg-auto bg-gray-900  md:w-auto w-full md:static absolute top-[57px] hidden flex-col items-start md:p-0 p-5 px-7 md:h-auto h-[17.1rem] duration-100 left-0 z-20 uppercase">
                        <li className='xyz-nested'>
                            <Link href={"/"} className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>Home</Link>
                        </li >
                        <li className='xyz-nested'>
                            <Link href={"/about"} className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>About</Link>
                        </li>
                        <li className='xyz-nested'>
                            <Link href={"/services"} className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>Services</Link>
                        </li>
                        <li className='xyz-nested'>
                            <Link href={"/3dumbrella"} className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>3D Umbrella</Link>
                        </li>
                        {/* <li>
                            <Link href="/projects" className='text-white hover:text-[#E60304] duration-150 cursor-pointer'>Projects</Link>
                        </li> */}
                        <li className="relative xyz-nested md:block hidden md:w-auto w-full" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
                            <Link href="/projects" className="text-white hover:text-[#E60304] duration-150 cursor-pointer">Projects</Link>
                            {isSubMenuOpen && (
                                <ul className="md:absolute text-sm static top-full md:pt-5 md:-right-4 md:w-52 w-full  bg-gray-900 py-2 px-4 md:shadow-lg rounded-lg" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
                                    <li className='py-2'>
                                        <Link href="/projects/completed" className="text-white  hover:text-[#E60304] duration-150 cursor-pointer flex gap-1 items-start"><IoCheckmarkDone className="shrink-0 mt-0.5" />Completed Projects</Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="/projects/ongoing" className="text-white hover:text-[#E60304] duration-150 cursor-pointer flex gap-1 items-start"><MdDone className="shrink-0 mt-0.5" />Ongoing Projects</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative xyz-nested md:hidden md:w-auto w-full">
                            <Link href="/projects" className="text-white hover:text-[#E60304] duration-150 cursor-pointer">Projects</Link>
                                <ul className="md:absolute text-sm static top-full md:pt-5 md:-right-4 md:w-52 w-full  bg-gray-900 py-2 px-4 md:shadow-lg rounded-lg" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
                                    <li className='py-2'>
                                        <Link href="/projects/completed" className="text-white hover:text-[#E60304] duration-150 cursor-pointer flex gap-1 items-start"><IoCheckmarkDone className="shrink-0 mt-0.5" />Completed Projects</Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="/projects/ongoing" className="text-white hover:text-[#E60304] duration-150 cursor-pointer flex gap-1 items-start"><MdDone className="shrink-0 mt-0.5" />Ongoing Projects</Link>
                                    </li>
                                </ul>
                        </li>
                        <li className='md:w-auto w-full md:mt-0 -mt-3'><Link href={"/contact"}><button className='bg-[#E60304] md:h-[81px] md:px-6 md:w-auto w-full md:text-center text-left px-2 md:py-0 py-1  uppercase text-white'>Contact</button></Link></li>
                    </ul>
                    <button onClick={toggleMenu} className='md:hidden block pr-5 text-3xl text-white' >
                        {!menuOpened ? <RxHamburgerMenu /> : <IoMdClose />}
                    </button>
                </nav>
            </div>

        </>
    )
}

export default Navbar
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail, MdOutlineFax } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram , AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'
import { TbDeviceLandlinePhone } from 'react-icons/tb'
const Footer = () => {
    return (
        <>
            <div className="w-full flex gap-4 flex-col md:flex-row p-5 bg-gray-900">
                <div className="w-full flex gap-4 flex-col md:w-1/2">
                    <a href="#">
                        <img src="/images/logo.png" className='w-20' alt="" />
                    </a>
                    <p className='text-gray-300'>3D is one of the fastest growing group in UAE with specialization in construction,
                        MEP, carpentry, aluminium, glass and real estate services.</p>
                    <ul className="flex flex-col gap-2 text-gray-300">
                        <li>
                            <a href="https://goo.gl/maps/arxRfnbcY5eMcuaf9" rel='nofollow' className="flex items-start gap-1">
                                <IoLocationSharp className='shrink-0 mt-1.5' /> Office 918, Business Village Block B Port Saeed, Dubai
                            </a>
                        </li>
                        <li>
                            <a href='tel:+971521675135' className="flex items-start gap-1">
                                <IoIosCall className='shrink-0 mt-1.5' /> +971521675135
                            </a>
                        </li>
                        <li>
                            <a href='tel:+971521675135 ' className="flex items-start gap-1">
                                <TbDeviceLandlinePhone className='shrink-0 mt-1.5' /> +971521675135
                            </a>
                        </li>
                        <li>
                            <a href='#' className="flex items-start gap-1">
                                <MdOutlineFax className='shrink-0 mt-1.5' /> +971521675135
                            </a>
                        </li>
                        <li>
                            <a href='mailto:info@3dconstractionllc.com' className="flex items-start gap-1">
                                <MdEmail className='shrink-0 mt-1.5' /> info@3dconstractionllc.com
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-wrap gap-2">
                        <li className="flex items-center">
                           <a href="https://www.facebook.com/3dconstractionllc/" rel='nofollow'> <BsFacebook className='text-[#007EF6] text-2xl' /></a>
                        </li>
                        <li className="flex items-center">
                            <a href="#"><AiFillInstagram className='text-[#007EF6] text-3xl' /></a>
                        </li>
                        <li className="flex items-center">
                            <a href="https://www.linkedin.com/company/3d-constraction-llc" rel='nofollow'><AiFillLinkedin className='text-[#007EF6] text-3xl' /></a>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex gap-2 flex-col md:w-1/2">
                    <div className="w-full flex gap-4 flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <h3 className="font-bold roboto-font uppercase text-gray-300 text-lg">Quick Links</h3>
                            <ul className="flex flex-col gap-2 text-gray-300 mt-1">
                                <li>
                                    <Link href="/about" className="flex items-start gap-1 hover:text-[#E60304]">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="flex items-start gap-1 hover:text-[#E60304]">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/3dumbrella" className="flex items-start gap-1 hover:text-[#E60304]">
                                        3D Umbrella
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="font-bold roboto-font uppercase text-gray-300 text-lg">Actual Links</h3>
                            <ul className="flex flex-col gap-2 text-gray-300 mt-1">
                                <li>
                                    <Link href="/services" className="flex items-start gap-1 hover:text-[#E60304]">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/completed" className="flex items-start gap-1 hover:text-[#E60304]">
                                        Completed Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/ongoing" className="flex items-start gap-1 hover:text-[#E60304]">
                                        Ongoing Project
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
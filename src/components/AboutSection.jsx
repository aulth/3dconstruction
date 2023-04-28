import React from 'react'
import { GoCheck } from 'react-icons/go'
const AboutSection = () => {
    return (
        <>
            <div className="w-full flex  md:flex-row flex-col justify-between items-center px-5 py-10">
                <div className="flex gap-5 flex-col  md:w-[60%] w-full pr-10">
                    <h2 className='uppercase roboto-font font-[700] text-4xl'>We are the leaders in construction industry </h2>
                    <p className="font-bold text-gray-600 roboto text-lg uppercase open-sans-font">3D is one of the fastest growing group in UAE with specialization in construction, MEP, carpentry, aluminium, glass and real estate services.</p>
                    <p className='open-sans-font'>We have implemented various projects throughout the United Arab Emirates and
                        we are always looking to place our customers and get their confidence through
                        timely completion of our work and high quality experience resulting from the
                        accumulation of experience.</p>
                    <ul class="grid grid-cols-2 gap-4  open-sans-font">
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Schedule and resource plan to meet client objectives</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Clear communication with project stakeholders</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Track project progress and adjust as needed</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Supervise work quality closely</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Ensure timely project completion and commissioning</li>
                    </ul>
                </div>
                <div className="flex flex-col w-[90%] md:w-[40%] md:h-[420px] h-[200px] bg-dark-radial md:mt-0 mt-10">
                    <img src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/about.jpg" className='h-full mt-5 -ml-5 object-cover' alt="" />
                </div>
            </div>

        </>
    )
}

export default AboutSection
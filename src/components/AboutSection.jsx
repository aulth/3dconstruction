import React, {useEffect} from 'react'
import { GoCheck } from 'react-icons/go'
import '@animxyz/core'

const AboutSection = () => {
   
useEffect(() => {
  if(typeof window!=undefined){
    const aboutText = document.querySelector('#about-text');
    const aboutImage = document.querySelector('#about-image');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in the window view
                aboutText.classList.add('xyz-in')
                aboutImage.classList.add('xyz-in')
            } else {
                // Element is not in the window view
                aboutText.classList.remove('xyz-in')
                aboutImage.classList.remove('xyz-in')
            }
        });
    });
    observer.observe(aboutText);
  }
}, [])

    return (
        <>
            <div className="w-full flex  md:flex-row flex-col justify-between items-center px-5 py-10">
                <div id='about-text' className="flex gap-5 flex-col  md:w-[60%] w-full pr-10" xyz="fade right duration-5">
                    <h2 className='uppercase roboto-font font-[700] text-4xl'>We are the leaders in construction industry </h2>
                    <p className="font-bold text-gray-600 roboto text-lg uppercase open-sans-font">3D is one of the fastest growing group in UAE with specialization in construction, MEP, carpentry, aluminium, glass and real estate services.</p>
                    <p className='open-sans-font'>We have implemented various projects throughout the United Arab Emirates and
                        we are always looking to place our customers and get their confidence through
                        timely completion of our work and high quality experience resulting from the
                        accumulation of experience.</p>
                    <ul className="grid grid-cols-2 gap-4  open-sans-font">
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Schedule and resource plan to meet client objectives</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Clear communication with project stakeholders</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Track project progress and adjust as needed</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Supervise work quality closely</li>
                        <li className='flex items-start  gap-1'><GoCheck className='text-[#E60304] text-lg mt-1 shrink-0' />Ensure timely project completion and commissioning</li>
                    </ul>
                </div>
                <div  id='about-image'  className="flex flex-col w-[90%] md:w-[40%] md:h-[420px] h-[200px] bg-dark-radial md:mt-0 mt-10" xyz="fade left" >
                    <img src="/images/main-page.jpg" className='h-full mt-5 -ml-5 object-cover' alt="" />
                </div>
            </div>

        </>
    )
}

export default AboutSection
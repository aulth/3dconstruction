import React from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { MdOutlineElectricalServices, MdOutlinePlumbing, MdOutlineRealEstateAgent } from 'react-icons/md'
import { RiToolsFill } from 'react-icons/ri'
import { AiFillFormatPainter } from 'react-icons/ai'
import { GiSteelClaws } from 'react-icons/gi'
import { IoUmbrellaOutline } from 'react-icons/io5'
const Umbrella = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col gap-4 bg-[#F4F6F8] p-5 py-8">
                <h3 className="font-bold roboto-font text-3xl">3D Umbrella</h3>
                <ul class="grid grid-cols-2 gap-4  open-sans-font">
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Constraction LLC - Dubai HO</li>
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Constraction LLC - Abu Dhabi</li>
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Constraction LLC - Sharjah</li>
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Constraction LTD - United Kingdom</li>
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Carpentry - Ajman</li>
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Aluminum & Metal Works</li>
                    <li className='flex items-start  gap-1'><IoUmbrellaOutline className='text-[#E60304] text-lg mt-1 shrink-0' />3D Real Estate</li>
                </ul>
            </div>

        </>
    )
}

export default Umbrella
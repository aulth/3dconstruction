import React from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { MdOutlineElectricalServices, MdOutlinePlumbing, MdOutlineRealEstateAgent } from 'react-icons/md'
import { RiToolsFill } from 'react-icons/ri'
import { AiFillFormatPainter } from 'react-icons/ai'
import { GiSteelClaws } from 'react-icons/gi'
import { SiHandshake } from 'react-icons/si'
import ProjectItem from './ProjectItem'
const Projects = ({data}) => {
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col gap-4 bg-[#F4F6F8]  pb-10">
                <div className="w-full flex justify-between items-center px-5 py-2 border-b-2 border-[#E60304]">
                    <h3 className="font-bold roboto-font text-xl">Projects</h3>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 border rounded-sm border-gray-400">Completed</button>
                        <button className="px-3 py-1.5  border rounded-sm border-gray-400">Ongoing</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 pt-2">
                    {
                        data.map((data, index)=>{
                            return <ProjectItem data={data} key={index}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Projects
import React from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { MdOutlineElectricalServices, MdOutlinePlumbing, MdOutlineRealEstateAgent } from 'react-icons/md'
import { RiToolsFill } from 'react-icons/ri'
import { AiFillFormatPainter } from 'react-icons/ai'
import { GiSteelClaws } from 'react-icons/gi'
import { SiHandshake } from 'react-icons/si'
import '@animxyz/core'
import ProjectItem from './ProjectItem'
const ProjectsCategory = ({data}) => {
    const toggleCompleted = ()=>{
        document.querySelectorAll('.filter-btn').forEach(item=>{item.classList.remove('bg-[#E60304]'); item.classList.remove('text-white')})
        let btn = document.querySelector('#completed-btn')
        btn.classList.add('bg-[#E60304]');
        btn.classList.add('text-white')
        let filteredProjects = document.querySelectorAll('.completed');
        document.querySelectorAll('.project').forEach((item)=>{
            item.classList.add('hidden');
        })
        filteredProjects.forEach((item)=>{
            item.classList.remove('hidden');
        })
    }
    const toggleOngoing = ()=>{
        document.querySelectorAll('.filter-btn').forEach(item=>{item.classList.remove('bg-[#E60304]'); item.classList.remove('text-white')})
        let btn = document.querySelector('#ongoing-btn')
        btn.classList.add('bg-[#E60304]');
        btn.classList.add('text-white')
        let filteredProjects = document.querySelectorAll('.ongoing');
        document.querySelectorAll('.project').forEach((item)=>{
            item.classList.add('hidden');
        })
        filteredProjects.forEach((item)=>{
            item.classList.remove('hidden');
        })
    }
    const clearAll = ()=>{
        document.querySelectorAll('.project').forEach((item)=>{
            item.classList.remove('hidden');
        document.querySelectorAll('.filter-btn').forEach(item=>{item.classList.remove('bg-[#E60304]'); item.classList.remove('text-white')})
        })
    }
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col gap-4 bg-[#F4F6F8]  pb-10 xyz-in">
                <div className="w-full flex justify-between items-center px-5 py-2 border-b-2 border-[#E60304]">
                    <h3 className="font-bold roboto-font text-xl cursor-default">{data && data[0] && data[0].completed?'Completed':'Ongoing'} Projects</h3>
                    <div className="flex items-center gap-2">
                        {/* <button onClick={toggleCompleted} id='completed-btn' className="px-3 filter-btn py-1.5 border rounded-sm border-gray-400">Completed</button>
                        <button onClick={toggleOngoing}  id='ongoing-btn'  className="px-3 filter-btn py-1.5  border rounded-sm border-gray-400">Ongoing</button> */}
                        <span className="font-semibold text-xl">{data && data.length}</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 pt-2" xyz="fade down stagger ease-out-back">
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

export default ProjectsCategory
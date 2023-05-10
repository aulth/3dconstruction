import React from 'react'
import Link from 'next/link'
const Projects = ({ data }) => {
    const toggleCompleted = () => {
        document.querySelectorAll('.filter-btn').forEach(item => { item.classList.remove('bg-[#E60304]'); item.classList.remove('text-white') })
        let btn = document.querySelector('#completed-btn')
        btn.classList.add('bg-[#E60304]');
        btn.classList.add('text-white')
        let filteredProjects = document.querySelectorAll('.completed');
        document.querySelectorAll('.project').forEach((item) => {
            item.classList.add('hidden');
        })
        filteredProjects.forEach((item) => {
            item.classList.remove('hidden');
        })
    }
    const toggleOngoing = () => {
        document.querySelectorAll('.filter-btn').forEach(item => { item.classList.remove('bg-[#E60304]'); item.classList.remove('text-white') })
        let btn = document.querySelector('#ongoing-btn')
        btn.classList.add('bg-[#E60304]');
        btn.classList.add('text-white')
        let filteredProjects = document.querySelectorAll('.ongoing');
        document.querySelectorAll('.project').forEach((item) => {
            item.classList.add('hidden');
        })
        filteredProjects.forEach((item) => {
            item.classList.remove('hidden');
        })
    }
    const clearAll = () => {
        document.querySelectorAll('.project').forEach((item) => {
            item.classList.remove('hidden');
            document.querySelectorAll('.filter-btn').forEach(item => { item.classList.remove('bg-[#E60304]'); item.classList.remove('text-white') })
        })
    }
    return (
        <>
            <div className="w-full flex md:flex-row justify-around items-start flex-col gap-4  pb-10">
                <div className=" flex justify-start items-center w-full md:w-[350px]">
                    <img src="/images/building.png" alt="" />
                </div>
                <div className=" flex flex-col justify-start items-start w-full md:w-1/2 md:pt-10 p-2">
                    <h2 className="text-4xl leading-tight roboto-font font-bold uppercase md:text-left text-center">Crafting exceptional spaces through quality projects.</h2>
                    <p className="open-sans-font text-gray-600 p-5 md:p-0 my-2 md:text-left text-center">
                    We've completed many projects and have ongoing work. Our team delivers quality work for commercial and residential projects with attention to detail. Let's work together.
                    </p>
                    <div className="w-full flex flex-col md:flex-row gap-4 md:px-0 px-5 my-5">
                        <Link href="/projects/completed"><button className="bg-[#E10606] text-white font-semibold rounded px-3 py-1 uppercase">Explore Completed Projects</button></Link>
                        <Link href="/projects/ongoing"><button className="border-[#E10606] border font-semibold rounded px-3 py-1 uppercase">Ongoing Projects</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
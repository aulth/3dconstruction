import React, {useEffect} from 'react'
import { SlTarget } from 'react-icons/sl'
import {VscDebugBreakpointFunctionUnverified} from 'react-icons/vsc'
import '@animxyz/core'

const MissionVision = () => {
      
useEffect(() => {
    if(typeof window!=undefined){
      const mission = document.querySelector('#mission-sec');
      const vision = document.querySelector('#vision-sec');
      const missionObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Element is in the window view
                  mission.classList.add('xyz-in')
              } else {
                  // Element is not in the window view
                  mission.classList.remove('xyz-in')
              }
          });
      });
      const visionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in the window view
                vision.classList.add('xyz-in')
            } else {
                // Element is not in the window view
                vision.classList.remove('xyz-in')
            }
        });
    });
      missionObserver.observe(mission);
      visionObserver.observe(vision);
    }
  }, [])
    return (
        <>
            <div id='mission' className="w-full flex flex-col md:flex-row gap-2 justify-center md:items-start items-center px-5 py-5">
                <div id='mission-sec' className="w-full md:w-1/2 " xyz="fade down">
                    <div className="flex gap-1 items-center border-b-2 border-[#E60304] ">
                        <h3 className="font-bold roboto-font text-xl text-[#E60304]">Mission</h3>
                        <img src="https://img.icons8.com/windows/32/null/goal.png" className='w-6' alt="" />
                    </div>
                    <ul className="w-full flex gap-2 flex-col open-sans-font m-1">
                        <li className='flex gap-1 items-start'><SlTarget className='mt-1.5 shrink-0 text-[#007EF6] ' />Our mission is to attain leadership at global level with excellence presence to
                            pursuit standardized quality and persistence in every aspect to meet customer’s
                            stringent requirements regarding quality, on-time delivery, safety and
                            environmental concerns.</li>
                        <li className='flex gap-1 items-start'><SlTarget className='mt-1.5 shrink-0 text-[#007EF6] ' />Continuing development for the society we aim at matching the country rapid
                            growth environment.</li>
                        <li className='flex gap-1 items-start'><SlTarget className='mt-1.5 shrink-0 text-[#007EF6] ' />Continuously extend refined technical and commercial solutions to our clients,
                            achieving optimised returns on their projects.</li>
                    </ul>
                </div>
                <div  id='vision-sec'  className="w-full md:w-1/2  md:mt-0 mt-5 "  xyz="fade down">
                    <div className="flex gap-1 items-center border-b-2 border-[#E60304] ">
                        <h3 className="font-bold roboto-font text-xl text-[#E60304]">Vision</h3>
                        <img src="https://img.icons8.com/ios-glyphs/30/null/vision.png" className='w-6' alt="" />
                    </div>
                    <ul className="w-full flex gap-2 flex-col open-sans-font mt-1">
                        <li className='flex gap-1 items-start'><VscDebugBreakpointFunctionUnverified className='mt-1.5 shrink-0 text-[#007EF6] ' />3D continues to move forward in becoming one of the leading construction
                            firms in the region and to become clients first choice, by consistently providing a
                            construction services with high quality standard at all intensity and a wellmaintained commitment.</li>
                        <li className='flex gap-1 items-start'><VscDebugBreakpointFunctionUnverified className='mt-1.5 shrink-0 text-[#007EF6] ' />At 3D, we are known for excellence in a diverse range of markets. </li>
                        <li className='flex gap-1 items-start'><VscDebugBreakpointFunctionUnverified className='mt-1.5 shrink-0 text-[#007EF6] ' />Our extensive experience in each realm is driven by the breadth and depth of
                            our qualified teams, all who take pride in doing the best possible job for our
                            clients.</li>
                        <li className='flex gap-1 items-start'><VscDebugBreakpointFunctionUnverified className='mt-1.5 shrink-0 text-[#007EF6] ' />Our vision is to create long lasting relationships with our clients satisfaction, also
                            to be the driving force in today’s fact paced world of contracting and
                            development by offering the highest standard of service, working with the latest
                            technologies and by giving the client building solutions beyond expectations.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MissionVision
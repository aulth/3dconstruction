import React, {useEffect} from 'react'
import { SlTarget } from 'react-icons/sl'
import { VscDebugBreakpointFunctionUnverified } from 'react-icons/vsc'
import '@animxyz/core'

const Capabilities = () => {
    useEffect(() => {
    if(typeof window!=undefined){
        const capabilities = document.querySelector('#capabilities');
        const capabilitiesObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element is in the window view
                    capabilities.classList.add('xyz-in')
                } else {
                    // Element is not in the window view
                    capabilities.classList.remove('xyz-in')
                }
            });
        });
      capabilitiesObserver.observe(capabilities);
      }
    }, [])
    return (
        <>
            <div id='capabilities' className="w-full flex gap-2 flex-col p-5" xyz="fade left">
                <h3 className='border-b-2 border-[#E60304] flex items-center'>
                    <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2">Capabilities</span>
                </h3>
                <p className='open-sans-font'>
                    At 3D, we have the resources and skill sets necessary to advise on refining the
                    engineering aspects of projects to deliver significant technical and commercial
                    benefits. To deliver this approach we have the support of a full range of
                    affiliated specialists in the field of construction. We have an Unlimited Grade
                    License along with RTA Prequalification Certificate which indicates that any
                    project is achievable for us.
                </p>
            </div>
        </>
    )
}

export default Capabilities
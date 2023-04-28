import React from 'react'

const Services = () => {
  return (
    <>
      <div className="w-full p-5 relative">
        <h2 className='border-b-2 border-[#E60304] flex items-center'>
          <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2">Services</span>
        </h2>
        <ul className='flex flex-col gap-4'>
          <li>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 1. Construction Contracting</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <p className="open-sans-font mt-4 text-justify">
                  3D Constraction is a core construction company with in-house MEP and
                  Wooden Work registering success in various projects comprises of commercial
                  buildings, warehouses, shops, stores, cafes, restaurants, residential buildings
                  OUR SERVICES
                  includes villas, hotels, hospitals, mosques are our gamut of services covering the
                  entire spectrum.
                </p>
                <br />
                <p className="open-sans-font text-justify">
                  3D Constraction LLC has an unlimited license, the resources and skill set
                  necessary to advise on reining the engineering aspects of projects in order to
                  deliver significant technical and commercial benefits. To deliver this approach
                  we have the support of a full range of a-listed specialists in the field of
                  construction.
                </p>

              </div>
              <div className="w-full flex justify-center md:w-[35%]">
                <img src="https://img.icons8.com/fluency/96/null/road-worker.png" className='w-1/2' alt="" />
              </div>
            </div>
          </li>
          <li>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 2. Electrical Fitting Contracting</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <ul className="flex flex-col list-decimal list-inside mt-2 open-sans-font">
                  <li> Erection and commissioning of Electrical Substations.
                  </li>
                  <li> Supply and installation of Diesel Generating Stations including L.V.
                    Switchgears, Motor Control Centres and Specialized Panels.
                    </li>
                  <li>
                    Low Voltage & Low Current Installations like Fire Alarm and Emergency
                    Lighting Systems, Security System, Access Control System, Public Address
                    System, CCTV, MATA/SMATV System, Structured Cabling System, Computer
                    Installations and Master Clock System.
                  </li>
                  <li>
                    Building Management System.
                  </li>
                  <li>
                    Dimming/Lighting Controls for residential and commercial projects.
                  </li>
                  <li>
                    Lightning Protection
                  </li>
                  <li>
                    Street Light Installations
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center md:w-[35%]">
                <img src="https://img.icons8.com/3d-fluency/94/null/electricity.png" className='w-1/2' alt="" />
              </div>
            </div>
          </li>
          <li>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 3. Air-Conditioning Services</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <ul className="flex flex-col list-decimal list-inside mt-2 open-sans-font">
                  <li> Chilled Water System
                  </li>
                  <li> Ducted Split Unit System.
                    </li>
                  <li>
                  Package Unit System

                  </li>
                  <li>
                  Centralized or Individual Ventilation/Exhaust Air Systems.
                  </li>
                  <li>
                  Ozone Generators.
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center md:w-[35%]">
                <img src="https://img.icons8.com/fluency/96/null/air-conditioner.png" className='w-[40%]' alt="" />
              </div>
            </div>
          </li>
          <li>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 4. Plumbing, Drainage, Fire Fighting and LPG Syste</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <ul className="flex flex-col list-decimal list-inside mt-2 open-sans-font">
                  <li>  Hot and Cold Water System including Steam System.
                  </li>
                  <li> Ducted Split Unit System.
                    </li>
                  <li>
                  Drainage System.

                  </li>
                  <li>
                  Pumping Stations.
                  </li>
                  <li>
                  Sewage Treatment Plants.
                  </li>
                  <li>
                  Fire Fighting Installations.
                  </li>
                  <li>
                  Sprinkler Installations.
                  </li>
                  <li>
                  CO2, Halogen & FM 200 Installations.
                  </li>
                  <li>
                  LPG Gas System.
                  </li>
                  <li>
                  Life Safety Installations.
                  </li>
                  <li>
                  Compressed Air System.
                  </li>
                  <li>
                  Solar System.
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center md:w-[35%]">
                <img src="https://img.icons8.com/3d-fluency/94/null/plumbing.png" className='w-1/2' alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Services
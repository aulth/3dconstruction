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
                3D Constraction is a core construction company with in-house MEP and Wooden Work registering success in various projects comprises of commercial buildings, warehouses, shops, stores, cafes, restaurants, residential buildings, villas, hotels, hospitals, mosques are our gamut of services covering the entire spectrum.
                </p>
                <br />
                <p className="open-sans-font text-justify">
                3D Constraction LLC has an unlimited license, the resources and skill set necessary to advise on reining the engineering aspects of projects in order to deliver significant technical and commercial benefits. To deliver this approach we have the support of a full range of a-listed specialists in the field of construction.
                </p>
                <br />
                <p className="open-sans-font text-justify">
                We are fully licensed to work on high-rise construction projects in the UAE. Our team has the experience and expertise to support a comprehensive range of projects in these areas.
At 3D, we voluntarily deploy a value-engineering approach to meet the needs of clients, led by an in-house team of dedicated professionals. Our review-and-analysis approach ensures that project plans are fully realizable; maximising opportunities for cost control while at the same time ensuring that projects are delivered on time and to the specified standards.
                </p>
              </div>
              <div className="w-full flex justify-center md:w-[35%]">
                <img src="/images/contract.jpg" className='w-[70%] object-contain' alt="" />
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
                <img src="/images/electric.jpg" className='w-[60%]' alt="" />
              </div>
            </div>
          </li>
          <li className='md:-mb-10'>
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
                <img src="/images/ac.jpg" className='w-[65%]' alt="" />
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
                <img src="/images/plumber.jpg" className='md:w-[80%] w-3/4 object-contain' alt="" />
              </div>
            </div>
          </li>
          <li className='md:-mb-10'>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 5. Interior Design</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <p className="open-sans-font mt-4 text-justify">
                Our interior design service is dedicated to transforming your space into a personalized, functional and visually stunning environment. We believe that your space should reflect your personality and lifestyle, and we work with you to bring your vision to life. Our team of experts brings a wealth of knowledge and experience to the table, and we stay up to date with the latest trends and technologies in the industry. Whether you're looking to update a single room or redesign your entire home or office, we're here to help you create a space that is both beautiful and functional.
                </p>
              </div>
              <div className="w-full flex justify-center md:w-[35%] my-4">
                <img src="/images/interior.jpg" className='md:w-[45%] w-3/4 object-contain' alt="" />
              </div>
            </div>
          </li>
          <li className='md:-mb-8'>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 6. Metal & Iron Works</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <p className="open-sans-font mt-4 text-justify">
                Our metal and iron works service offers top-notch custom fabrication and installation of high-quality metalwork for both commercial and residential clients. We are committed to delivering exceptional work that is tailored to your specific needs and requirements. From custom railings and stairs to structural steel and ornamental ironwork, our team of experienced professionals can handle any project, big or small. We take pride in our attention to detail and use the latest tools and techniques to ensure a flawless finish. Whether you're looking to add a unique touch to your home or need custom metalwork for your business, we are here to bring your ideas to life.
                </p>
              </div>
              <div className="w-full flex justify-center md:w-[35%] my-4">
                <img src="/images/metal.jpg" className='w-1/2 object-contain' alt="" />
              </div>
            </div>
          </li>
          <li className='md:-mb-10'>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 7.  Real Estate Management Supervision Services</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <p className="open-sans-font mt-4 text-justify">
Our real estate management supervision services are designed to help you manage your properties with ease and peace of mind. We understand that managing real estate can be a complex and time-consuming task, and our team is here to help. We provide a range of services, including property inspections, rent collection, maintenance coordination, and tenant screening. Our experienced professionals have a deep understanding of the industry and are committed to delivering top-notch service that exceeds your expectations. Whether you're a property owner or an investor, we can help you maximize your investment and ensure your properties are managed efficiently and effectively.
                </p>
              </div>
              <div className="w-full flex justify-center md:w-[35%] my-4">
                <img src="/images/rem.jpg" className='md:w-1/2 w-3/4 object-contain' alt="" />
              </div>
            </div>
          </li>
          <li>
            <h2 className='border-b-2 border-[#E60304] sticky md:top-[81px] top-[57px] bg-white pt-[9px] flex items-center'>
              <span className="font-bold roboto-font uppercase bg-[#E60304] text-white p-2"> 8.   Real Estate Buying & Selling Brokerage</span>
            </h2>
            <div className="w-full flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col md:w-[65%]">
                <p className="open-sans-font mt-4 text-justify">

                Our real estate buying and selling brokerage service is dedicated to helping you buy or sell your property with ease and confidence. Our experienced agents are here to guide you through every step of the process, from determining the right price to negotiating the best deal. We have a deep understanding of the local market and can provide you with valuable insights and information to help you make informed decisions. Our goal is to make the buying or selling process as smooth and stress-free as possible. Whether you're a first-time buyer or an experienced seller, we're here to help you achieve your real estate goals.
                </p>
              </div>
              <div className="w-full flex justify-center md:w-[35%] my-4">
                <img src="/images/brokerage.jpg" className='md:w-1/2 w-3/4' alt="" />
              </div>
            </div>
          </li>
        </ul>
        <a href='/3dprofile.pdf' download={true} className="px-3 py-1 bg-[#007EF6] text-white text-center">Download 3D Profile</a>
      </div>
    </>
  )
}

export default Services
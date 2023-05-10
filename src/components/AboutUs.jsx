import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 p-5">
      <div className="w-full md:w-3/4">
        <h2 className="font-bold roboto-font uppercasee text-center text-2xl border-b pb-2">About</h2>
        <p className="open-sans-font text-justify mt-5">
          3D Constraction is a core construction company with in-house MEP, Metal  and Wooden Work registering success in various projects comprises of commercial buildings, warehouses, shops, stores, cafes, restaurants, residential buildings,villas, hotels, hospitals, mosques are our gamut of services covering the entire spectrum.
        </p>
        <br />
        <p className="open-sans-font text-justify  ">
          3D Constraction LLC has an unlimited license, the resources and skill set necessary to advise on reining the engineering aspects of projects in order to deliver significant technical and commercial benefits. To deliver this approach we have the support of a full range of a-listed specialists in the field of construction.
        </p>
        <br />
        <p className="open-sans-font text-justify  ">
          In house MEP team comprising of highly qualified engineers and experienced technicians we offer complete Installations, Testing, Commissioning & 24x7 maintenance services.
          When people look at 3D Constraction LLC from the outside, it is hard for them to get the complete picture. They see us as a conglomerate leaving its mark on a landscape through mega projects and as a prominent player in the market. But as 3D Constraction LLC has grown over the last 8 years, we can assure you that it’s a lot more than that. Serving various sector now we have 3D Constraction LLC with inhouse MEP and Carpentry Work, 3D Metal & Aluminum Work and 3D Real Estate as well.
        </p>
        <br />
        {/* <p className="open-sans-font text-justify  ">
          Today, we have over 42 iconic projects completed and over 500 people on our team. We know we have made a mark. But our goal is to shape the future, and a goal like that is an evolving process. This is just the beginning.
        </p>
        <br /> */}
        <p className="open-sans-font text-justify">
        Beginning in 2014, our mission was not just to execute projects that would make a big impression. We wanted to create monuments that stand as testaments to the region’s potential, reflect the limitless vision of its leaders and exceed the expectations of the thousands that came here with dreams to achieve. In short, we wanted to play our part in shaping the future of the UAE.
        </p>
        <h3 className="font-bold roboto-font uppercasee text-center text-xl border-b pb-2 mt-4">Final Word</h3>
        <p className="open-sans-font text-justify mt-5">
          As 3D we can covert an empty land to a beautiful structure with all the related works at one stop providing you services till the lifetime of the project in terms of sale, lease or maintenance.
        </p>
        <br />
        <p className="open-sans-font text-justify  ">
          At 3D, we are known for excellence in a diverse range of markets. Our extensive experience in each and every realm is driven by the breadth and depth of our qualified teams, all who take pride in doing the best possible job for our clients.
        </p>
        <br />
        <p className="open-sans-font text-justify  ">
          As a compiled group we offer our services at one stop saving time, money and efforts for our customer with a single point of contact for your query related to any of our services or solutions.
        </p>
        <h3 className="font-bold roboto-font uppercasee text-center text-xl border-t pt-2 mt-4">3D Group Service Graph</h3>
        <img src="/images/servicegraph.jpg" className='mx-auto w-1/2 mt-4' alt="" />
        <h3 className="font-bold roboto-font uppercasee text-center text-xl border-t pt-2 mt-4">3D Group Location Graph</h3>
        <img src="/images/locationgraph.jpg" className='mx-auto w-[55%] mt-4' alt="" />
      </div>
    </div>
  )
}

export default AboutUs
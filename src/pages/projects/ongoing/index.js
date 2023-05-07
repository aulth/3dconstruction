import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'
import ProjectsCategory from '@/components/ProjectsCategory'
const projectspage = ({data}) => {
  return (
    <>
    <Head>
        <title>Ongoing Projects - 3D Constraction LLC</title>
        <meta name="title" content={"Ongoing Projects - 3D Constraction LLC"} />
        <meta name="description" content={"Explore all our ongoing projects "} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://www.3dconstractionllc.com/ongoing/completed/`} />
        <meta property="og:title" content={"Completed Projects - 3D Constraction LLC"} />
        <meta property="og:description" content={"Explore all our ongoing projects"} />
        <meta property="og:image" content="/images/ongoing.jpg" />
      </Head>
    <Navbar/>
    {
      data && <ProjectsCategory data={data}/>
    }
    {
      !data && <p>No Project Found</p>
    }
    <Footer/>
    </>
  )
}

export default projectspage
export async function getServerSideProps(context) {
  const response = await fetch('http://www.3dconstractionllc.com/api/fetchall')
  var data = await response.json();
  if (data.success) {
    data = data.projects;
    data = data.filter((item=>!item.completed))
  } else {
    data = "";
  }
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}
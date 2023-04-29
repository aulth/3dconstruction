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
        <title>Ongoing Projects - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
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
  const response = await fetch('https://3dconstruction.vercel.app/api/fetchall')
  var data = await response.json();
  console.log(data)
  if (data.success) {
    data = data.projects;
    data = data.filter((item=>!item.completed))
  } else {
    data = "";
  }
  console.log(data);
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}
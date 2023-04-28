import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'
import Head from 'next/head'
const projectspage = ({data}) => {
  return (
    <>
    <Head>
        <title>Projects - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
      </Head>
    <Navbar/>
    {
      data && <Projects data={data}/>
    }
    {
      !data && <p>No Project Found</p>
    }
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
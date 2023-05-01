import AddProject from '@/components/AddProject'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React, { useState } from 'react'
import ProjectItem from '@/components/Admin/ProjectItem'
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head'
import Footer from '@/components/Footer'
const add = ({ allProjects }) => {
  const [togglUpdate, setTogglUpdate] = useState(false)
  const [data, setData] = useState(allProjects)
  const [authorized, setAuthorized] = useState(false)
  const verifyAdmin = (e) => {
    e.preventDefault();
    if (document.getElementById('pin').value == process.env.NEXT_PUBLIC_ADMIN_PIN) {
      toast.success("Verified");
      setAuthorized(true)
    } else {
      toast.error("You are not authorised");
      return;
    }
  }
  const updateStatus = async (id, status) => {
    const response = await fetch('/api/update', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id: id, completed: status })
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.msg);
      fetchData();
    } else {
      toast.error(json.msg)
    }
  }
  const deleteProject = async (id) => {
    const response = await fetch('/api/delete', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.msg)
      fetchData();
    } else {
      toast.error(json.msg)
    }
  }

  const fetchData = async () => {
    const response = await fetch('/api/fetchall')
    var data = await response.json();
    if (data.success) {
      data = data.projects;
      setData(data.reverse());
    } else {
      data = "";
    }
  }

  return (
    <>
      <Head>
        <title>Admin - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
      </Head>
      <Toaster position='top-right' />
      <Navbar />
      <div className="bg-[rgb(248,250,252)] w-full md:min-h-[calc(100vh-81px-72px)] min-h-[calc(100vh-57px)]">
        <div className="container m-auto px-4 py-4 md:px-12  relative">
          {
            !authorized &&
            <form onSubmit={verifyAdmin} className="m-auto w-full md:w-80 flex flex-col gap-4 p-4">
              <h2 className="font-semibold text-center">Admin Password</h2>
              <input type="text" placeholder='Pin' id='pin' className='w-full p-1 focus:border-cyan-400 focus:outline-none border-b border-gray-200' required />
              <button type="submit" className='w-full px-2 py-1 bg-[#E60304] text-white'>Verify</button>
            </form>
          }
          {
            authorized &&
            <>
              <AddProject fetchData={fetchData} />
              <div className='flex   flex-col   gap-4'>
                {data && data.length > 0 &&
                  data.map((data, index) => {
                    return <ProjectItem updateStatus={updateStatus} deleteProject={deleteProject} data={data} key={index} />
                  })
                }
              </div>
            </>
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default add
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
      allProjects: data
    }, // will be passed to the page component as props
  }
}
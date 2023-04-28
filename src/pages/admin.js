import AddProject from '@/components/AddProject'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React, {useState} from 'react'
import ProjectItem from '@/components/Admin/ProjectItem'
import toast, { Toaster } from 'react-hot-toast';

const add = ({allProjects}) => {
  const [togglUpdate, setTogglUpdate] = useState(false)
  const [data, setData] = useState(allProjects)
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
        body: JSON.stringify({ id: id})
    });
    const json = await response.json();
    if (json.success) {
        toast.success(json.msg)
    } else {
        toast.error(json.msg)
    }
}

const fetchData = async ()=>{
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
      <Toaster position='top-right' />
      <Navbar />
      <AddProject fetchData={fetchData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 pt-2">
        {data && data.length>0 &&
        data.map((data, index)=>{
          return <ProjectItem   updateStatus={updateStatus} deleteProject={deleteProject} data={data} key={index}/>
        })
        }
        {
          !data && <p>No Project Found</p>
        }
      </div>
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
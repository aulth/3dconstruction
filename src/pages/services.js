import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'
import Head from 'next/head'
const servicePage = () => {
  return (
    <>
    <Head>
        <title>Services - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
      </Head>
    <Navbar/>
    <Services/>
    <Footer/>
    </>
  )
}

export default servicePage
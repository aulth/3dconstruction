import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
const contact = () => {
  return (
    <>
    <Head>
        <title>Contact - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
      </Head>
    <Navbar/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default contact
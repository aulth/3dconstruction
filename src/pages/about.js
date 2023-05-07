import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
const about = () => {
  return (
    <>
    <Head>
        <title>About - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Discover our story and mission at our About Us page. Learn more about our team, services, and values. Join us in making a positive impact!" name="description" />
      </Head>
    <Navbar/>
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default about
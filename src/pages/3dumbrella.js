import Navbar from '@/components/Navbar'
import UmbrellaPage from '@/components/UmbrellaPage'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'
const Umbrella = () => {
  return (
    <>
    <Head>
        <title>3D Umbrella - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Our umbrella consists of the 3D Constraction LLC 3D Aluminum and Metal Works and 3D Real Estate vectors
" name="description" />
      </Head>
    <Navbar/>
<UmbrellaPage/>
<Footer/>
    </>
  )
}

export default Umbrella
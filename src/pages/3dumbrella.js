import Navbar from '@/components/Navbar'
import UmbrellaPage from '@/components/UmbrellaPage'
import React from 'react'
import Head from 'next/head'
const Umbrella = () => {
  return (
    <>
    <Head>
        <title>3D Umbrella - 3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
      </Head>
    <Navbar/>
<UmbrellaPage/>
    </>
  )
}

export default Umbrella
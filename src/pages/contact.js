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
        <meta content="Get in touch with us today! Contact our team for inquiries, support, and collaborations. We're always here to help. Let's connect and grow together." name="description" />
      </Head>
    <Navbar/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default contact
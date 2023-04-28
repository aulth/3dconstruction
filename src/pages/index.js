import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import AboutSection from '@/components/AboutSection'
import MissionVision from '@/components/MissionVision'
import Capabilities from '@/components/Capabilities'
import OurServices from '@/components/OurServices'
import Stats from '@/components/Stats'
import Umbrella from '@/components/Umbrella'
import Footer from '@/components/Footer'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Constraction</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Constraction" name="keywords" />
        <meta content="Constarction" name="description" />
      </Head>
      <Navbar />
      <Slider />
      <AboutSection />
      <MissionVision />
      <Capabilities />
      <OurServices />
      <Stats />
      <Umbrella />
      <Footer />
    </>
  )
}

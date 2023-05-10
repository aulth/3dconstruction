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
        <title>3D Constraction LLC</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="3D Constraction: A leading construction company with expertise in commercial and residential projects. Specializing in MEP, metal, and wooden work." name="description" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="u0t-4eiO9ZpatxsIJjjKLB7m50thQq3PLb-ERifJ_xs" />
      </Head>
      <Navbar />
      <Slider />
      <AboutSection />
      <MissionVision />
      <Capabilities />
      <OurServices />
      {/* <Stats data={data} /> */}
      <Umbrella />
      <Footer />
    </>
  )
}
// export async function getServerSideProps(context) {
//   const response = await fetch('https://www.3dconstractionllc.com/api/fetchall')
//   var data = await response.json();
//   let completed = 0;
//   let ongoing = 0;
//   if (data.success) {
//     data = data.projects;
//     data.forEach(element => {
//       if(element.completed){
//         completed++;
//       }else{
//         ongoing++;
//       }
//     });
//   } else {
//     data = "";
//   }
//   return {
//     props: {
//       data: {
//         completed:completed,
//         ongoing:ongoing
//       }
//     }, // will be passed to the page component as props
//   }
// }

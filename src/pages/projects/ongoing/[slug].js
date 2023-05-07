import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from 'react-icons/md'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { useRouter } from 'next/router';
import Head from 'next/head';
import {IoMdClose} from 'react-icons/io'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const ProductPage = ({ data, thumbnail }) => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slider, setSlider] = useState(null);

    const next = () => {
        if (slider) {
            slider.slickNext();
        }
    };

    const previous = () => {
        if (slider) {
            slider.slickPrev();
        }
    };
    const images = data?.images
    const handleClick = async () => {
        try {
            await navigator.share({ title: data.project, url: `http://www.3dconstractionllc.com/projects/ongoing/${data._id}` });
        } catch (error) {
            console.error('Error sharing:', error);
            return;
        }
    };
    return (
        <>
            <Head>
                <title>{data?.project ? data.project : "Project Not Found"}</title>
                <meta name="title" content={data?.project ? data.project : 'Not Found'} />
                <meta name="description" content={data?.area ? data.area : 'Not Found'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`http://www.3dconstractionllc.com/projects/ongoing/${data?._id?data._id:''}`} />
                <meta property="og:title" content={data?.project ? data.project : "Project Not Found"} />
                <meta property="og:description" content={data?.area ? data.area : 'Not Found'} />
                <meta property="og:image" content={thumbnail?thumbnail:''} />
            </Head>
            {
            !data &&
            <div className="w-full flex h-screen justify-center items-center">Project Not Found</div>
        }
            {
                data &&
                <div className="w-screen h-screen bg-[#393939] overflow-y-hidden">
                    <div className="w-full p-5 flex items-center bg-[#1d1c1c] text-white z-20">
                        <div className="w-full flex items-center flex-wrap">
                            <h2 className="roboto-font font-bold">{data.project} </h2>
                            <span className='mx-2'>-</span>
                            <h3 className="open-sans-font ">{data.area}</h3>
                            <span className='mx-2'>-</span>
                            <h4 className="open-sans-font">{data.consultant}</h4>
                        </div>
                        <div className="flex md:items-center items-end">
                        <IoMdClose className='cursor-pointer' onClick={()=>{router.push('/projects/ongoing')}}/>
                    </div>
                    </div>
                    <div className="w-screen flex items-center  h-[calc(100vh-112px)] md:h-[calc(100vh-64px)]">
                        <div className="w-full ">
                            <div className="relative overflow-x-hidden ">
                                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                                    {images.map((image, index) => (
                                        <div key={index} className='w-full md:h-[calc(100vh-69px)]'>
                                            <img src={image} className='w-full object-cover aspect-video' />
                                        </div>
                                    ))}
                                </Slider>
                                <button
                                    className="absolute bg-gray-800 p-2 ml-2 text-white top-1/2 left-0 transform -translate-y-1/2 focus:outline-none"
                                    onClick={previous}
                                >
                                    <MdOutlineNavigateNext className='rotate-180 text-lg' />
                                </button>
                                <button
                                    className="absolute  bg-gray-800 p-2 mr-2 text-white top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
                                    onClick={next}
                                >
                                    <MdOutlineNavigateNext className='text-lg' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className="p-2 fixed bottom-2 right-2 flex justify-center items-center bg-gray-950 text-white rounded-full">
                <AiOutlineShareAlt className='' />
                </button>
                </div>
            }
        </>
    )
}

export default ProductPage
export async function getServerSideProps(context) {
    const { slug } = context.params
    const response = await fetch('https://www.3dconstractionllc.com/api/fetchone', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ id: slug })
    })
    var data = await response.json();
    let thumbnail;
    if (data.success) {
        data = data.project;
        thumbnail = data.images[0];
        console.log(thumbnail)
    } else {
        data = null;
    }
    return {
        props: {
            data: data,
            thumbnail:thumbnail
        }, // will be passed to the page component as props
    }
}
"use client"
import React from 'react'
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { BiCart } from "react-icons/bi";

import Style from "@/css/home.module.css"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

const Page = () => {
    const carousel = [
        {
            img: '/product/Adjustable Bench_1.png',
            title: 'Adjustable Bench',
            price: '$7.00'
        },
        {
            img: '/product/Dumbell Chair.png',
            title: 'Dumbell Chair',
            price: '$7.00'
        },
        {
            img: '/product/Decline Bench Press_1.png',
            title: 'Decline Bench Press',
            price: '$7.00'
        },
        {
            img: '/product/Leverage Squat_1.png',
            title: 'Leverage Squat',
            price: '$7.00'
        },
        {
            img: '/product/Preacher Curl Bench_1.png',
            title: 'Preacher Curl Bench',
            price: '$7.00'
        }
        
    ]
    return (
        <div className={`container scroll-smooth`}>
            {/* Main Section */}
            <section className=" body-font ">
                <div className="">
                    <div className="flex flex-row   ">

                        <div className="w-1/2 flex flex-col md:pl-5">
                            <div className='flex flex-col items-end'>
                                <img  src="/40544 1.png" className='md:mt-40 mt-10' alt="" />
                            </div>
                            <h2 className='text-lg font-semibold pt-6 pb-4'>Commercial Fitness Product</h2>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {carousel.map((items, index) => (
                                        <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3 px-5">
                                            <div className="p-1 border-l border-r border-t rounded-lg">
                                                <Link href={`/product/${items.title.trim().toLowerCase().replace(/\s+/g, '-')}`}>
                                                
                                                <div className='text-end'>
                                                    {/* <BiCart className='m-1 inline' />
                                                    <FaInstagram className='m-1 inline' /> */}
                                                </div>
                                                <img src={items.img} className=" mx-auto rounded-md w-full
                                                 h-full" />
                                                <h2 className='text-center mx-auto '>{items.title}</h2>
                                                {/* <h2 className='text-center mx-auto'>{items.price}</h2> */}
                                                </Link>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                            </Carousel>
                            <h2 className='text-lg font-semibold pt-6 pb-4'>Our Limitless Range</h2>
                            <div className="flex flex-col ">

                                <div className="px-5 w-full max-md:max-w-full">

                                    <div className="grid gap-4  md:grid-cols-4">

                                        <Link className="" href={`/product/dumbell-rack`}>
                                            <img
                                                loading="lazy"
                                                src="/product/Dumbell Rack_1.png"
                                                className="grow max-w-full aspect-[1.12]  max-md:mt-5 w-full"
                                            />
                                        </Link>

                                        <Link className="" href={`/product/flat-bench-press`}>
                                            <img
                                                loading="lazy"
                                                src="/product/Flat Bench Press_1.png"
                                                className="grow max-w-full aspect-[1.12]  max-md:mt-5 w-full"
                                            />
                                        </Link>

                                        <Link className="" href={`/product/hyper-extension`}>
                                            <img
                                                loading="lazy"
                                                src="/product/Hyper Extension.png"
                                                className="grow max-w-full aspect-[1.12]  max-md:mt-5 w-full"
                                            />
                                        </Link>

                                        <Link className="" href={`/product/inclined-bench-press`}>
                                            <img
                                                loading="lazy"
                                                src="/product/Inclined Bench Press.png"
                                                className="grow max-w-full aspect-[1.12]  max-md:mt-5 w-full"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc37abf4947f20adc41db9c3ba5f884cc28b4121b5a87be6595ddbd356465fa?"
                                    className="self-center mt-4 max-w-full aspect-[100] w-[195px] hidden md:block"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-start  mt-5">
                            {/* <img src="/Rectangle 61.png" alt="" /> */}
                            <div className="flex overflow-hidden relative flex-col items-start py-12 pl-5 ">
                                <img
                                    loading="lazy"
                                    src="/Rectangle 61.png"
                                    className="md:w-full w-[150px]  absolute inset-0  brightness-75 "
                                />
                                <div className="relative w-[120px] text-wrap  md:ml-7 md:text-3xl text-xl font-bold text-white md:mt-20 md:w-[350px] max-md:ml-2.5">
                                    Premium Commercial Gym Equipments
                                </div>
                                <div className="flex flex-col md:flex-row relative gap-5 justify-between mt-10 ml-7 text-xl font-bold whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
                                    <div className="grow justify-center w-[120px] md:w-fit text-wrap px-2 py-1.5 text-white bg-blue-900 rounded-md">
                                        Ask Quotation
                                    </div>
                                    <div className="grow justify-center w-[120px] md:w-fit text-wrap px-3 py-1.5 text-blue-900 rounded-md border-2 border-blue-900 border-solid">
                                        Make In India
                                    </div>
                                </div>
                                <div className="relative mt-16 ml-7 text-xl font-bold whitespace-nowrap text-zinc-400 max-md:mt-10 max-md:ml-2.5">
                                    Iron Tribe
                                </div>
                                <div className="relative mt-4 ml-6 text-xs w-[120px] md:w-fit leading-5 font-medium text-zinc-400 max-md:ml-2.5">
                                    Welcome to Iron Tribe – Your Ultimate Fitness Solution! At Iron Tribe,
                                    we believe in sculpting more than just bodies; we are dedicated to
                                    forging a community of fitness enthusiasts driven by passion and
                                    perseverance. <span className='hidden md:block'>Our cutting-edge gym equipment is crafted with precision,
                                        designed for performance, and engineered to elevate your fitness
                                        journey. Step into a world where strength meets innovation, and embark
                                        on a transformative experience that transcends the ordinary. Join the
                                        tribe that defines fitness excellence – welcome to Iron Tribe, where
                                        every rep brings you closer to greatness.</span>
                                </div>
                                <div className="flex relative flex-col flex-wrap justify-center content-center self-stretch px-0 mt-36 text-white max-md:px-5 max-md:mt-10 max-md:max-w-full mb-10 ">
                                    {/* <div className="flex gap-5 justify-between whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex flex-col flex-1 justify-center w-[120px] md:w-fit text-wrap">
                                            <div className="flex flex-col md:flex-row gap-3.5 justify-between px-4 py-6 rounded-2xl border-2 border-solid border-zinc-300">
                                                <div className="w-12 rounded-full bg-zinc-300 h-[49px]" />
                                                <div className="flex flex-col flex-1 my-auto ">
                                                    <div className="text-sm md:text-xl font-bold">Treadmills</div>
                                                    <div className="mt-1.5 text-sm">Hipster ipsum tattooed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-1 justify-center w-[120px] md:w-fit text-wrap">
                                            <div className="flex flex-col md:flex-row  gap-3.5 justify-between px-4 py-6 rounded-2xl border-2 border-solid border-zinc-300">
                                                <div className="w-12 rounded-full bg-zinc-300 h-[49px]" />
                                                <div className="flex flex-col flex-1 my-auto ">
                                                    <div className="text-sm md:text-xl font-bold">Dumbbells</div>
                                                    <div className="mt-1.5 text-sm">Hipster ipsum tattooed</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="flex gap-5 justify-between mt-10 max-md:flex-wrap max-md:max-w-full ">
                                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap w-[120px] md:w-fit text-wrap ">
                                                <div className="flex flex-col md:flex-row  gap-3.5 justify-between px-4 py-6 rounded-2xl border-2 border-solid border-zinc-300">
                                                    <div className="w-12 rounded-full bg-zinc-300 h-[49px]" />
                                                    <div className="flex flex-col flex-1 my-auto ">
                                                        <div className="text-sm md:text-xl font-bold">Cycling</div>
                                                        <div className="mt-1.5 text-sm">Hipster ipsum tattooed</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap w-[120px] md:w-fit text-wrap">
                                                <div className="flex flex-col md:flex-row  gap-3.5 justify-between px-4 py-6 rounded-2xl border-2 border-solid border-zinc-300">
                                                    <div className="w-12 rounded-full bg-zinc-300 h-[49px]" />
                                                    <div className="flex flex-col flex-1 my-auto ">
                                                        <div className="text-sm md:text-xl font-bold">Jump Rope</div>
                                                        <div className="mt-1.5 text-sm">Hipster ipsum tattooed</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fitness Category */}
            <div className=' p-0 pt-5  md:pl-5'>

                <div className="md:flex md:justify-between  md:items-center ">
                    <div >
                        <h2 className='text-xl font-semibold pt-6 p-2'>Shop By</h2>
                        <h2 className='text-lg font-semibold md:pt-2 pb-4 p-2'>Fitness Category</h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-6">
                            <Link className='space-y-2' href={`/product/dSC06258`}>
                                <img src='/product/DSC06258.png' className='mx-auto rounded-xl border md:w-60'>

                                </img>
                                <h2 className='text-center'>DSC06258</h2>
                            </Link>
                            <Link className='space-y-2' href={`/product/seated-calf`}>
                                <img src='/product/Seated Calf.png' className='mx-auto rounded-xl border md:w-60'>

                                </img>
                                <h2 className='text-center'>Seated Calf</h2>
                            </Link>
                            <Link className='space-y-2' href={`/product/stool`}>
                                <img src='/product/Stool_1.png' className='mx-auto rounded-xl border md:w-60'>

                                </img>
                                <h2 className='text-center'>Stool</h2>
                            </Link>
                            <Link className='space-y-2' href={`/product/twister`}>
                                <img src='/product/Twister.png' className='mx-auto rounded-xl border md:w-60'>

                                </img>
                                <h2 className='text-center'>Twister</h2>
                            </Link>
                        </div>

                    </div>
                    <div className='h-full md:w-[55%] pt-10 md:pt-0 relative '>
                        <img src="/Rectangle6.png" alt="" className='relative w-full hidden md:block' />
                        <div className={`text-white p-2 text-center md:text-left md:p-10 md:w-[70%] md:rounded-lg md:absolute md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] ${Style.backgroundColor}`}>
                            <h2 className='pb-2 text-lg '>Join the Iron Tribe Movement</h2>
                            <p className='space-y-6 pb-2 text-sm'>Whether you are a seasoned athlete, a fitness novice, or a gym owner looking to elevate your space, Iron Tribe welcomes you to join the movement. We are not just selling equipment; we are inviting you to be part of a fitness revolution that prioritizes quality, innovation, and community.</p>
                            <p className='space-y-6 text-sm'>Discover the Iron Tribe difference – where fitness meets purpose, and every workout becomes a step towards a stronger, healthier you.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* why choose us */}
            <div className=' md:p-10 py-10 '>
                <h2 className='text-center text-xl font-semibold pb-5'>
                    Why Choose Us?
                </h2>
                <div className="">
                    <div className="md:hidden grid gap-4 grid-cols-2">
                        <div className=''>
                            <div className={`${Style.backgroundImage} relative`}>
                                <div className="border-l border-t border-r border-white w-[100%] h-[50%]"></div>
                                <div className="absolute top-2 mx-5 text-center">
                                    <h2 className=''>Innovative Design</h2>
                                    <p className='text-xs mt-2'>Our equipment is meticulously crafted, combiningfunctionality with cutting-edge design to elevate your workout experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className={`${Style.backgroundImage} relative`}>
                                <div className="absolute top-2 mx-5 text-center">
                                    <h2 className=''>Quality Assurance</h2>
                                    <p className='text-xs mt-2'>Iron Tribe products undergo rigorous quality checks, ensuring durability and reliability for the long haul.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 border-l border-b border-r border-white h-[50%]"></div>
                            </div>
                        </div>
                        <div className=''>
                            <div className={`${Style.backgroundImage} relative`}>
                                <div className="border-l border-t border-r border-white w-[100%] h-[50%]"></div>
                                <div className="absolute top-2 mx-5 text-center">
                                    <h2 className=''>Global Reach</h2>
                                    <p className='text-xs mt-2'>Iron Tribe is not just a brand; it is a global movement. Join us inshaping the future of fitness across the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className={`${Style.backgroundImage} relative`}>
                                <div className="absolute top-2 mx-5 text-center">
                                    <h2 className=''>Customization</h2>
                                    <p className='text-xs mt-2'>Tailor your fitness space with our diverse range of equipment, designed to meet the unique needs of every individual.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 border-l border-b border-r border-white h-[50%]"></div>
                            </div>
                        </div>
                        <div className=''>
                            <div className={`${Style.backgroundImage} relative`}>
                                <div className="border-l border-t border-r border-white w-[100%] h-[50%]"></div>
                                <div className="absolute top-2 mx-5 text-center">
                                    <h2 className=''>Fitness Community</h2>
                                    <p className='text-xs mt-1'>Join a thriving community of fitness enthusiasts connected by the Iron Tribe ethos – a shared commitment to health and wellness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block ">
                        <div className={`flex flex-col md:flex-row gap-4 justify-evenly`} >
                            <div className=''>
                                <div className={`${Style.backgroundImage} relative`}>
                                    <div className="border-l border-t border-r border-white w-[100%] h-[50%]"></div>
                                    <div className="absolute top-2 mx-5 text-center">
                                        <h2 className=''>Innovative Design</h2>
                                        <p className='text-xs mt-2'>Our equipment is meticulously crafted, combiningfunctionality with cutting-edge design to elevate your workout experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className={`${Style.backgroundImage} relative`}>
                                    <div className="absolute top-2 mx-5 text-center">
                                        <h2 className=''>Quality Assurance</h2>
                                        <p className='text-xs mt-2'>Iron Tribe products undergo rigorous quality checks, ensuring durability and reliability for the long haul.</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 border-l border-b border-r border-white h-[50%]"></div>
                                </div>
                            </div>
                            <div className=''>
                                <div className={`${Style.backgroundImage} relative`}>
                                    <div className="border-l border-t border-r border-white w-[100%] h-[50%]"></div>
                                    <div className="absolute top-2 mx-5 text-center">
                                        <h2 className=''>Global Reach</h2>
                                        <p className='text-xs mt-2'>Iron Tribe is not just a brand; it is a global movement. Join us inshaping the future of fitness across the world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className={`${Style.backgroundImage} relative`}>
                                    <div className="absolute top-2 mx-5 text-center">
                                        <h2 className=''>Customization</h2>
                                        <p className='text-xs mt-2'>Tailor your fitness space with our diverse range of equipment, designed to meet the unique needs of every individual.</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 border-l border-b border-r border-white h-[50%]"></div>
                                </div>
                            </div>
                            <div className=''>
                                <div className={`${Style.backgroundImage} relative`}>
                                    <div className="border-l border-t border-r border-white w-[100%] h-[50%]"></div>
                                    <div className="absolute top-2 mx-5 text-center">
                                        <h2 className=''>Fitness Community</h2>
                                        <p className='text-xs mt-1'>Join a thriving community of fitness enthusiasts connected by the Iron Tribe ethos – a shared commitment to health and wellness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Page
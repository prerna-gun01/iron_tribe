"use client"
import React from 'react'
import Style from "@/css/home.module.css"
const Page = () => {
    return (
        <div className={`bg-black/90 text-white ${Style.montSerrat} `}>
           
            {/* About Us */}
            <div className="relative p-5 mx-auto container flex items-center justify-center">

                <img
                    src="/Rectangle 75.png" // Replace with your actual image path
                    alt="Background Image"
                    className=" w-full h-full"
                />


                <div className="absolute text-white text-center">
                    <h2 className="md:text-4xl text-xl font-bold md:mb-4">About Us</h2>
                    {/* <p className="text-lg">Your text content goes here.</p> */}
                </div>
            </div>
            {/* para */}
            <div className='container p-5 max-auto text-sm text-center'>
                At Iron Tribe, we are not just a gym equipment manufacturing company; we are architectsof fitness revolutions. Established with a commitment to redefine workout experiences,we pride ourselves on crafting equipment that seamlessly merges functionality withaesthetics. Our journey began with a simple yet powerful vision: to inspire andempower individuals to achieve their fitness goals. Every piece of equipment that bearsthe Iron Tribe name reflects our dedication to quality, durability, and innovation. Exploreour story, and discover the driving force behind the tools that are reshaping the fitnesslandscape.
                <br />
                At Iron Tribe, our story is one of passion, commitment, and a relentless pursuit of fitnessinnovation. Founded by a team of fitness enthusiasts, engineers, and industry experts,we envisioned a world where individuals could transcend their limits throughpurposeful and effective workouts. What started as a humble idea has now evolved intoa global force in gym equipment manufacturing.
            </div>
            {/* mission and vision */}
            <div className={`container mx-auto  relative md:mt-32  `}>
                <img src="/Rectangle7.png" alt="" className={`w-full relative ${Style.filter} hidden md:block `} />
                <div className="absolute -top-20 left-20 hidden md:block">
                    <img src="/Rectangle 77.png" alt="" />
                </div>
                <div className={` text-white p-4 md:p-10 mx-auto md:w-[40%] md:rounded-lg md:absolute left-[40%] text-center md:text-left top-20 ${Style.backgroundColor}`}>
                    <h2 className='pb-2 text-2xl font-semibold lea'>Our Mission</h2>
                    <p className=' pb-2 text-sm'>To design and manufacture gym equipment that transcends excellence, fostering a global community committed to healthier, stronger, and more fulfilling lives.
                    </p>
                </div>
                <div className={` text-white p-4 md:p-10 md:w-[40%] md:rounded-lg md:absolute bottom-32 text-center md:text-left right-[50%] ${Style.backgroundColor}`}>
                    <h2 className='pb-2 text-2xl font-semibold'>Our Vision</h2>
                    <p className='pb-2 text-sm'>Empowering lives through fitness innovation – redefining the boundaries of possibility one workout at a time.
                    </p>
                </div>
                <div className="absolute bottom-32 right-52 hidden md:block">
                    <img src="/Rectangle 79.png" alt="" className='rounded-lg ' />
                </div>
            </div>

            {/* our core values */}
            <div className="container p-5 mx-auto text-center">
                <h2 className="text-center text-xl font-bold my-5 mb-10">Our Core Values</h2>

                <div className="grid gap-4 md:gap-10 md:mx-20 md:px-10 
                grid-cols-2 
                md:grid-cols-5">

                    <div className="border-l border-r border-b rounded-lg border-blue-900 ">
                        <div className="mx-auto rounded-full w-20 h-20 bg-blue-900 border border-white"></div>
                        <div className="mx-auto py-5 px-5">
                            <h2 className="text-lg font-semibold mb-2">Excellence</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eveniet id porro, quaerat placeat deleniti.</p>
                        </div>
                    </div>
                    <div className="border-l border-r border-b rounded-lg border-blue-900 ">
                        <div className="mx-auto rounded-full w-20 h-20 bg-blue-900 border border-white"></div>
                        <div className="mx-auto py-5 px-5">
                            <h2 className="text-lg font-semibold mb-2">Excellence</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eveniet id porro, quaerat placeat deleniti.</p>
                        </div>
                    </div>
                    <div className="border-l border-r border-b rounded-lg border-blue-900 ">
                        <div className="mx-auto rounded-full w-20 h-20 bg-blue-900 border border-white"></div>
                        <div className="mx-auto py-5 px-5">
                            <h2 className="text-lg font-semibold mb-2">Excellence</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eveniet id porro, quaerat placeat deleniti.</p>
                        </div>
                    </div>
                    <div className="border-l border-r border-b rounded-lg border-blue-900 ">
                        <div className="mx-auto rounded-full w-20 h-20 bg-blue-900 border border-white"></div>
                        <div className="mx-auto py-5 px-5">
                            <h2 className="text-lg font-semibold mb-2">Excellence</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eveniet id porro, quaerat placeat deleniti.</p>
                        </div>
                    </div>
                    <div className="border-l border-r border-b rounded-lg border-blue-900 ">
                        <div className="mx-auto rounded-full w-20 h-20 bg-blue-900 border border-white"></div>
                        <div className="mx-auto py-5 px-5">
                            <h2 className="text-lg font-semibold mb-2">Excellence</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eveniet id porro, quaerat placeat deleniti.</p>
                        </div>
                    </div>
                </div>


            </div>

            {/* our team */}
            <div className='h-full w-[100%] p-5 mx-auto container relative '>
                <img src="/Rectangle 76.png" alt="" className='relative w-full h-full hidden md:block' />
                <div className={`text-center p-4 text-white md:p-10 md:w-[70%]  top-0 rounded-lg md:absolute md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] ${Style.backgroundCoolor} `}>
                    <h2 className='pb-2 text-lg '>Our Team</h2>
                    <p className='space-y-6 pb-2 text-sm'>Behind every Iron Tribe product is a dedicated team of fitness enthusiasts, engineers, designers, and experts who share a common vision – to empower individuals to lead healthier, happier lives. Our team&apos;s diverse expertise ensures that we not only meet industry standards but set new ones.</p>

                </div>
            </div>

           
        </div>
    )
}

export default Page
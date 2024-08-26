"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import Link from 'next/link';
import Style from "@/css/home.module.css"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tab = ({ isSelected, onClick, children }) => (
    <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        style={{
            padding: '10px',
            borderBottom: isSelected ? '2px solid blue' : '2px solid transparent',
            cursor: 'pointer',
        }}
    >
        {children}
    </motion.div>
);

const TabContent = ({ isSelected, children }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        style={{ marginTop: '10px' }}
    >
        {isSelected && children}
    </motion.div>
);


const Page = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div className={`bg-black/90 text-white ${Style.montSerrat} container scroll-smooth`}>
            {/* Product */}
            <div className="  mx-auto m-5 flex items-center justify-center w-full h-28 border">
                <h2 className="md:text-4xl text-xl text-center font-bold md:mb-4">Product</h2>
                {/* <p className="text-lg">Your text content goes here.</p> */}
            </div>

            {/* Products */}
            <div className='w-fit  px-5 my-5 py-5 mx-auto'>

                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-4">
                    <Link href={`/product/bicep-curl`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        
                        <img src='/product/Bicep Curl_1.png' className="mx-auto rounded-md "/>
                        <h2 className='text-center'>Bicep Curl</h2>
                        
                    </Link>
                    <Link href={`/product/lat-pulldown`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/Lat Pulldown_1.png' className="mx-auto rounded-md "/>
                        <h2 className='text-center'>Lat Pulldown</h2>
                        
                    </Link>
                    <Link href={`/product/peck-fly`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/Peck Fly.png' className="mx-auto rounded-md "/>
                        <h2 className='text-center'>Peck Fly</h2>
                        
                    </Link>                  
                    <Link href={`/product/weight-assisted-pull-up`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/Weight Assisted Pull Up.png' className="mx-auto rounded-md "/>
                        <h2 className='text-center'>Weight Assisted Pull Up</h2>
                        
                    </Link>
                    <Link href={`/product/lat-rowing`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/Lat Rowing_1.png' className="mx-auto rounded-md "/>
                        <h2 className='text-center'>Lat Rowing</h2>
                        
                    </Link>
                    <Link href={`/product/squat-stand`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/Squat Stand.png' className="mx-auto rounded-md "/>
                        <h2 className='text-center'>Squat Stand</h2>
                        
                    </Link>
                    <Link href={`/product/leg-extension-and-leg-curl`} className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/Leg Extension and Leg Curl.png' className="mx-auto rounded-md h-[381px] w-[254px]"/>
                        <h2 className='text-center'>Leg Extension and Leg Curl</h2>
                        
                    </Link> 
                    {/* <div className="p-1 border-l border-r rounded-lg flex flex-col justify-center items-center">
                        <div className='text-end'>
                            
                        </div>
                        <img src='/product/DSC06296.png' className="mx-auto rounded-md h-[381px] w-[254px]"/>
                        <h2 className='text-center'>DSC06296</h2>
                        
                    </div>  */}
                    
                </div>


            </div>

            {/* Fitness Category */}
            <div className=' p-0 pt-5  md:pl-5'>

                <div className="md:flex md:justify-between  md:items-center ">
                    <div >
                        <h2 className='text-xl font-semibold pt-6 p-2'>Shop By</h2>
                        <h2 className='text-lg font-semibold md:pt-2 pb-4 p-2'>Fitness Category</h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-6">
                            <Link className='space-y-2' href={`/product/wrist-curl`}>
                                <img src='/product/Wrist Curl_1.png' className='mx-auto rounded-xl border md:w-60'/>

                                <h2 className='text-center'>Wrist Curl</h2>
                            </Link>
                            <Link className='space-y-2' href={`/product/seated-calf`}>
                                <img src='/product/Seated Calf.png' className='mx-auto rounded-xl border md:w-60'  />

                              
                                <h2 className='text-center'>Seated Calf</h2>
                            </Link>
                            <Link className='space-y-2' href={`/product/stool`}>
                                <img src='/product/Stool_1.png' className='mx-auto rounded-xl border md:w-60' />

                               
                                <h2 className='text-center'>Stool</h2>
                            </Link>
                            <Link className='space-y-2' href={`/product/twister`}>
                                <img src='/product/Twister.png' className='mx-auto rounded-xl border md:w-60'/ >

                               
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

            

        </div>
    )
}

export default Page

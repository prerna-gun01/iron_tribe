"use client";
import React from 'react'
// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import Styles from '../../css/home.module.css'
import { useRouter } from "next/navigation"
import { BiCart } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import Style from "@/css/home.module.css"

const Header = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
      router.push(path);
    };
    

    return (

        <div className={` ${Style.montSerrat} `}>
            <header className="text-white ">
                <div className=" container mx-auto flex flex-wrap flex-row ">
                    <img src='/logo.png' className="flex title-font font-medium items-center text-gray-900 w-24 py-10" >

                    </img>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center m-5 text-base justify-center">
                        <a onClick={() => handleNavigation('/')} className={`mr-5 cursor-pointer after:w-0 hover:after:w-full transition-all after:duration-300 after:h-[3px] after:bg-blue-900 relative after:absolute after:bottom-0 after:right-0  before:w-0 hover:before:w-full  before:duration-300 before:h-[2px] before:bg-blue-900  before:absolute before:top-0 before:left-0  py-1 `}>Home</a>
                        

                        <a onClick={() => handleNavigation('/gymAbout')} className={`mr-5 cursor-pointer after:w-0 hover:after:w-full transition-all after:duration-300 after:h-[3px] after:bg-blue-900 relative after:absolute after:bottom-0 after:right-0  before:w-0 hover:before:w-full  before:duration-300 before:h-[2px] before:bg-blue-900  before:absolute before:top-0 before:left-0  py-1`}>About</a>

                        <a onClick={() => handleNavigation('/gymProduct')} className={`mr-5 cursor-pointer after:w-0 hover:after:w-full transition-all after:duration-300 after:h-[3px] after:bg-blue-900 relative after:absolute after:bottom-0 after:right-0  before:w-0 hover:before:w-full  before:duration-300 before:h-[2px] before:bg-blue-900  before:absolute before:top-0 before:left-0  py-1`}>Product</a>

                        <a onClick={() => handleNavigation('/gymWhyUs')} className={`mr-5 cursor-pointer after:w-0 hover:after:w-full transition-all after:duration-300 after:h-[3px] after:bg-blue-900 relative after:absolute after:bottom-0 after:right-0  before:w-0 hover:before:w-full  before:duration-300 before:h-[2px] before:bg-blue-900  before:absolute before:top-0 before:left-0  py-1`}>Why Us</a>

                        <a onClick={() => handleNavigation('/gymContact')} className={`mr-5 cursor-pointer after:w-0 hover:after:w-full transition-all after:duration-300 after:h-[3px] after:bg-blue-900 relative after:absolute after:bottom-0 after:right-0  before:w-0 hover:before:w-full  before:duration-300 before:h-[2px] before:bg-blue-900  before:absolute before:top-0 before:left-0  py-1`}>Contact</a>

                    </nav>
                    <div className="inline-flex items-center   py-1  focus:outline-none text-base mt-4 md:mt-0">
                        <BiCart className='m-1 h-5 w-5 cursor-pointer' />
                        <HiOutlineSearch className='m-1 h-5 w-5 cursor-pointer' />
                        <FaInstagram className='m-1 h-5 w-5 cursor-pointer' />
                        <TbBrandFacebook className='m-1 h-5 w-5 cursor-pointer' />
                    </div>
                </div>
            </header>



           


        </div>

    )
}

export default Header
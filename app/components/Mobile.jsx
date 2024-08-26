"use client"
import React,{useState} from 'react'
import { useRouter } from "next/navigation"
import { BiCart } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";

const MobileNav = () => {
    const router = useRouter();
    const [click, setClick] = useState(false);

    const handleNavigation = (path) => {
      router.push(path);
    };

    const handleNav = () =>{
        setClick(!click)
        // if (click===true) {
        //     setClick(false)
        // }
    }

    return (
        <div>
            <header className="text-white body-font h-28 flex items-center">
                <div className=" px-5 container flex justify-around items-center">
                <span className=''><CgMenuMotion onClick={handleNav} className=' text-2xl' /></span>
                    {click&&
                    <nav className=" flex flex-row flex-col-2 items-center  justify-between  ">
                        <a onClick={() => handleNavigation('/')} className="mr-5 cursor-pointer">Home</a>
                        <a onClick={() => handleNavigation('/gymAbout')} className="mr-5 cursor-pointer">About</a>
                        <a onClick={() => handleNavigation('/gymProduct')} className="mr-5 cursor-pointer">Product</a>
                        {/* <a className="mr-5 cursor-pointer">Why Us</a> */}
                        <a onClick={() => handleNavigation('/gymContact')} className="mr-5 cursor-pointer">Contact</a>
                    </nav>
                    }
                    {!click&& <img src='/logo.png' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-20 mt-8 border" />}
                    {!click&& <div className="inline-flex items-center mt-4 ">
                    {/* <a className="mr-5 cursor-pointer">Contact</a> */}
                        <BiCart className='m-1 h-5 w-5 cursor-pointer' />
                        <HiOutlineSearch className='m-1 h-5 w-5 cursor-pointer' />
                        <FaInstagram className='m-1 h-5 w-5 cursor-pointer' />
                        <TbBrandFacebook className='m-1 h-5 w-5 cursor-pointer' />
                    </div>}
                    
                </div>
            </header>
        </div>
    )
}

export default MobileNav

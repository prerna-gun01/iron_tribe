"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from 'react';
import Mobile from './components/Mobile';
import Header from './components/Header';
import Footer from './components/Footer';
const inter = Inter({ subsets: ["latin"] });
import Style from "@/css/home.module.css"


export default function RootLayout({ children }) {

  const [isMobile, setIsMobile] = useState();
  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width: 770px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black/90 ">
          <div className={` bg-black/90 text-white ${Style.montSerrat} `}>
            {isMobile ? <Mobile className='sticky top-0' /> : <Header className='sticky top-0' />}
            <div className="">
              {children}
            </div>
          </div>
          <Footer className='sticky bottom-0' />
        </div>
      </body>
    </html>
  );
}

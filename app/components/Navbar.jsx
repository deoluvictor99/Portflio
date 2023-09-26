"use client"
import React from 'react'
// import Link from 'next/link'
import { Link } from 'react-scroll';
import { useState } from 'react';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full sm:w-screen bg-[#161927] md:bg-transparent fixed top-0 flex justify-center'>
            <div className=' w-full h- sm:w-[80%] flex flex-row justify-between items-center text-white p-6 px-8 sm:p-8 '>
                <h1 className=' text-2xl'>Deolu</h1>

                <button 
                        type="button" 
                        className="text-white text-[2.7rem] flex justify-center items-center rounded-lg md:hidden "
                        onClick={()=>setIsOpen(!isOpen)}
                    >
                        <ion-icon name={`${isOpen? 'close' : 'menu'}-outline`}></ion-icon>
                </button>

                <ul className={`sm:flex sm:gap-6 px-9 shadow-md md:shadow-none bg-[#161927] md:bg-transparent
                                md:flex md:items-center  py-4
                                absolute top-[4.7rem] md:static z-[100] md:z-auto   
                                w-full md:w-auto md:pl-0 space-y-7 sm:space-y-0 md:space-y-0 left-0 transition-all duration-150
                                ${isOpen? "": "-left-[100%]"}`
                                }
                >
                    <li>
                        <Link href={"/"} to='Home' offset={-60} smooth={true} duration={500} >Home</Link>
                    </li>
                    <li>
                        <Link href={"/"} to='About' offset={-60} smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link href={"/"} to='Projects' offset={-60} smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <a href={"https://wa.me/09075380750"} target="_blank">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

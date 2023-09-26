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
                        {isOpen?
                            <svg className="w-[3rem]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff"></path></g></svg>
                            :
                            <svg className="w-[3rem]" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_iconCarrier"> <path d="M2 12.32H22" stroke="#ffffff" strokeWidth="1.5"strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 18.32H22" stroke="#ffffff" strokeWidth="1.5"strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 6.32001H22" stroke="#ffffff" strokeWidth="1.5"strokeLinecap="round" strokeLinejoin="round"></path> </g>
                            </svg>
                        }
                </button>

                <ul className={`sm:flex sm:gap-6 px-9 shadow-md md:shadow-none bg-[#161927] md:bg-transparent
                                md:flex md:items-center  py-4
                                absolute top-[4.7rem] md:static z-[100] md:z-auto   
                                w-full md:w-auto md:pl-0 space-y-7 sm:space-y-0 md:space-y-0 left-0 transition-all duration-150
                                ${isOpen? "": "-left-[400%]"}`
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

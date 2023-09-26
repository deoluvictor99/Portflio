"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Button = () => {
    return (
        <>
            <button className="bg-[#576EE0] hover:bg-[#5067dd]  py-3 rounded-md text-white w-[9rem]">
                <Link href={"/"} className='flex items-center gap-2 justify-center'> <span>Hire me</span>  <Image src="/icons8-forward-50.png" alt='hire me' width={100} height={100} className='w-[1.6rem] inline'/></Link>
            </button>
        </>
    )
}

export default Button;

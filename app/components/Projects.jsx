import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
    return (
        <>
            <main className='w-[100%] md:w-screen p-8 flex justify-center text-white' id='Projects'>
                <div className='md:w-[70%] flex flex-col justify-center items-center'>
                        <h1 class="text-4xl font-bold">Projects</h1>
                    <div className='flex flex-wrap md:gap-x-[16rem] gap-y-[4rem] mt-9 justify-center'>
                        <div className=' w-[70vw] md:w-[20rem] p-4 rounded-lg shadow-2xl bg-[#0e101b] overflow-hidden'>
                            <Image src={"/Screenshot 2023-09-26 142749.png"} alt='Movie-Box' width={300} height={300} className='w-full hover:scale-110 transition-all'/>

                            <div className='mt-4 space-y-3'>
                                <h1 className='text-2xl'>Movie-Box</h1>
                                <p className='text-sm'>Discover and explore movies like never before with my fully responsive Movie Info App.
                                    Seek details on your favorite films, this app makes it effortless. 
                                    Get ready to dive into the world of cinema with ease and style.
                                </p>

                                <div className='flex justify-between mt-2'>

                                    <Link href={"https://movie-box-hazel.vercel.app/"} target='_blank'>
                                        <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  py-1 rounded-md text-white flex items-center px-3 gap-2'> 
                                            <span>Live Demo</span> 
                                            <span>
                                                <Image src="/icons8-chevron-right-50.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                            </span>
                                        </button>
                                    </Link>

                                    <Link href={"https://github.com/deoluvictor99/movie-box"} target='_blank'>
                                        <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  rounded-md text-white flex items-center px-3 py-1 gap-2'>
                                            <span>Github</span>
                                            <span>
                                                <Image src="/icons8-github-24.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                            </span>
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='w-[70vw] md:w-[20rem] p-4 rounded-lg shadow-2xl bg-[#0e101b] overflow-hidden'>
                                <Image src={"/Screenshot 2023-09-26 143021.png"} alt='Image-Flow' width={300} height={300} className='w-full hover:scale-110 transition-all'/>

                                <div className='mt-4 space-y-3'>
                                    <h1 className='text-2xl'>Image-Flow</h1>
                                    <p className='text-sm'>Image-Flow is more than just an image gallery app; it's your canvas for creativity. 
                                                            With seamless authentication, users can securely sign in and out, 
                                                            ensuring privacy. Plus, the intuitive drag-and-drop feature makes organizing and showcasing your images a breeze. Elevate your visual storytelling with Image-Flow.
                                    </p>

                                    <div className='flex justify-between mt-2'>

                                        <Link href={"https://image-flow-three.vercel.app/"} target='_blank' >
                                            <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  py-1 rounded-md text-white flex items-center px-3 gap-2'> 
                                                <span>Live Demo</span> 
                                                <span>
                                                    <Image src="/icons8-chevron-right-50.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                                </span>
                                            </button>
                                        </Link>

                                        <Link href={"https://github.com/deoluvictor99/Image-Flow"} target='_blank'>
                                            <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  rounded-md text-white flex items-center px-3 py-1 gap-2'>
                                                <span>Github</span>
                                                <span>
                                                    <Image src="/icons8-github-24.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                                </span>
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[70vw] md:w-[20rem] p-4 rounded-lg shadow-2xl bg-[#0e101b] overflow-hidden '>
                                <Image src={"/Screenshot 2023-09-26 143145.png"} alt='Image-Flow' width={300} height={300} className='w-full hover:scale-110 transition-all'/>

                                <div className='mt-4 space-y-3'>
                                    <h1 className='text-2xl'>JMD</h1>
                                    <p className='text-sm'>
                                        Embark on my Tailwind CSS debut! Behold my initial project, 
                                        a testament to my journey of learning. Experience the beauty of 
                                        a fully responsive design brought to life with Tailwind CSS. 
                                        Join me on this exciting voyage into the world of modern web development.
                                    </p>

                                    <div className='flex justify-between mt-2'>

                                        <Link href={"https://courageous-sunburst-165dfe.netlify.app/"} target='_blank'>
                                            <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  py-1 rounded-md text-white flex items-center px-3 gap-2'> 
                                                <span>Live Demo</span> 
                                                <span>
                                                    <Image src="/icons8-chevron-right-50.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                                </span>
                                            </button>
                                        </Link>

                                        <Link href={"https://github.com/deoluvictor99/jmd"} target='_blank'>
                                            <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  rounded-md text-white flex items-center px-3 py-1 gap-2'>
                                                <span>Github</span>
                                                <span>
                                                    <Image src="/icons8-github-24.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                                </span>
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[70vw] md:w-[20rem] p-4 rounded-lg shadow-2xl bg-[#0e101b] overflow-hidden'>
                                <Image src={"/Screenshot 2023-09-26 143244.png"} alt='Image-Flow' width={300} height={300} className='w-full hover:scale-110 transition-all '/>

                                <div className='mt-4 space-y-3'>
                                    <h1 className='text-2xl'>Swerve</h1>
                                    <p className='text-sm'>
                                        A demonstration of my coding prowess using HTML, CSS and JavaScript, Here is a landing page that 
                                        reflects my abilities to craft web experiences that are both functional and visually appealing
                                    </p>

                                    <div className='flex justify-between mt-2'>

                                        <Link href={"https://whimsical-fox-e2f493.netlify.app/"} target='_blank'>
                                            <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  py-1 rounded-md text-white flex items-center px-3 gap-2'> 
                                                <span>Live Demo</span> 
                                                <span>
                                                    <Image src="/icons8-chevron-right-50.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                                </span>
                                            </button>
                                        </Link>

                                        <Link href={"https://github.com/deoluvictor99/Landing-Page-01"} target='_blank'>
                                            <button type="button" className='bg-[#576EE0] hover:bg-[#5067dd]  rounded-md text-white flex items-center px-3 py-1 gap-2'>
                                                <span>Github</span>
                                                <span>
                                                    <Image src="/icons8-github-24.png" alt='live demo' width={300} height={300} className='w-[2rem]' /> 
                                                </span>
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects

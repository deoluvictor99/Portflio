import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <main>
                <div>
                    <div>
                        <Image src={"/Screenshot 2023-09-26 142749.png"} alt='Movie-Box' width={300} height={300}/>
                        <div>
                            <h1>Movie-Box</h1>
                            <p>Discover and explore movies like never before with my fully responsive Movie Info App.
                                Seek details on your favorite films, this app makes it effortless. 
                                Get ready to dive into the world of cinema with ease and style.</p>
                            <Link href={"https://movie-box-hazel.vercel.app/"}><button type="button" class="text-white border border-blue-700">Live Demo</button></Link>
                            <Link href={"https://github.com/deoluvictor99/movie-box"}><button type="button" class=" text-white border border-blue-700">GitHub</button></Link>
                        </div>
                    </div>
                    {/* <div>
                        <Image src={"/Screenshot 2023-09-26 143021.png"} alt='Image-flow' width={300} height={300}/>
                        <div>
                            <p></p>
                            <Link href={}/>
                        </div>
                    </div>
                    <div>
                        <Image src={"/Screenshot 2023-09-26 143145.png"} alt='JMD' width={300} height={300}/>
                        <div>
                            <p></p>
                            <Link href={}/>
                        </div>
                    </div>
                    <div>
                        <Image src={"/Screenshot 2023-09-26 143244.png"} alt='Swerve' width={300} height={300}/>
                        <div>
                            <p></p>
                            <Link href={}/>
                        </div>
                    </div> */}
                </div>
            </main>
        </>
    )
}

export default Contact

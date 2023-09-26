import React from 'react'

const Skills = () => {
  return (
    <>
        <div className=" w-screen p-4 md:p-8 flex justify-center items-center">
            <div className='md:w-[70%] py-4 border border-x-0 border-y-gray-500 flex justify-center '>

                <div className='flex flex-wrap gap-4'>

                    <button className="flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  ">
                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Tailwind
                        </span>
                    </button>
                    <button className="flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  ">
                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Framer Motion 
                        </span>
                    </button>
                    <button className="flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  ">
                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            JavaScript
                        </span>
                    </button>
                    <button className="flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  ">
                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            React
                        </span>
                    </button>
                    <button className="flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  ">
                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            NextJS
                        </span>
                    </button>
                </div>

                
            </div>
        </div>
    </>
  )
}

export default Skills

import React from 'react'

const Navebar = () => {
  return (
    <nav className='bg-gray-800  fixed top-0 my-0 w-full z-50 ' >
        <div className='flex justify-between px-9 h-10 items-center text-white mx-40 '>

        <div className='logo font-bold'>
            <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
        </div>
       
       
        <button className='flex items-center justify-between gap-4 bg-green-700 rounded-full p-1 
        hover:bg-green-500 '>
            <img className='invert w-7' src="icons/github.svg" alt="Github" />
            <span className='font-bold'>GitHub</span>
        </button>
        </div>
    </nav>
  )
}

export default Navebar

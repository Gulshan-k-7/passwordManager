import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 items-center text-white bottom-0'>
       <div className='logo font-bold flex justify-center'>
            <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
        </div>
        <div className='flex justify-center '>
            created with
            <img className='w-10' src="icons/heart.png" alt="heart" />
            by lord Gulshan
        </div>
    </div>
    
  )
}

export default Footer

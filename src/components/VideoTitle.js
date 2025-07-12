import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='aspect-video w-screen h-full pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-4 w-2/4'>{overview}</p>
      <div>
        <button className='bg-white py-2 px-5 text-lg rounded-lg mr-2 text-black hover:bg-opacity-80'>Play Now</button>
        <button className='bg-gray-500 py-2 px-5 text-lg rounded-lg text-white'>More Info</button>
      </div>
    </div>
    
  )
}

export default VideoTitle
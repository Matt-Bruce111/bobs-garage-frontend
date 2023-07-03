// Import required modules
import React from 'react'

// Banner component WIP
// Need to make it dynamic
// Currently setup for services page
// Need to pass image url as variable, may need to adjust css to work with other image sizes

const Banner = ({ img, text }) => {
  return (
    <div className='container-lg justify-content-center px-0 my-4' style={{height: '300px'}}>
      <div className='banner-img border border-dark border-opacity-10 rounded-4 overflow-hidden'>
        <img src={img} alt='banner' className='banner-img'/>
        <div className='text-over-img'>{ text }</div>
      </div>
    </div>
  )
}

// Export component
export default Banner
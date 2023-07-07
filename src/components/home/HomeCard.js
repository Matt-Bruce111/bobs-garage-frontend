import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ title, body, link }) => {
  return (
    <div className='card text-center d-flex justify-content-center h-100' id='homecard'>
      <div className='card-body w-75 mx-auto' >
        <h3 className='card-title mx-auto w-75'>{title}</h3>
        <p className='my-4 fs-5'>{body}</p>
        <Link to={link.link} className="btn d-flex justify-content-center my-4" ><p className='fs-5 my-0'>{link.text}</p></Link>
      </div>
    </div>
  )
}

export default HomeCard
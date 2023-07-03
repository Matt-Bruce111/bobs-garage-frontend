import React from 'react'

const StaffCard = ({ image, name, body }) => {
  return (
    <div className='card mb-4 text-center d-flex justify-content-center' id='staffcard'>
      <div className='card-body w-75 mx-auto'>
        <img src={image} alt='staff' className='rounded-circle mb-2' style={{width: '125px', height: '125px'}}/>
        <h3 className='card-title mx-auto w-75'>{name}</h3>
        <p className='my-4 fs-5'>{body}</p>
      </div>
    </div>
  )
}

export default StaffCard
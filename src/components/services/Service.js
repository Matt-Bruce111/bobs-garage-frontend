import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux'

const Service = ({ oneService }) => {
  // Destructure service object
  const { serviceId, service, description, price } = oneService

  // Get the state
  const state = useSelector(state => state);

  // Get the users access level
  var isAdmin;
  if(state.auth.user){
    isAdmin = state.auth.user.isAdmin;
  }

  // If user is an admin, show add service button
  var editServiceButton;
  if(isAdmin){
    editServiceButton = <Link to={`/api/services/${serviceId}`} className='position-absolute top-0 end-0 p-3 pe-4'><FaPencilAlt className='edit-icon fs-3'style={{cursor: 'pointer'}}/></Link>
  }

  return (
    <div className='row w-100 text-light mx-0 my-4 rounded-4 overflow-hidden' style={{minHeight: '200px'}}>
      <div className='col-2 d-flex fs-4 px-0 outer' style={{'min-width': '110px'}}>
        <p className='text-center my-auto mx-auto px-2'>{service}</p>
      </div>

      <div className='col d-flex position-relative fs-5 inner'>
          <p className='text-center m-auto px-2'>{description}</p>
          {editServiceButton}
      </div>

      <div className='col-2 d-flex fs-4 px-0 outer' style={{'min-width': '110px'}}>
        <p className='text-center my-auto mx-auto px-2'>${price}</p>
      </div>
    </div>
  )
}
// Proptypes
Service.propTypes = {
  oneService: PropTypes.object.isRequired
}

export default Service
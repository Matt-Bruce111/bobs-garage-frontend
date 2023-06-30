// Import required modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { FaTimes, FaPencilAlt } from 'react-icons/fa'

// Import delete action
import { deleteFeedback } from '../../actions/feedbackActions'


const SingleFeedback = ({ singleFeedback, deleteFeedback, user }) => {
  // Destructure service object
  const { feedbackId, body } = singleFeedback

  // Get the state
  const state = useSelector(state => state);

  // Check if current feedback is the logged users own feedback
  var usersFeedback = false
  if(state.auth.user !== null){
    if(state.auth.user.userId === user[0].userId){
    usersFeedback = true
  }
  }
  

  var usersFeedbackButtons;
  if(usersFeedback){
    usersFeedbackButtons = 
    <div className='position-absolute top-0 end-0 p-2'>
      <Link to={`/feedback/edit/${feedbackId}`}><FaPencilAlt className='text-warning fs-3 me-3' style={{cursor: 'pointer'}}/></Link>
      <FaTimes className='text-danger fs-2' onClick= { e => deleteFeedback(feedbackId)} style={{cursor: 'pointer'}}/>
    </div>

  }

  return (
    <div className='row w-100 text-light mx-0 my-4 border border-dark border-opacity-10 rounded-4 overflow-hidden' style={{height: '200px'}}>
      <div className='col-2 fs-4 px-0 pt-4 d-inline text-center feedback-outer' style={{'min-width': '120px'}}>
          <img src={user[0].image} className='border border-dark border-opacity-10 rounded-circle overflow-hidden' style={{width: '80px', height: '80px'}}></img>
          <p className='text-center my-4 mx-auto px-2'>{user[0].firstName}{' '}{user[0].lastName}</p>
      </div>

      <div className='col d-flex position-relative fs-5 feedback-inner'>
          <p className='text-center m-auto px-2'>{body}</p>
          {usersFeedbackButtons}
      </div>
    </div>
  )
}

// PropTypes
SingleFeedback.propTypes = {
  singleFeedback: PropTypes.object.isRequired,
  deleteFeedback: PropTypes.func.isRequired,
}

export default connect(null, {deleteFeedback})(SingleFeedback)

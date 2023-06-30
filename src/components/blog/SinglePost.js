// Import required modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { FaTimes, FaPencilAlt } from 'react-icons/fa'

// Import delete action
import { deletePost } from '../../actions/blogActions'

const SinglePost = ({ singlePost, deletePost }) => {
  // Destructure service object
  const { postId, title, updatedAt, body } = singlePost

  // Remove time from date
  const formattedDate = updatedAt.substring(0, 10)

  // Get the state
  const state = useSelector(state => state);

  // Get the users access level
  var isAdmin;
  if(state.auth.user){
    isAdmin = state.auth.user.isAdmin;
  }

  // If user is an admin, show add service button
  var adminPostButtons;
  if(isAdmin){
    adminPostButtons = 
    <div className='position-absolute top-0 end-0 me-3 mt-1'>
      <Link to={`/blog/edit/${postId}`}><FaPencilAlt className='text-warning fs-3 me-3'style={{cursor: 'pointer'}}/></Link>
      <FaTimes className='text-danger fs-2' onClick= { e => deletePost(postId)} style={{cursor: 'pointer'}}/>
    </div>
  }

  return (
    <div className='row w-100 position-relative text-light mx-0 my-4 border border-dark border-opacity-10 rounded-4 overflow-hidden'>
      <div className='fs-3 position-relative post-outer'>
        <h2 className='text-center my-2'>{title}</h2>
        <p className='position-absolute top-0 start-0 p-3 fs-5'>{formattedDate}</p>
        {adminPostButtons}
      </div>

      <div className='fs-5 post-inner'>
          <p className='text-center m-3'>{body}</p>
      </div>
    </div>
  )
}

// PropTypes
SinglePost.propTypes = {
  singlePost: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default connect(null, { deletePost })(SinglePost)

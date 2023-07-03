// Import required modules
import React, { useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'

// Import actions
import { getPost, updatePost} from '../../actions/blogActions'


const EditPost = ({ singlePost, getPost, updatePost }) => {
  // Set up state.
  const [formData, setFormData] = useState({
    postId: '',
    title: '',
    body: ''
  })
  
  // Get the id from params
  let {id}  = useParams()
  id = parseInt(id)

  // useNavigate hook
  const navigate = useNavigate()

  // Get the post we want to edit
  useEffect(() => {
      getPost(id)
      setFormData({
        postId: id,
        title: singlePost.title,
        body: singlePost.body,
      })
  }, [getPost, id, singlePost.body, singlePost.title])

  const { body, title, } = formData

  // onChange function.
  const onChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  // Create onSubmit
  const onSubmit = async(e) => {
    // Prevent refresh
    e.preventDefault()

    // Create a update item object.
    const updItem = {
      postId: id,
      title,
      body,
    }

    // Log the item
    console.log(updItem);

    // Call the edit action
    updatePost(updItem);
   
    return navigate('/blog');
  }

  return (
    <Fragment>
      <h2 className='text-center header p-3'>Edit Post</h2>
      <div className='card mb-3 dynamic border-dark rounded-4 overflow-hidden' style={{backgroundColor: '#202023'}}>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3 fs-5 text-center justify-content-center'>

              <div className='pb-2'>
                <label htmlFor='title'>Edit post title:</label>
                <textarea 
                  className='form-control'
                  id='title'
                  placeholder='Enter Post Title'
                  name='title'
                  value={title}
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

              <div className='py-2'>
                <label htmlFor='body'>Edit post below:</label>
                <textarea 
                  className='form-control'
                  id='body'
                  placeholder='Enter Post Content'
                  name='body'
                  value={body}
                  rows= '10'                  
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>
                <div className='d-grid gap-2 mx-auto pt-4' style={{width: '300px'}}>
                  <input type='submit' value='Edit Post' className='btn add-content-button fs-5'/>
                </div>
              </div>
              </form>
            </div>
          </div>
      </Fragment>
  )
}

// PropTypes
EditPost.propTypes = {
  getPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  singlePost: PropTypes.object.isRequired
}

// Map state to props
const mapStateToProps = state => ({
  singlePost: state.blog.singlePost
});

// Export with connect
export default connect(mapStateToProps, { getPost, updatePost})(EditPost)
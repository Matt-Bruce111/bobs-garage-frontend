// Import required modules and actions
import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';

// Import actions
import { addPost } from '../../actions/blogActions';

const AddPost = ({ addPost }) => {
  // Create component state.
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    errors: {
      body: ''
    }
  })

  // Use destructuring to pull the variables out of our state.
  const { title, body, errors } = formData;
  
  // Create our navigate var.
  const navigate = useNavigate();

  // onChange function.
  const onChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  // Create onSubmit
  const onSubmit = async(e) => {
    // Prevent refresh
    e.preventDefault();

    // Log that the onSubmit is running.
    console.log('onSubmit - Add Post');

    // Check for errors / validation.
    if( title === '' || title === undefined){
      console.log('Title field empty');
      setFormData({
        ...formData,
        errors:{
          body: 'You must enter a title for the post'
        }
      });
      return;
    } 

    if ( body === '' || body === undefined){
      console.log('Body field empty');
      setFormData({
        ...formData,
        errors:{
          body: 'You must enter some text for the post'
        }
      });
      return;
    }

    
    // Create the new post item.
    const newPost = {
      title,
      body,
    }
    
    console.log(newPost);
    
    // Call our addPost function.
    addPost(newPost);
    // Redirect back to blog page
    navigate('/blog');
  }

  return (
    <Fragment>
      <h2 className='text-center post-header p-3'>Add Post</h2>
      <div className='card mb-3 post border-dark rounded-4 overflow-hidden' style={{backgroundColor: '#202023'}}>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3 fs-5 text-center justify-content-center'>
              {errors.body && <div  className='invalid-service text-danger'>
                {errors.body}
              </div>}

              <div className='pb-2'>
                <label htmlFor='title'>Post Title</label>
                <textarea 
                  className={`form-control ${errors.body ? "is-invalid" : 'is-valid'}`}
                  id='title'
                  placeholder='Enter Post Title'
                  name='title'
                  value={title}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

              <div>
                <label htmlFor='body'>Post Content</label>
                <textarea 
                  className={`form-control ${errors.body ? "is-invalid" : 'is-valid'}`}
                  id='body'
                  placeholder='Enter Post Content'
                  name='body'
                  value={body}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

              <div className='d-grid gap-2 pt-4 mx-auto' style={{width: '300px'}}>
                <input type='submit' value='Add Post' className='btn add-content-button fs-5'/>
              </div>

            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
} 

// Proptypes
AddPost.propTypes = {
  addPost: PropTypes.func.isRequired
}

// Export with connect
export default connect(null, {addPost})(AddPost)
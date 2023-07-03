// Import require modules
import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

// Import actions
import { addFeedback} from '../../actions/feedbackActions';

const AddFeedback = ({ addFeedback }) => {
  // Create component state.
  const [formData, setFormData] = useState({
    body: '',
    errors: {
      body: ''
    }
  });

  // Probably need to get the user id from the user object in state.
  // Get the state
  const state = useSelector(state => state);

  // Destructure the state
  const { user } = state.auth;

  // Desctructure formData.
  const { body, errors } = formData;
  
  // Use navigate.
  const navigate = useNavigate();

  // On Change
  const onChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  // On Submit
  const onSubmit = async(e) => {
    e.preventDefault();

    // Test that the onSubmit is called.
    console.log('onSubmit - Add Feedback.');

    // Check for errors / validation.
    if( body === '' || body === undefined){
      console.log('Body is empty');
      // Set the errors object in state.
      setFormData({
        ...formData,
        errors:{
          body: 'You must enter feedback in the box above'
        }
      });
      return;
    } 

    // Create the new feedback item
    const newItem = {
      body,
      UserUserId: user.userId
    }
  
    console.log(newItem);

    // Call addFeedback function.
    addFeedback(newItem);

    // Redirect back to feedback page
    navigate('/feedback');
  }; 

  return (
    <Fragment>
      <h2 className='text-center header p-3'>Add New Feedback</h2>
      <div className='card mb-3 dynamic border-opacity-10 rounded-4 overflow-hidden'>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3 fs-5 text-center justify-content-center'>

              <div className='pb-2'>
                <label htmlFor='body'>Have your say below:</label>
                <textarea 
                  className={`form-control ${errors.body ? "is-invalid" : 'is-valid'}`}
                  id='body'
                  placeholder='Your Feedback'
                  name='body'
                  value={body}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
                {errors.body && <div  className='invalid-feedback'>
                  {errors.body}
                </div>}
              </div>

              <div className='d-grid gap-2 mx-auto pt-4' style={{width: '300px'}}>
                <input type='submit' value='Add Feedback' className='btn add-content-button fs-5'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

// Proptypes
AddFeedback.propTypes = {
  addFeedback: PropTypes.func.isRequired
}

// Export with connect
export default connect(null, {addFeedback})(AddFeedback)
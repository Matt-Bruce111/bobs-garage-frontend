import React, { useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { getSingleFeedback, updateFeedback} from '../../actions/feedbackActions'


const EditFeedback = ({ singleFeedback, getSingleFeedback, updateFeedback }) => {
  // Set up state.
  const [formData, setFormData] = useState({
    feedbackId: '',
    body: '',
    UserUserId: ''
  })
  
  // Get the id from params
  let {id}  = useParams()
  id = parseInt(id)

  // Check the id.
  console.log(id)

  // useNavigate hook
  const navigate = useNavigate()

  // Get the feedback from the database
  useEffect(() => {
      getSingleFeedback(id)
      setFormData({
        feedbackId: id,
        body: singleFeedback.body,
        UserUserId: singleFeedback.UserUserId
      })
  }, [getSingleFeedback, id, singleFeedback.body, singleFeedback.UserUserId])

  // Descructure the formData object.
  const { body, UserUserId } = formData

  const onChange = e => {
    // e is the event object passed through from the event.
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  // Create our on submit
  const onSubmit = async(e) => {
    // Prevent refresh
    e.preventDefault()

    // create a update item object.
    const updItem = {
      feedbackId: id,
      body,
      UserUserId
    }

    // Send the newContact to an API or to state management
    console.log(updItem);

    //  Call the api to edit a contact.
    updateFeedback(updItem);
   
    return navigate('/feedback');
  }

  return (
    <Fragment>
      <h2 className='text-center feedback-header p-3'>Edit Feedback</h2>
      <div className='card mb-3 feedback border-dark rounded-4 overflow-hidden' style={{backgroundColor: '#202023'}}>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3 fs-5 text-center justify-content-center'>
              <div className='pb-2'>
                <label htmlFor='body'>Edit your feedback below:</label>
                <textarea 
                  className='form-control'
                  id='body'
                  placeholder='Your Feedback'
                  name='body'
                  value={body}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

                <div className='d-grid gap-2 mx-auto pt-4' style={{width: '300px'}}>
                  <input type='submit' value='Edit Feedback' className='btn add-content-button fs-5'/>
                </div>
              </div>
              </form>
            </div>
          </div>
      </Fragment>
  )
}

// PropTypes
EditFeedback.propTypes = {
  getSingleFeedback: PropTypes.func.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  singleFeedback: PropTypes.object.isRequired
}

// Map the state to props.
const mapStateToProps = state => ({
  singleFeedback: state.feedback.singleFeedback
});

// Export with connect
export default connect(mapStateToProps, { getSingleFeedback, updateFeedback})(EditFeedback)
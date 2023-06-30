// use rafce to create our component
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import components
import Banner from '../layout/Banner'
import SingleFeedback from '../feedback/SingleFeedback';

// Import actions
import { getFeedback } from '../../actions/feedbackActions'
import { getAll } from '../../actions/userActions'

const Feedback = ({ getFeedback, getAll, all_users, loading, feedbackList }) => {
  // useEffect to get all feedback and all users
  useEffect(() => {
    getFeedback()
    getAll()
  }, [ getFeedback, getAll ])

  // Get the state
  const state = useSelector(state => state);

  // Get the users access level
  var isAuthenticated;
  if(state.auth.isAuthenticated){
    isAuthenticated = state.auth.isAuthenticated;
  }

  // If user is an admin, show add service button
  var addFeedbackButton;
  if(isAuthenticated){
    addFeedbackButton = <Link to="/feedback/add" className="btn add-content-button d-flex justify-content-center mx-auto my-4" style={{width: '250px'}} ><p className='fs-4 my-0'>Add Your Feedback</p></Link>
  }

  return loading ? (
    <h2 className='text-light'>Loading....</h2>
  ) : (
    <div>
      <Banner img={'https://images.pexels.com/photos/3201071/pexels-photo-3201071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} text='Feedback'/>

      {addFeedbackButton}

      {
        feedbackList.map(feedback => {
          let user = all_users.filter(usr => usr.userId === feedback.UserUserId)
          return <SingleFeedback key={feedback.feedbackId} singleFeedback={feedback} user={user}/>
        })
      }


    </div>
  )
}

// Proptypes
Feedback.propTypes = {
  getFeedback: PropTypes.func.isRequired,
  feedbackList: PropTypes.array.isRequired,
  getAll: PropTypes.func.isRequired,
  all_users: PropTypes.array.isRequired,
}

// Map state to props
const mapStateToProps = state => ({
  feedbackList: state.feedback.feedbackList,
  loading: state.users.loading,
  all_users: state.users.all_users
})

// Export with connect
export default connect(mapStateToProps, { getFeedback, getAll })(Feedback)
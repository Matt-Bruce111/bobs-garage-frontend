// use rafce to create our component
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import componenets
import Banner from '../layout/Banner'
import Service from '../services/Service'

// Import actions
import { getServices } from '../../actions/serviceActions'

const Services = ({ getServices, servicesList, loading }) => {
  // Call the get services action
  useEffect(() => {
    getServices()
  }, [ getServices ])

  // Get the state
  const state = useSelector(state => state);

  // Get the users access level
  var isAdmin;
  if(state.auth.user){
    isAdmin = state.auth.user.isAdmin;
  }

  // If user is an admin, show add service button
  var addServiceButton;
  if(isAdmin){
    addServiceButton = <Link to="/services/add" className="btn add-content-button d-flex justify-content-center mx-auto my-4" style={{width: '200px'}} ><p className='fs-4 my-0'>Add Service</p></Link>
  }

  return loading ? (
    <h2>Loading....</h2>
  ) : (
    <div>
      <Banner img={'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} text='Services'/>
      {
        servicesList.map(service => {
          return <Service key={service.serviceId} oneService={service}/>
        })
      }

      {addServiceButton}
      
    </div>
  )
}

// Proptypes
Services.propTypes = {
  getServices: PropTypes.func.isRequired,
  servicesList: PropTypes.array.isRequired,
}

// Map state to props
const mapStateToProps = state => ({
  servicesList: state.services.servicesList,
  loading: state.services.loading
})

export default connect(mapStateToProps, { getServices })(Services);
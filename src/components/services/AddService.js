// Import required modules and actions
import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { addService } from '../../actions/serviceActions';

const AddService = ({ addService }) => {
  // Create component state.
  const [formData, setFormData] = useState({
    service: '',
    description: '',
    price: '',
    errors: {
      body: ''
    }
  })

  // Use destructuring to pull the variables out of our state.
  const { service, description, price, errors } = formData;
  
  // Create our navigate var.
  const navigate = useNavigate();

  // on Change function.
  const onChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  // Create  onSubmit
  const onSubmit = async(e) => {
    // Prevent refresh
    e.preventDefault();

    // Log that the onSubmit is running.
    console.log('onSubmit - Add Service');

    // Check for errors / validation.
    if( service === '' || service === undefined){
      console.log('Service field empty');
      setFormData({
        ...formData,
        errors:{
          body: 'You must enter a service name'
        }
      });
      // stop the onSubmit running.
      return;
    } 

    if ( description === '' || description === undefined){
      console.log('Description field empty');
      setFormData({
        ...formData,
        errors:{
          body: 'You must enter a description'
        }
      });
      // stop the onSubmit running.
      return;
    }

    if ( price === '' || price === undefined){
      console.log('Price field empty');
      setFormData({
        ...formData,
        errors:{
          body: 'You must enter a price for the service'
        }
      });
      // stop the onSubmit running.
      return;
    } else {
      setFormData({
        ...formData,
        errors:{
          body: ''
        }
      });
    }

    
    // create a newItem to add to our feedback list.
    const newItem = {
      service,
      description,
      price
    }
    
    console.log(newItem);
    
    // Call our addFeedback function.
    addService(newItem);
    // Redirect back to services page
    navigate('/services');
  }

  return (
    <Fragment>
      <h2 className='text-center header p-3'>Add Service</h2>
      <div className='card mb-3 dynamic border-opacity-10 rounded-4 overflow-hidden'>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3 fs-5 text-center justify-content-center'>
              {errors.body && <div  className='invalid-service text-danger'>
                {errors.body}
              </div>}

              <div className='pb-2'>
                <label htmlFor='body'>Service Name</label>
                <textarea 
                  className={`form-control ${errors.body ? "is-invalid" : 'is-valid'}`}
                  id='service'
                  placeholder='Service Name'
                  name='service'
                  value={service}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

              <div className='py-2'>
              <label htmlFor='body'>Service Description</label>
                <textarea 
                  className={`form-control ${errors.body ? "is-invalid" : 'is-valid'}`}
                  id='description'
                  placeholder='Description'
                  name='description'
                  value={description}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

              <div className='py-2'>
              <label htmlFor='body'>Price</label>
                <textarea 
                  className={`form-control ${errors.body ? "is-invalid" : 'is-valid'}`}
                  id='price'
                  placeholder='Price'
                  name='price'
                  value={price}
                  // Add in our onChange event
                  onChange={ e => onChange(e)}
                ></textarea>
              </div>

              <div className='d-grid gap-2 pt-4 mx-auto' style={{width: '300px'}}>
                <input type='submit' value='Add Service' className='btn add-content-button fs-5'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
} 

// Proptypes
AddService.propTypes = {
  addService: PropTypes.func.isRequired
}

// Export with connect
export default connect(null, {addService})(AddService)
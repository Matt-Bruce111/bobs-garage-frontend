// Impoer required modules and actions
import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getService, updateService, deleteService } from '../../actions/serviceActions'

const EditService = ({
  singleService,
  getService,
  updateService,
  deleteService
}) => {
  console.log(singleService)
  
  // Get the serviceId from the url
  const { id } = useParams()

  // Set up the state
  const [formData, setFormData] = useState({
    serviceId: '',
    service: '',
    description: '',
    price: ''
  })

  // Get the navigate function
  const navigate = useNavigate()

  // Get the service from the database
  useEffect(() => {
    getService(id)
    setFormData({
      serviceId: id,
      service: singleService.service,
      description: singleService.description,
      price: singleService.price
    })
  }, [getService, id, singleService.service, singleService.description, singleService.price])

  // Destructure the formData
  const { service, description, price } = formData

  // Create our on change function
  const onChange = e => {
    // console.log(e)
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value });
  }

  // Create our on submit
  const onSubmit = async(e) => {
    // Prevent refresh
    e.preventDefault();

    // Test that the onSubmit is called.
    console.log('OnSubmit - Edit running...');

    // Create the object that will update the service
    const updItem = {
      serviceId: id,
      service,
      description,
      price
    }

    // Call the update service action
    updateService(updItem);
   
    // Redirect back to services page
    navigate('/services');
  }

  return (
    <Fragment>
        <h2 className='text-center p-3 edit-service-header'>Edit Service</h2>
        <div className='card mb-3 edit-service border-opacity-10 rounded-4 overflow-hidden'>
          <div className='card-body'>
            <form onSubmit={e => onSubmit(e)}>
              <div className='m-3 fs-5 text-center justify-content-center'>
                <div className='pb-2'>
                  <label>Service Name</label>
                  <textarea 
                    className='form-control'
                    id='service'
                    placeholder='Service Name'
                    name='service'
                    value={service}
                    // Add in our onChange event
                    onChange={ e => onChange(e)}
                  ></textarea>
                </div>

                <div className='py-2'>
                  <label>Service Description</label>
                  <textarea 
                    className='form-control'
                    id='description'
                    placeholder='Description'
                    name='description'
                    value={description}
                    // Add in our onChange event
                    onChange={ e => onChange(e)}
                  ></textarea>
                </div>

                <div className='py-2'>
                  <label>Price</label>
                  <textarea 
                    className='form-control'
                    id='price'
                    placeholder='Price'
                    name='price'
                    value={price}
                    // Add in our onChange event
                    onChange={ e => onChange(e)}
                  ></textarea>
                </div>

                <div className='mx-auto' style={{width: '300px'}}>
                  <div className='d-grid gap-2 py-4'>
                    <input type='submit' value='Edit Service' className='btn btn-light fs-5'/>
                  </div>
                  <div className='d-grid gap-2 mx-auto'>
                    <Link to='/services' onClick={e => deleteService(id)}><input value='Delete Service' className='btn btn-danger fs-5'/></Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
  )
}

// Proptypes
EditService.propTypes = {
  getService: PropTypes.func.isRequired,
  updateService: PropTypes.func.isRequired,
  deleteService: PropTypes.func.isRequired,
  singleService: PropTypes.object.isRequired
}

// Map state to props
const mapStateToProps = state => ({
  singleService: state.services.singleService
})

// Export with connect
export default connect(mapStateToProps, { getService, updateService, deleteService })(EditService)
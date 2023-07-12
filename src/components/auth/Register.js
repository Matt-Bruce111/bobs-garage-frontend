// Import required modules
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { storage } from './firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

// Import register action
import { register } from '../../actions/authActions'

// Destructure props
const Register = ({register}) => {
  // Set up state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    password: '',
    passwordCompare: '',
    errors: {}
  })

  // Destructure state
  var { firstName, lastName, email, image, password, passwordCompare, errors } = formData

  // Create image state
  const [imageUpload, setImageUpload] = useState(null)

  // Upload image 
  // const uploadImage = async () => {
  //   if(imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
  //   await uploadBytes(imageRef, imageUpload).then(async () => {
  //     await getDownloadURL(imageRef).then((url) => {
  //       console.log(url)
  //       console.log('Image Uploaded')
  //       image = url
  //     })
  //   })
  // }

  const uploadImage = async () => {
    // Check if image is null, if so, return
    if(imageUpload == null) return;

    // Create a reference to the image
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)

    // Upload the image
    await uploadBytes(imageRef, imageUpload)

    // Get the image URL using the image reference
    const url = await getDownloadURL(imageRef)

    // Log the image url, and set the image state
    console.log(url)
    console.log('Image Uploaded')
    image = url
    }
  
  // Set up navigate hook
  const navigate = useNavigate();

  // Set up onChange function
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  // Set up onSubmit function
  const onSubmit = async (e) => {
    // Prevent refresh
    e.preventDefault()

    console.log('On Submit Called - REGISTER')

    // Error checking
    if(firstName === '') {
      setFormData({ ...formData, errors: { firstName: 'First Name is required' } })
      return
    }
    if (lastName === ''){
      setFormData({ ...formData, errors: {lastName: 'Last Name is required '}});
      return; 
    }
    if (email === ''){
      setFormData({ ...formData, errors: {email: 'Email is required '}});
      return; 
    }
    if (password === ''){
      setFormData({ ...formData, errors: {password: 'Password is required '}});
      return; 
    }
    // Check if passwords match
    if(password !== passwordCompare)
    {
      setFormData({ ...formData, errors: {password: 'Passwords do not match! '}});
      return; 
    }
    // check for errors in the passwordCompare field
    if (passwordCompare === ''){
      setFormData({ ...formData, errors: {passwordCompare: 'Password is required '}});
      return; 
    }

    // Upload image
    await uploadImage()

    // Create a user object
    const user = { firstName, lastName, email, image, password }
    console.log(user)

    // Call the register action
    await register(user)

    // Redirect back to home page
    navigate('/home')
  }

  return (
    <Fragment>
      <div className='container-lg justify-content-center w-75 mx-auto my-5' id='register'>
        <h2 className='text-center'>Register</h2>
        {/* Change onSubmit call */}
        <form onSubmit={e => onSubmit(e)}>
          <div className='mb-2'>
            <label htmlFor='firstName'>First Name</label>
            <input 
              type='text'
              className={`form-control ${errors.firstName ? "is-invalid" : 'is-valid'}`}
              id='firstName'
              placeholder='First Name'
              name='firstName'
              value={firstName} 
              onChange={e => onChange(e)}
            />
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
          </div>
          <div className='mb-2'>
            <label htmlFor='lastName'>Last Name</label>
            <input 
              type='text'
              className={`form-control ${errors.lastName ? "is-invalid" : 'is-valid'}`}
              id='lastName'
              placeholder='Last Name'
              name='lastName'
              value={lastName} 
              onChange={e => onChange(e)}
            />
            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
          </div>
          <div className='mb-2'>
            <label htmlFor='image'>Image</label>
            <input 
              type='file'
              className={`form-control ${errors.image ? "is-invalid" : 'is-valid'}`}
              id='image'
              placeholder='Image'
              name='image'
              //value={image} 
              onChange={(e) => {setImageUpload(e.target.files[0])}}
            />
            {errors.image && <div className='invalid-feedback'>{errors.image}</div>}
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input 
              type='text'
              className={`form-control ${errors.email ? "is-invalid" : 'is-valid'}`}
              id='email'
              placeholder='Email'
              name='email'
              value={email} 
              onChange={e => onChange(e)}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input 
              type="password"
              // use classnames module
              className={`form-control ${errors.password ? "is-invalid" : 'is-valid'}`}
              id='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
            {/* Error message rendering */}
            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
          </div>
          <div className='mb-4'>
            <label htmlFor='passwordCompare'>Re-enter Password</label>
            <input 
              type="password"
              // use classnames module
              className={`form-control ${errors.passwordCompare ? "is-invalid" : 'is-valid'}`}
              id='passwordCompare'
              placeholder='Re-enter Password'
              name='passwordCompare'
              value={passwordCompare}
              onChange={e => onChange(e)}
            />
            {/* Error message rendering */}
            {errors.passwordCompare && <div className='invalid-feedback'>{errors.passwordCompare}</div>}
          </div>
          <div className='d-grid mb-2 w-25 mx-auto'>
            <input type='submit' value='Register' className='btn add-content-button'/>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

// Set up proptypes
Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

// Map state to props
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

// Export with connect
export default connect(mapStateToProps, { register })(Register)
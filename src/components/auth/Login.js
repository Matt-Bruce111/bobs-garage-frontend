// Import react and link modules
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

const Login = ({ login, isAuthenticated }) => {
  // Set up state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errors: {}
  })

  // Destructure state
  const { email, password, errors } = formData

  // Set up navigate hook
  const navigate = useNavigate()

  // Set up onChange function
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  // Set up onSubmit function
  const onSubmit = async (e) => { 
    // Prevent refresh
    e.preventDefault()
    console.log('On Submit Called - LOGIN')

    // Error checking
    if (email === '') {
      setFormData({ ...formData, errors: { email: 'Email is required' } })
      return
    }
    if (password === '') {
      setFormData({ ...formData, errors: { password: 'Password is required' } })
      return
    }

    // Create a user object
    const user = { email, password}
    console.log(user)

    // Call the login action
    await login(user)

    navigate('/home')
  }

  return (
    <Fragment>
      <div className='container-lg justify-content-center w-75 mx-auto my-5' id='login'>
        <h2 className='text-center'>Sign In</h2>
        {/* Change onSubmit call */}
        <form onSubmit={e => onSubmit(e)}>
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
          <div className='mb-4'>
            <label htmlFor='password'>Password</label>
            <input 
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : 'is-valid'}`}
              id='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
            {/* Error message rendering */}
            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
          </div>
          <div className='d-grid mb-2 w-25 mx-auto'>
            <input type='submit' value='Login' className='btn add-content-button'/>
          </div>
        </form>
        <p className='text-center m-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>  
        </p>
      </div>
    </Fragment>
  )
}

// Add prop types
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

// Map State to props.
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// Export with connect
export default connect(mapStateToProps, { login })(Login)
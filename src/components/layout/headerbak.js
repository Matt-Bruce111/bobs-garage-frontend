import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

// Import logout action
import { logout } from '../../actions/authActions';

// Might make small text lighter
// Need to add active page indicator (red bar under current page nav-item)

const Header = ({ logout }) => {
  // Get the state
  const state = useSelector(state => state);
  // Get the auth state
  const isAuthenticated = state.auth.isAuthenticated;

  // Set the sign in/out link
  var signInOut;
  
  // If user is authenticated, show logout link, else show sign in link
  if(isAuthenticated){
    signInOut = <NavLink onClick={logout} className="nav-link mx-3 py-0" to="/">Logout</NavLink>
  } else {
    signInOut = <NavLink className="nav-link mx-3 py-0" to="/login">Sign In</NavLink>
  }

  return (
    <nav className="navbar navbar-expand-lg py-0 border border-dark border-opacity-10 rounded-bottom-4 overflow-hidden" style={{backgroundColor: '#202023'}} data-bs-theme="dark">

        <div className='bobs-garage d-flex' style={{height: '125px', width: '200px', backgroundColor: '#F7565D'}}>
          <Link className="navbar-brand d-flex align-items-center mx-auto" to="/home"><h2 className='my-0 mx-2'>Bob's Garage</h2></Link>
        </div>

        {/* <p className='fs-4 fw-bold my-0'>Bob's Garage</p> */}

        <div  className='d-flex w-100' style={{height: '125px'}}>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
          <ul className="navbar-nav h-100 w-100 justify-content-between align-items-center mx-4 fs-5">

            <li className="nav-item">
              <NavLink className="nav-link py-0" activeClassName="active"  to="/home">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link py-0" activeClassName="active"  to="/services">Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link py-0" activeClassName="active"  to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link py-0" activeClassName="active" to="/staff">Staff</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link mx-3 py-0" activeClassName="active" to="/feedback">Feedback</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link mx-3 py-0" activeClassName="active" to="/blog">Blog</NavLink>
            </li>

            <li className="nav-item">
              {signInOut}
            </li>
          </ul>
        </div>
        </div>
    </nav>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}

// Export component
export default connect(null, { logout })(Header)
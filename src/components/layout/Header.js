import { React } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaCarAlt } from 'react-icons/fa';

// Import logout action
import { logout } from '../../actions/authActions';

// Might make small text lighter
// Need to add active page indicator (red bar under current page nav-item)

const Header = ({ logout }) => {
  // Get the state
  const state = useSelector(state => state);
  // Get the auth state
  const isAuthenticated = state.auth.isAuthenticated;

  // Init the sign in/out link variable
  var signInOut;
  
  // If user is authenticated, show logout link, else show sign in link
  if(isAuthenticated){
    signInOut = <NavLink onClick={logout} className="nav-thing" to="/home" style={{border: '0px'}}>Logout</NavLink>
  } else {
    signInOut = <NavLink className="nav-thing" to="/login">Sign In</NavLink>
  }

  // Set Dark Mode, save the theme to local storage
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }

  // Set Light Mode, save the theme to local storage
  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }

  // Check local storage for theme, if dark set dark mode, else set light mode
  const theme = localStorage.getItem('theme')
  if(theme === 'dark'){
    setDarkMode()
  } else {
    setLightMode()
  }

  // Toggle theme function
  const toggleTheme = (e) => {
    if(e.target.checked){
      setDarkMode()
    } else {
      setLightMode()
    }
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='m-0 p-0 w-100 rounded-bottom-4 overflow-hidden d-flex justify-content-between' id='header'>
          <div className='d-flex bobs-garage' style={{width: '200px', height: '125px'}}>
            <Navbar.Brand href="/home" className='p-0 text-center my-auto mx-auto'><FaCarAlt style={{fontSize: '4rem', color: 'white'}}/><h2 className='my-0 mx-2 text-center bobs-garage'>Bob's Garage</h2></Navbar.Brand>
          </div>
          
          <Navbar.Toggle className='me-4' aria-controls="responsive-navbar-nav" style={{width: '75px', height: '75px'}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-between w-100 text-center fs-4">
              <NavLink className="nav-thing hover-border" activeClassName="active"  to="/home">Home</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active"  to="/services">Services</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active"  to="/about">About</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active" to="/staff">Staff</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active" to="/feedback">Feedback</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active" to="/blog">Blog</NavLink>
              {signInOut}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div class="form-check form-switch py-2">
        <input class="form-check-input" type="checkbox" role="switch" onChange={toggleTheme} defaultChecked={theme ==='dark'}id="flexSwitchCheckChecked" />
        <label className='theme-switch' for="flexSwitchCheckChecked">Toggle Light/Dark Mode</label>
      </div>
    </div>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}

// Export component
export default connect(null, { logout })(Header)
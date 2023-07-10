// import required modules
import React from 'react'
import { Link } from 'react-router-dom'
import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-auto rounded-top-4 overflow-hidden" id='footer'>
      <div className="container-fluid">

        {/* Copyright piece is seperated from the rest of the ul */}
        <ul className="navbar-nav w-100 mx-4 my-3 justify-content-between">
          <li className="nav-item d-flex justify-content-around">
            <h5 className='align-items-center' id='copyright'>Copyright 2023</h5>
            <div className='d-flex flex-wrap ps-5'>
              <BsFacebook className='edit-icon mx-2 fs-3'/>
              <BsInstagram className='edit-icon mx-2 fs-3'/>
              <BsYoutube className='edit-icon mx-2 fs-3'/>
            </div>
          </li>

          {/* The rest of the ul is seperated from the copywrite piece to allow fine tuning of spacing */}
          <ul className="d-flex flex-wrap">

          <li className="p-3">
            <ul className="navbar-nav d-block text-start">
              <li className="nav-item"><h4>Services</h4></li>
              <Link className="nav-link px-0" to="/services">Services</Link>
            </ul>
          </li>

          <li className="p-3">
            <ul className="navbar-nav d-block text-start">
              <li className="nav-item"><h4>About</h4></li>
              <Link className="nav-link px-0" to="/about">About Us</Link>
            </ul>
          </li>

          <li className="p-3">
            <ul className="navbar-nav d-block text-start">
              <li className="nav-item"><h4>Staff</h4></li>
              <Link className="nav-link px-0" to="/staff">Meet the Staff</Link>
            </ul>
          </li>

          <li className="p-3">
            <ul className="navbar-nav d-block text-start">
              <li className="nav-item"><h4>Feedback</h4></li>
              <Link className="nav-link px-0" to="/feedback">Reviews</Link>
            </ul>
          </li>

          <li className="p-3">
            <ul className="navbar-nav d-block text-start">
              <li className="nav-item"><h4>Blog</h4></li>
              <Link className="nav-link px-0" to="/blog">Posts</Link>
            </ul>
          </li>

          <li className="p-3">
            <ul className="navbar-nav d-block text-start">
              <li className="nav-item"><h4>Account</h4></li>
              <Link className="nav-link px-0" to="/account">Login</Link>
              <Link className="nav-link px-0" to="/account">Register</Link>
            </ul>
          </li>
          </ul >
        </ul>
      </div>
    </nav>
  )
}

// Export components
export default Footer
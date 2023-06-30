// import react
import React from 'react'

// Import components
import Banner from '../layout/Banner'

const About = () => {
  return (
    <div>
      <Banner img={'https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} text="About Us"/>

      <div className='row mb-4 mx-0 border-dark border-opacity-10 rounded-4 overflow-hidden'  id='about'>
        <div className='col-8 p-4'>
          <h3 id='about-header'>About Us</h3>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra nulla ut quam rutrum, ut tincidunt mauris sollicitudin. In hac habitasse platea dictumst. Morbi non tortor mollis velit feugiat venenatis. Proin ullamcorper consectetur nisi, sed porttitor turpis porta id. Suspendisse nulla erat, sodales vitae facilisis ut, faucibus vitae lectus. In hac habitasse platea dictumst. Quisque tincidunt enim dui, a aliquam lorem volutpat eget. Vestibulum et dui a felis pretium efficitur vitae pellentesque tellus. Suspendisse sed nunc odio. Donec eu leo blandit erat venenatis semper. Phasellus eleifend, diam et tristique sodales, elit lacus pharetra est, ac fermentum nisi nibh vitae augue.</p>
        </div>
        <div className='col-4 p-4'>
          <h3>Job Opportunites</h3>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra nulla ut quam rutrum, ut tincidunt mauris sollicitudin. In hac habitasse platea dictumst. Morbi non tortor mollis velit feugiat venenatis. Proin ullamcorper consectetur nisi, sed porttitor turpis porta id. Suspendisse nulla erat, sodales vitae facilisis ut, faucibus vitae lectus.</p>
        </div>
      </div>
    </div>
  )
}

export default About
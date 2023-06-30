// Import react
import React from 'react'

// Import components
import Banner from '../layout/Banner'
import HomeCard from '../home/HomeCard'

const Home = () => {
  return (
    <div>
      <Banner img={'https://images.pexels.com/photos/185545/pexels-photo-185545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} text="Welcome to Bob's Garage!"/>

      <div className='row d-flex justify-content-around'>
        <div className='col'>
          <HomeCard title='Services' body='Find out what we can do for you and your car today!' link={{text: 'Services', link: '/services'}}/>
          <HomeCard title='Feedback' body='Worked with us Before? Leave some feedback below!' link={{text: 'Feedback', link: '/feedback'}}/>
        </div>

        <div className='col'>
          <HomeCard title='About' body='Interested in learning more about the history of the workshop?' link={{text: 'About', link: '/about'}}/>
          <HomeCard title='Staff' body='Come and meet the qualified team who make it all happen!' link={{text: 'Staff', link: '/staff'}}/>
        </div>
      </div>
    </div>
  )
}

export default Home
//'We offer a wide range of services, if you would like to check them out click the link below!'
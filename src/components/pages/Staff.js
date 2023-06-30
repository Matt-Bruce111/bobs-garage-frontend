// Import react
import React from 'react'

// Import components
import Banner from '../layout/Banner'
import StaffCard from '../staff/StaffCard'

// Import images
import Bob from '../../assets/Bob.png'
import Mechanic1 from '../../assets/Mechanic1.png'
import Mechanic2 from '../../assets/Mechanic2.png'
import Receptionist from '../../assets/Receptionist.png'

const Staff = () => {
  return (
    <div>
      <Banner img={'https://images.pexels.com/photos/185545/pexels-photo-185545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} text="Meet the team!"/>

      <div className='row d-flex justify-content-around'>
        <div className='col'>
          <StaffCard image={Bob} name='Bob' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales.'/>
          <StaffCard image={Mechanic1} name='Jack' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales.'/>
        </div>

        <div className='col'>
          <StaffCard image={Mechanic2} name='Ivan' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales.'/>
          <StaffCard image={Receptionist} name='Sheryll' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales.'/> 
        </div>
      </div>
    </div>
  )
}

export default Staff
import React from 'react'
import images from '../../assets/images'
function Profilecomponent() {
  return (
    <div className='profile-component'>
      <img src={images.avatar} alt="profile" className='avatar'  />
      <p>Report for</p>
      <h2>Stacy </h2>
       <h2> Castello</h2>
    </div>
  )
}

export default Profilecomponent
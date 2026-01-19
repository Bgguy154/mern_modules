import React from 'react'
import "../css/profile.css"

const Profile = ({name,age}) => {
  return (
    <>
    <div className='profileDiv'>
    <p>Name:{name},Age:{age}</p>
    </div>
    </>
  )
}

export default Profile
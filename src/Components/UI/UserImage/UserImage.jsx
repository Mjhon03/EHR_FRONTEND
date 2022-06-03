import React, { useEffect, useState } from 'react'
import './UserImage.css'

export const UserImage = ({ userdata }) => {

  const [userProfile, setUserProfile] = useState('https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_1280.png')

  const getImageUser = () => {
    if (userdata.length != 0) {
      setUserProfile(userdata[0].foto);
    }
  }

  useEffect(() => {
    getImageUser()
  })

  return (
    <div className="profile-user-image">
      <img src={userProfile} className='background-profile-image' alt="profile"></img>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import './UserImage.css'

export const UserImage = ({ userdata }) => {

  const [userProfile, setUserProfile] = useState('https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_960_720.png')

  const getImageUser = () => {
    if (userdata.length !== 0) {
      setUserProfile(userdata[0].foto);
    }
    else{
      setUserProfile()
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

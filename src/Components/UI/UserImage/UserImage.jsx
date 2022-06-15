import React, { useEffect, useState } from 'react'
import '../ProfileImage/ProfileImage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


export const UserImage = ({ userData }) => {

  console.log(userData);

  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png')

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const changeData = () => {
    if (userData.length !== 0) {
      setEmail(userData[0].email)
      setName(userData[0].nombre)
      setLastName(userData[0].apellidos)
      setPhone(userData[0].telefono)
      if (userData[0].foto !== 1) {
        setImage(userData[0].foto)
      }
    }
  }

  console.log(userData);

  useEffect(() => {
    changeData()
  })

  return (
    <div className="image-update-container">
      <div className="banner-image-container">

      </div>
      <div className="profile-update">
        <img src={image} className='background-profile' alt="profile"></img>
      </div>
      <div className="text-update-container">
        <div className="profile-tools">
          <h2 className='user-name-tools'>{name} {lastName}</h2>
          <div className="content-image-props">
            <div className="content-props-user">
              <FontAwesomeIcon className='tools-render-action' icon={faLocationDot} />
              <p className='user-data-tools'>Quindio - pijao</p>
            </div>
            <div className="content-props-user">
              <FontAwesomeIcon className='tools-render-action' icon={faEnvelope} />
              <p className='user-data-tools'> {email}</p>
            </div>
            <div className="content-props-user">
              <FontAwesomeIcon className='tools-render-action' icon={faPhone} />
              <p className='user-data-tools'>{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
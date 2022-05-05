import React from 'react'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'


export const Profile = () => {
  return (
    <div>
      < Header />
      <div className="info-container">
        <input type="checkbox" id='checkM' />
        <div className="Profile-cover">
          <img className='profile-img-cover' src='https://cdn.pixabay.com/photo/2017/10/03/20/18/building-2813980_960_720.jpg' alt='cover-profile'></img>
        </div>
        <div className="img-profile-container">
            <div className='img-container-settings'>
            </div>
        </div>
        <div className="info-addons">
          <h2>Jhon Maicol Montoya</h2>
          <p className='profile-email'>juliancitoamaya@gmail.com</p>
          <p className='profile-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem, veniam consectetur quisquam est eveniet illo fuga quidem omnis quaerat voluptatibus illum voluptas sed? Perspiciatis voluptatum saepe harum illo. Qui.</p>
        </div>
        <div className="profile-options">
          <div className="aditional-info">
            <p className='add-on'>add </p>
            <p className='add-on add-on-border-left'>add </p>
            <p className='add-on add-on-border'>add </p>
            <p className='add-on'>add </p>
          </div>
          <div className="contact-actions">
            <button className='action-button'>Email</button>
            <button className='action-button'>Chat</button>
            <button className='action-button'>Resportar Usuario</button>
          </div>
        </div>
      </div>
    </div>

  )
}

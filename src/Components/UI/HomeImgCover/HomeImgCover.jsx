import React from 'react'
import './HomeImgCover.css'

export const HomeImgCover = () => {
    const URL = 'https://cdn.pixabay.com/photo/2017/04/06/02/46/bogota-2207075_960_720.jpg'
  return (
    <div className='img-container'>
        <img src={ URL } alt="image"></img>
    </div>
  )
}

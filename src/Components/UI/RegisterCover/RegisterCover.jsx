import React from 'react'
import './RegisterCover.css'

export const RegisterCover = () => {
    const URL = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg"
    return (
        <div className="img-Register-container">
            <img src={ URL } alt="image" className='image-Register'></img>
        </div>
    )
}

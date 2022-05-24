import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ProfileImage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCameraRotate } from '@fortawesome/free-solid-svg-icons'

export const ProfileImage = () => {

    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_960_720.png')

    const uploadedImage = (e) => {
        const files = e.target.files[0]
        const formData = new FormData()

        formData.append("file", files)
        formData.append("upload_preset", "profile")
        axios.post("https://api.cloudinary.com/v1_1/easyhouserent/image/upload", formData)
        .then(response => {
            console.log(response.data);
            setImage(response.data.url)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const updateProfileImage = (picture) => {
        axios.put({ params: { image: picture } })
        .then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="profile-update">
            <img src={image} className='background-profile' alt="profile"></img>
            <input id='image-update'
                type='file'
                onChange={(e) => { uploadedImage(e) }} />
            <div className="options-container">
                <button className='image-user-options'>
                    <FontAwesomeIcon icon={faCameraRotate}></FontAwesomeIcon>
                    <label className='img-update-label' htmlFor="image-update">actualizar</label>
                </button>
                <button className='image-user-options'>
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                    <label className='img-update-label'>ver foto</label>
                </button>
            </div>
        </div>
    )
}

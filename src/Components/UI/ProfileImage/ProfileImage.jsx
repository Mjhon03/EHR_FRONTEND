import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './ProfileImage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCameraRotate } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../UserProvider/UserProvider';

export const ProfileImage = () => {

    const { user , update } = useContext(UserContext)
    let idUser = user[0].idusuario;

    const [image, setImage] = useState('')

    const selectImage = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Users/getUser' , { params : { idusuario : idUser }})
        .then(response => {
            let photo = response.data[0].foto;
            changeDefaultImage(photo)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const changeDefaultImage = (photo) => {
        if(photo.length === 0){
            setImage('https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_960_720.png')
        }
        else{
            setImage(photo)
        }
    }

    useEffect(()=> {
        selectImage()
    })

    const uploadedImage =  (e) => {
        const files = e.target.files[0]
        const formData = new FormData()

        formData.append("file", files)
        formData.append("upload_preset", "profile")
        axios.post("https://api.cloudinary.com/v1_1/easyhouserent/image/upload", formData)
        .then(response => {
            let uploaded = response.data.url
            setImage(response.data.url)
            sendNewImage( uploaded )
            update(response.data.url)
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
    }

    const sendNewImage = ( uploaded ) =>{
        axios.post('https://easy-house-rent.azurewebsites.net/api/Users/ProfilePicture' , {
            idusuario : idUser,
            foto : uploaded
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
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

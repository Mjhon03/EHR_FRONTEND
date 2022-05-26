import axios from 'axios';
import React, { useContext, useState } from 'react'
import './ProfileImage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCameraRotate } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../UserProvider/UserProvider';



export const ProfileImage = () => {

    const userData = useContext(UserContext)
    let idUser = userData[0].idusuario;

    console.log(userData);

    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_960_720.png')

 

    const uploadedImage =  (e) => {
        const files = e.target.files[0]
        const formData = new FormData()

        formData.append("file", files)
        formData.append("upload_preset", "profile")
        axios.post("https://api.cloudinary.com/v1_1/easyhouserent/image/upload", formData)
        .then(response => {
            console.log(response.data.url);
            setImage(response.data.url)
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    const sendNewInfo = () => {
        let url =  'https://easy-house-rent.azurewebsites.net/api/Users/ProfilePicture'
        axios.post(url , {
            idusuario : idUser,
            foto : image
        })
        .then(response => {
            console.log(response.status);
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

            <button onClick={sendNewInfo}>funcion</button>
        </div>
    )
}

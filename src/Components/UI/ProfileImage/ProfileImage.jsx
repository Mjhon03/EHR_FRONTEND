import axios from 'axios';
import React, { useState } from 'react'
import './ProfileImage.css'

export const ProfileImage = () => {


    const  uploadedImage = (e) => {
        console.log(e.target.files[0]);
        SetImageSelected(e.target.files[0])
    }

    const [ imageSelected , SetImageSelected ] = useState([])
    const [ photo , setPhoto ] = useState('')

    const updateProfileImage = (picture) =>{
        axios.put({ params : { image : picture}})
        .then(response =>{
            console.log(response);
        }).catch(err => { 
            console.log(err);
        })
    }
    const uploadImage = () =>{
        const formData = new FormData()
        formData.append("file",imageSelected)
        formData.append("upload_preset","profile")
        axios.post("https://api.cloudinary.com/v1_1/easyhouserent/image/upload" , formData)
        .then(response =>{
            console.log(response);
            setPhoto(response.data.url)
        })
        .catch(err =>{
            console.log(err);
        })
    }

  return (
    <div className="profile-update">
        <img src="" alt=""></img>
        <input id='image-update'
        type='file'
        onChange={(e)=>{uploadedImage(e)}}/>
    </div>
  )
}

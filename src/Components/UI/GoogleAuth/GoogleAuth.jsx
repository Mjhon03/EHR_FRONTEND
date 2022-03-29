import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { postUsers } from '../../../methodsUsers';
import axios, { Axios } from 'axios';

export const GoogleAuth = () => {

    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const responseGoogle = (response) => {
        console.log(response)

        let emailProvider = response.profileObj.email
        let passwordProvider = response.profileObj.googleId

        axios.get(`https://localhost:44352/api/Users?email=${emailProvider}&contrase%C3%B1a=${passwordProvider}`)
        .then(res => {
            console.log(res.data);
            if (res.data[0].email === emailProvider || passwordProvider === res.data[0].contraseña) {
                console.log("usuario ya registrado anteriormente")
            } else {
                setName(response.profileObj.name)
                setLastName(response.profileObj.familyName)
                setEmail(response.profileObj.email)
                setPassword(response.profileObj.googleId)
                setPhoto(response.profileObj.imageUrl)

                postUsers(name, lastName, "", "", email, password, "A", 1, 100)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        < GoogleLogin
            clientId="502993702484-vkdcg537aa1ip1r14mab9s11dt7lf2i2.apps.googleusercontent.com"
            buttonText="Iniciar sesión con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

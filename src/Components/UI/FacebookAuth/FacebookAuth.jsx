import { signInWithPopup, FacebookAuthProvider, EmailAuthCredential, applyActionCode } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';


import React, { useState } from 'react'
import axios from 'axios';
import { urlUsers } from '../../ApiRoutes';
import { postUsers } from '../../../methodsAxios';

export const FacebookAuth = () => {

    const [email, setemail] = useState({ email: "email" })
    const [password, setpassword] = useState({ password: "password" })

    const [photo, setPhoto] = useState("")
    const [telefono, setTelefono] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")

    const signInWithFcebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authFacebook, provider)
            .then((res) => {

                let emailProvider = (res.user.email).toString();
                setemail(emailProvider)

                let passwordProvider = (res.user.uid).toString();
                setpassword(passwordProvider)

                setNombre(res.user.displayName)
                setCorreo(res.user.email)
                setTelefono(res.user.phoneNumber)
                setPhoto(res.user.photoURL)
                setContraseña(res.user.uid)

                postUsers(nombre," "," ",telefono,correo,contraseña,"A",1,100)
                
                axios.get(urlUsers, {params:{email:email, contraseña:password}})
                    .then(response=>{
                    console.log(response.data);
                })
            })

            
    }
    return (
        <button className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>ingresar con Facebook</button>
    )
}

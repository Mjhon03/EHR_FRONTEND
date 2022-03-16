import { signInWithPopup, FacebookAuthProvider, EmailAuthCredential } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';


import React, { useState } from 'react'
import axios from 'axios';
import { urlUsers } from '../../ApiRoutes';

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
                setemail(res.user.email)
                setpassword(res.user.uid)
                axios.get(urlUsers, { params: { email: email, contraseña: password } })
                    .then(datos => {
                        console.log(datos);
                        if (email != correo) {
                            setNombre(res.user.displayName)
                            setCorreo(res.user.email)
                            setTelefono(res.user.phoneNumber)
                            setPhoto(res.user.photoURL)
                            setContraseña(res.user.uid)

                            axios.post(urlUsers, {
                                "nombre": nombre,
                                "apellidos": apellidos,
                                "email": correo,
                                "telefono": telefono,
                                "contraseña": contraseña,
                                "estado": "A",
                                "departamento": 1,
                                "municipio": 100
                            })
                        } else {
                            console.log("usuario registrado")
                        }
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
                   
        })
           
    }
    return (
        <button className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>ingresar con Facebook</button>
    )
}

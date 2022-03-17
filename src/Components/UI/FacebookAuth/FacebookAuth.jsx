import React, { useState } from 'react'
import { postUsers } from '../../../methodsAxios';
import { signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';

import axios from 'axios';;


export const FacebookAuth = () => {

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

                console.log(res.user)
                let emailProvider = (res.user.email);
                let passwordProvider = (res.user.uid).toString();
            
                 axios.get(`https://localhost:44352/api/Users?email=${emailProvider}&contrase%C3%B1a=${passwordProvider}`)
                .then(response=>{
                    console.log(response.data);
                    if (response.data[0].email === emailProvider ){
                         console.log("usuario ya registrado anteriormente")
                    }else{
                        setNombre(res.user.displayName)
                        setCorreo(res.user.email)
                        setTelefono(res.user.phoneNumber)
                        setPhoto(res.user.photoURL)
                        setContraseña(res.user.uid)

                        postUsers(nombre,"","",telefono,correo,contraseña,"A",1,100)
                        console.log("usuario nuevo")
                    }                     
                })
                .catch(function (error) {
                    console.log(error);
                })
            })    
        }
    return (
        <button className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>ingresar con Facebook</button>
    )
}

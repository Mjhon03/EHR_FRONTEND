import React, { useEffect, useState } from 'react'
import { signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';
import axios from 'axios';
import { urlUsers, urlLogin } from '../../ApiRoutes';
import { Navigate, useNavigate } from 'react-router';



export const FacebookAuth = ({ buttonText }) => {

    const[name , setName ] = useState();
    const[ phoneNumber , setPhoneNumber ] = useState();
    const[ email , setEmail] = useState("")
    const[ password , setPassword ] = useState(" ")

    const[faEmail, setFaEmail] = useState({email: "email"})
    const[faPassword, setFaPassword] = useState({password: "password"})

    const navigate = useNavigate()

    const signInWithFcebook = async () => {
        const provider = new FacebookAuthProvider();
        await signInWithPopup(authFacebook, provider)
            .then((res) => {
                console.log(res);
                setFaEmail(res.user.email)
                setFaPassword(res.user.uid)
                setEmail(res.user.email)
                setPassword(res.user.uid)
                setName(res.user.displayName)
                setPhoneNumber(res.user.phoneNumber)
            })
            
        }
        
        const validState = () => {
            if (name === "" ||  email === "" || password === ""){
                console.log("campo vacio");
            }
            else{
                registerFacebookUser()
            }
        }
    
        useEffect(() =>{
            validState()
        })

        const registerFacebookUser = () => {
            axios.post(`https://easy-house-rent.azurewebsites.net/verifyEmail?email=${email}`)
            .then(response => {
                console.log(response); 
                if (response.data === true) {
                    axios.post(urlLogin, {
                        "email" : email,
                        "password" : password
                    })
                    .then(res => {
                        console.log(res);
                        localStorage.setItem("userInfo", JSON.stringify(res.data))
                        console.log(res);
                        // navigate('/')
                        // window.location.reload()
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
                else{
                    axios.post(urlUsers, {
                        "nombre" : name,
                        "email" : email,
                        "contrasenna" : password,
                        "apellido" : "",
                        "edad": 0,
                        "telefono": phoneNumber,
                        "esatdo" : "A",
                        "departamento": 100,
                        "municipio": 1121,
                        "foto": ""
                    })
                    .then(resposenDataRegister =>{
                        console.log(resposenDataRegister);
                        axios.post(urlLogin, {
                            "email" : email,
                            "password" : password
                        })
                        .then(respo => {
                            console.log(respo);
                            localStorage.setItem("userInfo", JSON.stringify(respo.data))
                            // navigate('/')
                            // window.location.reload()
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
        }


    return (
        <button type='button' className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>{ buttonText }</button>
    )
}

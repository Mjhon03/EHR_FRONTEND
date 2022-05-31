import React, { useState } from 'react'
import { postUsers } from '../../../methodsUsers';
import { signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';

import axios from 'axios';import { urlUsers } from '../../ApiRoutes';

export const FacebookAuth = ({ buttonText }) => {

    const[name , setName ] = useState();
    const[ phoneNumber , setPhoneNumber ] = useState();
    const[ email , setEmail] = useState("")
    const[ password , setPassword ] = useState(" ")

    const[faEmail, setFaEmail] = useState({email: "email"})
    const[faPassword, setFaPassword] = useState({password: "password"})

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
            userValidate()   
        }
        
    const registerUser  = () =>{
        postUsers(name,'',0,phoneNumber,email,password,'A',100,1121)
    }


    const userValidate =(()=>{
        axios.get(urlUsers, {params:{email: faEmail, contraseña: faPassword}})
        .then(response=>{
            console.log(response.data)
            if(response.data.length === 1){
                console.log("usuario registrado anteriormente")
            }else{
                registerUser()
                console.log("usuario registrado")
            }
        })
        .catch(ex=>{
            console.log(ex);    
        })
    })

    return (
        <button type='button' className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>{ buttonText }</button>
    )
}

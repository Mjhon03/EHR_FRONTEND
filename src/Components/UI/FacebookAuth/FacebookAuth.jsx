import React, { useState , useEffect} from 'react'
import { postUsers } from '../../../methodsUsers';
import { signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';

import axios from 'axios';import { urlUsers } from '../../ApiRoutes';
;

export const FacebookAuth = ({ buttonText }) => {

    const[faData , setFaData] = useState()
    const[faEmail, setFaEmail] = useState({email: "email"})
    const[faPassword, setFaPassword] = useState({password: "password"})

    const signInWithFcebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authFacebook, provider)
            .then((res) => {
                setFaEmail(res.user.email)
                setFaPassword(res.user.uid)     
            })
            
        }

        const userValidate =(()=>{
            axios.get(urlUsers, {params:{email: faEmail, contraseña: faPassword}})
            .then(response=>{
                console.log(response.data)
                if(response.data.length === 1){
                    console.log("usuario registrado anteriormente")
                }else{
                }
            })
            .catch(ex=>{
                console.log(ex);
            })
        })

    return (
        <button className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>{ buttonText }</button>
    )
}

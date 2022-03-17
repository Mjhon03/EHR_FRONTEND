import React, { useState } from 'react'
import { postUsers } from '../../../methodsUsers';
import { signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { authFacebook } from '../../../firebase-config';

import axios from 'axios';;


export const FacebookAuth = ({ buttonText }) => {

    const [photo, setPhoto] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [yearsOld , setYearsOld] = useState("")
    const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                        
                        setName(res.user.displayName)
                        setEmail(res.user.email)
                        setPhoneNumber(res.user.phoneNumber)
                        setPhoto(res.user.photoURL)
                        setPassword(res.user.uid)

                        postUsers(name,"","",phoneNumber,email,password,"A",1,100)
                        console.log("usuario nuevo")
                    }                     
                })
                .catch(function (error) {
                    console.log(error);
                })
            })    
        }
    return (
        <button className="facebook-auth" onClick={signInWithFcebook}><FontAwesomeIcon className="facebook-icon" icon={faFacebook}></FontAwesomeIcon>{ buttonText }</button>
    )
}

import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { postUsers } from '../../../methodsUsers';
import axios, { Axios } from 'axios';
import { urlUsers } from '../../ApiRoutes';

export const GoogleAuth = () => {

    const[goEmail, setGoEmail] = useState({email: "email"})
    const[goPassword, setGoPassword] = useState({password: "password"})

    const[ name , setName ] = useState("")
    const[ lastName , setLastName ] = useState("")
    const[ email , setEmail ] = useState("")
    const[ password , setPassword ] = useState("")
    const[ photo , setPhoto ] = useState("")

    const responseGoogle =  (response => {
        console.log(response)

        setGoEmail(response.profileObj.email)
        setGoPassword(response.profileObj.googleId)
        setName(response.profileObj.givenName)
        setLastName(response.profileObj.familyName)
        setEmail(response.profileObj.email)
        setPassword(response.profileObj.googleId)
        setPhoto(response.profileObj.imageUrl)
        
        userGoogleValidate()
    })


    const userGoogleValidate =(()=>{
        axios.get(urlUsers, {params:{email: goEmail, contraseña: goPassword}})
        .then(response=>{
            console.log(response.data)
            if(response.data.length === 1){
                console.log("usuario registrado anteriormente")
            }else{
                console.log("usuario registrado")
                registerGoogleUser()
            }
        })
        .catch(ex=>{
            console.log(ex);    
        })
    })

    const registerGoogleUser  =() =>{
        postUsers(name, lastName,0 ,"" , email , password , "A", 100 , 1121)
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

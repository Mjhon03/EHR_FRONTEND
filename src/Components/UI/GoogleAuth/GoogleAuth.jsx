import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { getlogin, postUsers } from '../../../methodsUsers';
import axios from 'axios';
import { urlLogin, urlUsers } from '../../ApiRoutes';
import { UserContext } from '../../../UserProvider/UserProvider';
import { parseActionCodeURL } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Alert } from '../../Alert';


export const GoogleAuth = ({ buttonText }) => {

    const[goEmail, setGoEmail] = useState({email: "email"})
    const[goPassword, setGoPassword] = useState({password: "password"})

    const[ name , setName ] = useState("")
    const[ lastName , setLastName ] = useState("")
    const[ email , setEmail ] = useState("")
    const[ password , setPassword ] = useState("")
    const[imageUrl, setimageUrl] = useState("")

    const responseGoogle = (response => {
        console.log(response)
        setGoEmail(response.profileObj.email)
        setGoPassword(response.profileObj.googleId)
        setName(response.profileObj.givenName)
        setLastName(response.profileObj.familyName)
        setEmail(response.profileObj.email)
        setPassword(response.profileObj.googleId)
        setimageUrl(response.profileObj.imageUrl)
    })

    const validState = () => {
        if (name === "" || lastName === "" ||  email === "" || password === "" || imageUrl === ""){
            console.log("campo vacio");
        }
        else{
            registerGoogleUser()
        }
    }

    useEffect(() =>{
        validState()
    })


    const EMAILURL = 'https://easy-house-rent.azurewebsites.net/api/password'
    const navigate = useNavigate()


    const registerGoogleUser  = () =>{
        axios.post(EMAILURL, { params: { email: email } })
            .then(response => {
                if (response.data.state===false) {
                    // getlogin(goEmail,goPassword)
                    console.log(response.data.state);
                    console.log(email);
                    console.log(password);
                        axios.post(urlLogin, {
                            "email":email,
                            "password":password
                        })
                            .then(res => {
                                console.log(res);
                                localStorage.setItem("userInfo", JSON.stringify(response.data))
                                navigate('/')
                                window.location.reload()
                            })
                            .catch(ex => {
                                console.log(ex);
                            })
                }
                else{
                    postUsers(name, lastName, 0, "", email, password, 100, 1121, imageUrl)
                    console.log(email);
                    console.log(password);
                    axios.post(urlLogin, {
                            "email":email,
                            "password":password
                        })
                            .then(res => {
                                console.log(res);
                                localStorage.setItem("userInfo", JSON.stringify(response.data))
                                navigate('/')
                                window.location.reload()
                            })
                            .catch(ex => {
                                console.log(ex);
                            })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        < GoogleLogin
            clientId="502993702484-vkdcg537aa1ip1r14mab9s11dt7lf2i2.apps.googleusercontent.com"
            buttonText={ buttonText }
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'} 
        />
    )
}

import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { getlogin, postUsers } from '../../../methodsUsers';
import axios from 'axios';
import { urlLogin} from '../../ApiRoutes';
import { useNavigate } from 'react-router';



export const GoogleAuth = ({ buttonText }) => {


    const[ name , setName ] = useState("")
    const[ lastName , setLastName ] = useState("")
    const[ email , setEmail ] = useState("")
    const[ password , setPassword ] = useState("")
    const[imageUrl, setimageUrl] = useState("")

    const responseGoogle = (response => {
        console.log(response)
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

    const navigate = useNavigate()

    const registerGoogleUser  = () =>{
        axios.post(`https://easy-house-rent.azurewebsites.net/verifyEmail?email=${email}`)
            .then(response => {
                console.log(response); 
                if (response.data === true) {
                    console.log(response.data);
                    console.log(email);
                    console.log(password);
                    axios.post(urlLogin, {
                        "email" : email,
                        "password" : password
                    })
                    .then(response => {
                        console.log(response);
                        localStorage.setItem("userInfo", JSON.stringify(response.data))
                        navigate('/')
                        window.location.reload()
                    })
                    .catch(error => {
                        console.log();
                    })
                }
                else{
                    postUsers(name, lastName, 0, "", email, password, 100, 1121, imageUrl)
                    console.log(email);
                    console.log(password);
                    getlogin(email, password)
                    navigate('/')
                    window.location.reload()
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

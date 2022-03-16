import axios from 'axios';
import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { urlUsers } from '../../ApiRoutes';


export const GoogleAuth = () => {

    const[email, setemail] = useState({email: "email"})
    const[password, setpassword] = useState({password: "password"})
 
    const[nombre,setNombre] = useState("")
    const[apellidos,setApellidos] = useState("")
    const[correo,setCorreo] = useState("")
    const[contraseña,setContraseña] = useState("")

    const responseGoogle = (response) =>{ 
        console.log(response)
        setemail(response.profileObj.email)
        setpassword(response.profileObj.googleId)
        
        axios.get(urlUsers, {params:{email:email, contraseña:password}})
            .then(datos =>{
            console.log(datos);

            if(datos.data.email != email || datos.data.contraseña != password){
                setCorreo(response.profileObj.email)
                setContraseña(response.profileObj.googleId)
                setNombre(response.profileObj.givenName)
                setApellidos(response.profileObj.familyName)

                axios.post(urlUsers,{
                    "nombre":nombre,
                    "apellidos":apellidos,
                    "email":correo,
                    "contraseña":contraseña,
                    "estado": "A",
                    "departamento":1,
                    "municipio":100
                })
            }else{
                console.log("usuario registrado")
            }  
        })           
    }

  return (
    < GoogleLogin 
        clientId = "502993702484-vkdcg537aa1ip1r14mab9s11dt7lf2i2.apps.googleusercontent.com" 
        buttonText = "Iniciar sesión con Google" 
        onSuccess = { responseGoogle } 
        onFailure = { responseGoogle } 
        cookiePolicy = { 'single_host_origin' }
    / >
  )
}

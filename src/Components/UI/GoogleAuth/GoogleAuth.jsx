import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { getUser, postUsers } from '../../../methodsUsers';

export const GoogleAuth = () => {

    const [email, setemail] = useState({ email: "email" })
    const [password, setpassword] = useState({ password: "password" })

    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")

    const responseGoogle = (response) => {
        console.log(response)

        setCorreo(response.profileObj.email)
        setContraseña(response.profileObj.googleId)
        setNombre(response.profileObj.givenName)
        setApellidos(response.profileObj.familyName)
        postUsers(nombre, apellidos, "", "", correo, contraseña, "A", 1, 100)

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

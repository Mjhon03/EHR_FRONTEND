import axios from "axios"
import { urlUsers } from "./Components/ApiRoutes"


export const postUsers = (nombre, apellidos ,fechaNacimiento , telefono ,email ,contraseña , estado , departamento , municipio ) => {
    axios.post(urlUsers,{
        "nombre":nombre,
        "apellidos":apellidos,
        "fechaNacimento": fechaNacimiento,
        "telefono" : telefono, 
        "email": email,
        "contraseña":contraseña,
        "estado": estado,
        "departamento":departamento,
        "municipio":municipio
    })
    .then(res =>{
        
    })
}

export const getUser = (email , password )=>{
    axios.get(urlUsers, {params:{email:email, contraseña:password}})
    .then(response=>{
       return response.data;
    })
}
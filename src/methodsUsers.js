import axios from "axios"
import { urlUsers } from "./Components/ApiRoutes"


export const postUsers = (nombre, apellidos ,edad, telefono ,email ,contraseña , estado , departamento , municipio ) => {
    axios.post(urlUsers,{
        "nombre":nombre,
        "apellidos":apellidos,
        "edad": edad,
        "telefono" : telefono, 
        "email": email,
        "contraseña":contraseña,
        "estado": "A",
        "departamento":departamento,
        "municipio":municipio
    })
    .then(res =>{
        console.log(res.status)
    })
}

export const getUser = (email , password )=>{
    axios.get(urlUsers, {params:{email:email, contraseña:password}})
    .then(response=>{
        return response.data;
    })
}
import axios from "axios";
import { Alert } from "./Components/Alert";
import { urlUsers } from "./Components/ApiRoutes";

export const postUsers = (nombre, apellidos ,edad, telefono ,email ,contraseña , departamento , municipio , foto ) => {
    axios.post(urlUsers,{
        "nombre":nombre,
        "email": email,
        "contrasenna":contraseña,
        "apellidos":apellidos,
        "edad": edad,
        "telefono" : telefono, 
        "estado": "A",
        "departamento":departamento,
        "municipio":municipio,
        "foto" : foto
    })
    .then(res =>{
        Alert("Usuario registrado correctamente","Bienvenido a Easy House Rent","success","OK","2000");
    })
}

export const getUser = (email , password )=>{
    axios.get(urlUsers, {params:{email:email, contraseña:password}})
    .then(response=>{
        return response.data;
    })
}



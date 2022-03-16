export const localStorage = ( data ) =>{
    if (response.length>0) {
        let datos = response[0];
        localStorage.setItem('id', datos.id)
        localStorage.setItem('Nombre', datos.nombre)
        localStorage.setItem('Apellidos', datos.apellidos)
        localStorage.setItem('email', datos.email)
        localStorage.setItem('telefono', datos.telefono)
        alert(`Bienvenido ${datos.nombre} ${datos.apellidos}`)
    }else{
        console.log("datos no guardados ")
    }
}


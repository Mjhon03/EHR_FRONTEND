import axios from 'axios'

export const createAnouncement = (iduser , title , adress , description ,
   modality , zone , edification , rooms , garage , price , date , images ) =>{

    axios.post('https://easy-house-rent.azurewebsites.net/api/Advertisement' ,{
        idusuario : iduser,
        titulo : title,
        direccion : adress,
        descripcion : description,
        modalidad : modality,
        zona : zone,
        edificacion : edification,
        habitaciones : rooms,
        garaje : garage,
        precio : price,
        fecha : date,
        url1 : images[0],
        url2 : images[1],
        url3 : images[2],
        url4 : images[3]
    })
    .then(response => {
        console.log(response.status);
    })
    .catch(err => {
        console.log(err);
    })
}
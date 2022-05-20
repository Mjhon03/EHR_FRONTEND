import axios from 'axios'

export const createAnouncement = (iduser , title , adress , description ,
   modality , zone , edification , rooms , garage , price , date , image1,image2, image3, image4 ) =>{

    axios.post('https://localhost:44375/api/Advertisement' ,{
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
        url1 : image1,
        url2 : image2,
        url3 : image3,
        url4 : image4
    })
    .then(response => {
        console.log(response.status);
    })
    .catch(err => {
        console.log(err);
    })
}
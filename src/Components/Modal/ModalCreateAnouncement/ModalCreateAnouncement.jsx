import React from 'react'

export const ModalCreateAnouncement = () => {
  return (
    <div className='anouncement-container'>
        <h1>nueva publicacion</h1>
        <form className=''>
            <input type='text' placeholder='titulo de la publicacion' />
            <input type='text' placeholder='descripcion' />
            <input type='text' placeholder='direccion' />
            <input type='text' placeholder='estado' />
            <input type='text' placeholder='estado' />
            <input type='text' placeholder='valor' />
            <input type='text' placeholder='fecha de publicacion' />
            <label htmlFor='certificaion-file' className='certification-label'/>
            <input id='certification-file' type='file' placeholder='certificado' />



        </form>

    </div>
  )
}

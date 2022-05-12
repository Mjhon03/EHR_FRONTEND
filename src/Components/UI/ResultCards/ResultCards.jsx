import React from 'react'

export const ResultCards = ({ data }) => {
    return (
        <>
            {data.map(element => {
                <div className="card-search-container">
                    <p>{element.titulo}</p>
                    <p>{element.descripcion}</p>
                    <div className="card-search-description">
                        <p>{element.direccion}</p>
                        <p>{element.zona}</p>
                        <p>{element.valor}</p>
                        <img src={element.url1} alt='previewImage'/>
                    </div>
                </div>
            })}
        </>
    )
}

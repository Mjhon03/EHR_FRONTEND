import React from 'react'
import './ResultCards.css'

export const ResultCards = ({ data }) => {
    const { idanuncio , titulo , zona , direccion , fecha , valor , url1  } = data
    return (
        <div  key={ idanuncio} className="card-render-container">
            <h2>{ titulo }</h2>
            <p>{ fecha }</p>
            <p>{zona }</p>
            <p>{ direccion }</p>
            <img src={url1} alt='url' />
            
        </div>
    )
}

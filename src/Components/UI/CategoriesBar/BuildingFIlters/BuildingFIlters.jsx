import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { VIewCardEdification } from '../CardEdification/CardEdification'

export const BuildingFilters = () => {

    const [cardEdification, setCardEdification] = useState([])
    const URLFilters = `https://localhost:5001/api/Home/Edification?edification=Hogar`

    const GetCardEdification = (event) => {
        axios.get(URLFilters)
        .then(response => {
            setCardEdification(response.data)
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        GetCardEdification()
    }, [URLFilters])

    return (
        <div>
            {
                cardEdification.map(
                    cardEdification => (
                        <VIewCardEdification key={cardEdification.idanuncio} data={cardEdification}/>
                    )
                )
            }
        </div>
    )
}
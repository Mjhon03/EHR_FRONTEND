import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ResultCards } from '../../UI/ResultCards/ResultCards'

export const CategoriesResult = () => {

    const [searchParams] = useSearchParams()
    let filter = searchParams.get('type')
    console.log(filter)

    const [data, setData] = useState([])

    const getCategories = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/home/edification',{ params: { edification: filter }})
        .then(response => {
            console.log(response.data);
            setData(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCategories()
    },[])

    return (
        <div className="cards-content">
            {
                data.map(
                    data => (
                        <ResultCards key={data.idanuncio} data={data} />
                    )
                )
            }
        </div>
    )
}


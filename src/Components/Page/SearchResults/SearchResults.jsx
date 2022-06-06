import React, { useEffect, useState } from 'react'
import { ResultCards } from '../../UI/ResultCards/ResultCards';
import { useSearchParams } from 'react-router-dom'
import { urlSearch } from '../../ApiRoutes'
import axios from 'axios'
import { Header } from '../../Layout/Header/Header';
import './SearchResults.css'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'

export const SearchResults = () => {

  const [searchParams] = useSearchParams();
  let searchParam = searchParams.get('value');

  const [resultData, setResultData] = useState([])

  const getData = () => {
    axios.get(`${urlSearch}?value=${searchParam}`)
      .then(response => {
        setResultData(response.data)
      })
      .catch(ex => {
        console.log(ex);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      < Header />

      <div className="cards-content">
        {
          resultData.map(
            resultData => (
              <ResultCards key={resultData.idanuncio} data={resultData} />
            )
          )
        }
      </div>

      <RegisterFooter />
    </>
  )
}

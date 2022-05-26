import React from 'react'
import axios from 'axios'
import './MostRecent.css'
import { useState, useEffect } from 'react'
import { CardMostRecent } from './CardMostRecent/CardMostRecent'

export const MostRecent = () => {

  const [cardMostRecent, setCardMostRecent] = useState([])
  const URLCMR = `https://easy-house-rent.azurewebsites.net/api/Home/MostRecent`

  const GetMostRecent = (event) => {
      axios.get(URLCMR)
      .then(response => {
          setCardMostRecent(response.data)
          console.log(response.data);
      })
      .catch(error => {
          console.log(error)
      })
  }

  useEffect(() => {
    GetMostRecent()
  }, [URLCMR])

  return (
    <div className='mostRecentContainer'>
      <div className='divCardMostRecentItem'>
        {
          cardMostRecent.map(
            cardMostRecent => (
              <CardMostRecent key={cardMostRecent.idanuncio} data={cardMostRecent}/>
            )
          )
        }
      </div>
    </div>
  )
}

import React from 'react'
import { useSearchParams } from 'react-router-dom'
import './OtherUser.css'

export const OtherUser = () => {

  const [searchParams] = useSearchParams()

  let idUser = searchParams.get('idUser')
  console.log(idUser);
  
  return (
    <div>OtherUser</div>
  )
}

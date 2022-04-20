import './CategoriesBar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding,  faHouse, faHouseUser, faShop, faTractor } from '@fortawesome/free-solid-svg-icons'


export const CategoriesBar = () => {
  return (
    <div className='categories-bar'>
        <div className="categories-bar-container category-one">
            <FontAwesomeIcon className='category-icon color-icon-one' icon={ faHouse }></FontAwesomeIcon>
            <p className='color-icon-one'>Hogares</p>
        </div>
        <div className="categories-bar-container category-two">
            <FontAwesomeIcon className='category-icon color-icon-two'  icon={ faHouseUser }></FontAwesomeIcon>
            <p className='color-icon-two'>Rentas</p>
        </div>
        <div className="categories-bar-container category-one">
            <FontAwesomeIcon className='category-icon color-icon-one' icon={ faTractor }></FontAwesomeIcon>
            <p className='color-icon-one'>Rural</p>
        </div>
        <div className="categories-bar-container category-two">
            <FontAwesomeIcon className='category-icon color-icon-two'  icon={ faBuilding }></FontAwesomeIcon>
            <p className='color-icon-two'>Apartamentos</p>
        </div>
        <div className="categories-bar-container  category-one">
            <FontAwesomeIcon className='category-icon color-icon-one'  icon={ faShop }></FontAwesomeIcon>
            <p className='color-icon-one'>Locales</p>
        </div>
    </div>
  )
}

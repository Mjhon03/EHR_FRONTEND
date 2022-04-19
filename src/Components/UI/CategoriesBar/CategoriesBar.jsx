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
            <p className='color-icon-two'>rentas</p>
        </div>
        <div className="categories-bar-container category-three">
            <FontAwesomeIcon className='category-icon color-icon-three' icon={ faTractor }></FontAwesomeIcon>
            <p className='color-icon-three'>rural</p>
        </div>
        <div className="categories-bar-container category-four">
            <FontAwesomeIcon className='category-icon color-icon-four'  icon={ faBuilding }></FontAwesomeIcon>
            <p className='color-icon-four'>apartamentos</p>
        </div>
        <div className="categories-bar-container  category-five">
            <FontAwesomeIcon className='category-icon color-icon-five'  icon={ faShop }></FontAwesomeIcon>
            <p className='color-icon-five'>locales</p>
        </div>
    </div>
  )
}

import './CategoriesBar.css'
import React from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding,  faHouse, faHouseUser, faShop, faTractor } from '@fortawesome/free-solid-svg-icons'


export const CategoriesBar = () => {

    const navigate = useNavigate()
    const ViewHomes = () => {
        navigate(`/Edification`)
    }

    return (
        <div className='categories-bar'>
            <div onClick={ViewHomes} className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon' icon={ faHouse }></FontAwesomeIcon>
                <p className='category-text-font'>Hogares</p>
            </div>
            <div className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon'  icon={ faHouseUser }></FontAwesomeIcon>
                <p className='category-text-font'>Rentas</p>
            </div>
            <div className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon' icon={ faTractor }></FontAwesomeIcon>
                <p className='category-text-font'>Rural</p>
            </div>
            <div className="categories-bar-container category-one">
                <FontAwesomeIcon className='category-icon'  icon={ faBuilding }></FontAwesomeIcon>
                <p className='category-text-font'>Apartamentos</p>
            </div>
            <div className="categories-bar-container  category-one">
                <FontAwesomeIcon className='category-icon'  icon={ faShop }></FontAwesomeIcon>
                <p className='category-text-font'>Locales</p>
            </div>
        </div>
    )
}

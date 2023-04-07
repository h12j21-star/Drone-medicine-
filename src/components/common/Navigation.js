import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/products/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeftLong, faUser, faBagShopping , faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const navigate = useNavigate();
    return (
        <nav className='nav'>
            <div className='nav__goback'>
                <FontAwesomeIcon className='nav__icon' icon={faArrowLeftLong} size="lg" onClick={()=>{navigate('/pharmacylist')}} />
            </div>
            <div className="nav__title">Drone Medicine</div>
            <ul className='nav__menus'>
                <li>
                    <FontAwesomeIcon className='nav__icon' icon={faUser} size="lg" />                    
                </li>
                <li>
                    <FontAwesomeIcon className='nav__icon' icon={faBagShopping} size="lg" onClick={()=>{navigate('/basket')}}/>                    
                </li>
                <li>
                    <FontAwesomeIcon className='nav__icon' icon={faRightFromBracket} size="lg" onClick={()=>{navigate('/')}} />                     
                </li>
            </ul>
        </nav>
    );
}


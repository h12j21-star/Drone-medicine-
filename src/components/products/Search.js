import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import "../../style/products/Search.css";

export default function Search() {
    return (
        <div className='search'>
            <input className='search__input' type="text" placeholder='Search...' onFocus={(e)=>e.target.placeholder = ""} onBlur={(e)=>e.target.placeholder = "Search..."}/>
            <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} size="lg" onClick={()=>console.log("검색")} />   
        </div>
    );
}


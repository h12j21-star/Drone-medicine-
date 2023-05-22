import {React,useState} from 'react';
import '../../style/products/Item.css';

export default function Item({item,index,handleShoppingBasket}) {
    const [itemVisibility,setItemVisibility] = useState(false);
    const handleMouseEvent = () =>{
        setItemVisibility(prev=>!prev);
    } 
    const handleButtonClick = () =>{
        handleShoppingBasket(item);
    }
    return (
        <div className='col-md-4 item' key={index} onMouseOver={()=>{ 
                handleMouseEvent();
            }} 
            onMouseOut={()=>{
                handleMouseEvent();        
            }}>
            {
                itemVisibility ? (
                <div className='item__add'>
                    <button className='item__add__btn' onClick={()=>{handleButtonClick()}}>ADD TO CART</button>  
                </div>) : ("")
            }
            <img className='item__img' src={`http://localhost:8082/products/images/${item.imgFileName}`}/>
            <div className='item__name'>{item.name}</div>
            <div className='item__price'>{item.price}원</div>
        </div>
    );
}


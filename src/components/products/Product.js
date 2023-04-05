import React from 'react';
import Item from './Item';
import '../../style/products/Product.css';

export default function Product({items, handleShoppingBasket}) {
    return (
        <section className='main'>
        <div className="main__items">
            <div className="row">
                {
                    items.map((item, index)=>{
                        return (
                                <Item item={item} key={index} handleShoppingBasket={handleShoppingBasket}/>
                        );
                    })
                }
            </div>
        </div>
    </section>
    );
}


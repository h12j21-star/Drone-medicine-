import React from 'react';
import Navigation from '../components/common/Navigation';
import ShoppingBasket from '../components/shoppingBasket/ShoppingBasket';

export default function Basket() {
    return (
        <>
            <Navigation prevUrl="/products" />
            <ShoppingBasket />
        </>
    );
}

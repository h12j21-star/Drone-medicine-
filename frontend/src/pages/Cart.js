import React from 'react';
import Navigation from '../components/common/Navigation';
import ShoppingCart from '../components/cart/ShoppingCart';

export default function Cart() {
    return (
        <>
            <Navigation prevUrl="/products" />
            <ShoppingCart />
        </>
    );
}

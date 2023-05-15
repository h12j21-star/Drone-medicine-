import React from 'react';
import ItemList from './ItemList';
import Payment from './Payment';
import { PageTitle, Section } from '../../style/cart';

export default function ShoppingCart() {
    return (
        <Section>
            <PageTitle>장바구니</PageTitle>
            <ItemList />
            <Payment />
        </Section>
    );
}

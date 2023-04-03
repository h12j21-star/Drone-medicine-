import React from 'react';
import ItemList from './ItemList';
import Payment from './Payment';
import { PageTitle, Section } from '../../style/basket';

export default function ShoppingBasket() {
    return (
        <Section>
            <PageTitle>장바구니</PageTitle>
            <ItemList />
            <Payment />
        </Section>
    );
}
